import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header, Sidebar, About, Skills, Projects, Footer } from "./components";
import { HomePage } from "./pages";
import "./index.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/skills">
            <Skills />
          </Route>
          <Route exact path="/projects">
            <Projects />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
