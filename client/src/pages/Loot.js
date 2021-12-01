import './Loot.js';
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from, } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import GetAllPosts from '../Components/GetAllPosts';
import TreasureForm from '../Components/TreasureForm';
import GetAllTreasure from '../Components/GetAllTreasure';
import GetAllMagicItems from '../Components/GetAllMagicItems.js';

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

function Loot() {
  return (
    <div className="Loot">  
    <ApolloProvider client={client}> 
      {/*<TreasureForm /> */}
      <GetAllTreasure />
      <GetAllMagicItems />
    </ApolloProvider>
    </div>)

}

export default Loot;
