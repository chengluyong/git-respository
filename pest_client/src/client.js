import { ApolloClient      } from 'apollo-client';
import { InMemoryCache     } from 'apollo-cache-inmemory';
import { HttpLink          } from 'apollo-link-http';


// 构造 ApolloClient
//
// query 和 mutation 使用 http
// subscription 使用 websocket


const host = 'localhost';
const port = 4000;

const link_http = new HttpLink({ uri: `http://${host}:${port}/graphql` });

const config =
  {
    link: link_http,
    cache: new InMemoryCache()
  };

const client = new ApolloClient(config);


export default client;
