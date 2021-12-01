import './HighScore.js';
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from, } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import GetAllPosts from '../Components/GetAllPosts';
import PostForm from '../Components/PostForm';

const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({message, location, path}) => {
      alert(`Graphql error ${message}`);
    });
  }
});

const link = from([
  errorLink,
  new HttpLink({uri:"http://localhost:4000/graphql"}),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link
});

function HighScore() {
  return (
    <div className="HighScore">  <ApolloProvider client={client}>
      <GetAllPosts /> 
      <PostForm /> 
    </ApolloProvider>
    </div>)

}

export default HighScore;
