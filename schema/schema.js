const graphql = require('graphql');
const axios = require('axios');
const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLSchema } = graphql;

// user schema
const UserType = new GraphQLObjectType({
	name: 'User',
	fields: {
		id: { type: GraphQLString },
		firstName: { type: GraphQLString },
		age: { type: GraphQLInt }
	}
});

// RootQuery
const RootQuery = new GraphQLObjectType({
	name: 'RootQueryType',
	fields: {
		user: {
			type: UserType,
			args: { id: { type: GraphQLString } },
			// resolve goes and fetch the data
			resolve(parentValue, args) {
				return axios.get(`http://localhost:3000/users/${args.id}`).then(resp => resp.data);
			}
		}
	}
});

module.exports = new GraphQLSchema({
	query: RootQuery
});
