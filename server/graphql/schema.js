import {
  makeExecutableSchema
} from 'graphql-tools';

import resolvers from './resolvers.js';

const typeDefs = `
  type Author {
    id: Int!
    firstName: String
    lastName: String
    """
    the list of Posts by this Author
    """
    posts: [Post]
  }

  type Post {
    id: Int!
    title: String
    author: String
    votes: Int
  }

  #the schema allows the following query:
  
  type Query {
    posts: [Post]
    author(id: Int!): Author
  }

  #this schema allows the following mutation
  
  type Mutation {
    upvotePost(postId: Int!): Post
  }
`



const schema = makeExecutableSchema({typeDefs, resolvers});

export default schema;

/*

type Author {
  posts: needs resolver to retrieve [Post]
}

type Post {
  author: needs resolver to retrieve String name
}

*/

