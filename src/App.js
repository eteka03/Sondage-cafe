import React, { useContext, createContext } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.scss";
import Layout from "./components/Layout/Layout";
import { FormContext } from "./context/FormContext";
import Page_Sondage1 from "./pages/Page_Sondage1";

function App() {
  return (
    <Router>
      <FormContext>
        <Layout>
          <Switch>
            <Route path={["/", "pageQ1"]} component={Page_Sondage1} />
          </Switch>
        </Layout>
      </FormContext>
    </Router>
  );
}

export default App;
