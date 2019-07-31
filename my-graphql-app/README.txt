GET SCHEMA
==========
npm install -g get-graphql-schema
get-graphql-schema http://localhost:4000/graphql > ./schema.graphql

COMPILE SCHEMA
==============
npm install -g graphql
npm install -g relay-compiler
relay-compiler --src ./src --schema ./schema.graphql
