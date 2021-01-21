import React, { useContext, createContext } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.scss";
import Layout from "./components/Layout/Layout";
import { FormContext } from "./context/FormContext";
import Page_Sondage1 from "./pages/Page_Sondage1";
import Page_Sondage2 from "./pages/Page_Sondage2";

function App() {
  return (
    <Router>
      <FormContext>
        <Layout>
          <Switch>
            <Route exact path={["/", "/pageQ1"]} component={Page_Sondage1} />
            <Route path={"/pageQ2"} component={Page_Sondage2} />
          </Switch>
        </Layout>
      </FormContext>
    </Router>
  );
}

export default App;
