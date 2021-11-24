import logo from './logo.svg';
import './App.css';
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from, } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import GetAllPosts from './Components/GetAllPosts';
import Form from './Components/Form';

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

function App() {
  return (
    <div className="App">  <ApolloProvider client={client}>
      <GetAllPosts /> 
    </ApolloProvider>
    <ApolloProvider client={client}> 
      <Form /> 
    </ApolloProvider>
    </div>)
  
  //(
  //  <div className="App">
  //    <header className="App-header">
  //      <img src={logo} className="App-logo" alt="logo" />
  //      <p>
  //        Edit <code>src/App.js</code> and save to reload.
  //      </p>
  //      <a
  //        className="App-link"
  //        href="https://reactjs.org"
  //        target="_blank"
  //        rel="noopener noreferrer"
  //      >
  //        Learn React
  //      </a>
  //    </header>
  //  </div>
  //);
}

export default App;
