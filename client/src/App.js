import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import "./scss/Navbar.scss";
import Navbar from "./components/Navbar";
import MyProfile from "./pages/MyProfile";
import Splash from "./pages/Splash";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import "bootstrap/dist/css/bootstrap.min.css";

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: "/graphql",
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const App = () => (
  <ApolloProvider client={client}>
  <Router>
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Splash} />
        <Route exact path="/mygoals" component={MyProfile} />
        <Route render={() => <h1 className="display-2">Wrong page!</h1>} />
      </Switch>
    </>
  </Router>
</ApolloProvider>
);

export default App;
