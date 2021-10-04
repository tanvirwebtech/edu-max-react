import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import NotFound from "./components/NotFound/NotFound";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <Router>
            <Header />
            <Switch>
                <Route exact path="/home">
                    <Home />
                </Route>
                <Route exact path="/about">
                    <About></About>
                </Route>
                <Route exact path="/service">
                    <Services></Services>
                </Route>
                <Route exact path="*">
                    <NotFound></NotFound>
                </Route>
            </Switch>
            <Footer />
        </Router>
    );
}

export default App;
