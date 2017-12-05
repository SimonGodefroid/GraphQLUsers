const express = require('express');
const expressGraphQL = require('express-graphql');

const app = express();
// for dev only
app.use(
	'/graphql',
	expressGraphQL({
		graphiql: true
	})
);
app.listen(4000, () => {
	console.log('Listening');
});
