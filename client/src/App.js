import "./App.css";
import Navbar from "./Common/Navbar";
import HomePage from "./Home/HomePage";
import NotFound from "./Common/404NotFound";
import UnderConstruction from "./Common/UnderConstruction";
import CertificationsPage from "./Certifications/CertificationsPage";
import ProjectsPage from "./Projects/ProjectsPage";
import ContactPage from "./Contact/ContactPage";
import ScrollToTop from "./Common/ScrollToTop";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <ScrollToTop />
        <Navbar />

        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/certifications" component={UnderConstruction} />
          <Route exact path="/projects" component={ProjectsPage} />
          <Route exact path="/contact" component={ContactPage} />
          <Route path="/" component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
