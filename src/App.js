import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from "./components/Dashboard/Sidebar/Sidebar";
import MainData from "./components/Dashboard/MainData/MainData";
import Header from "./components/Dashboard/Header/Header";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Header />
          <div style={{display: 'flex'}}>
            <Sidebar />
            <MainData />
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
