import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.scss";
import Layout from "./components/Layout/Layout";
import Page_Sondage1 from "./pages/Page_Sondage1";
function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path={["/", "pageQ1"]} component={Page_Sondage1} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
