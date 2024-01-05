import logo from "./logo.svg";
import "./App.css";
import Variables from "./topics/Variables";
import Events from "./topics/Events";
import SetState from "./topics/SetState";
import { Route, Routes, BrowserRouter, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Navbar
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link active" to="/variables">
                    Variables
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/events">
                    Events
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/setState">
                    Set-State
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Routes>
          {/*Default Route */}
          <Route path="/" element={<Variables />}></Route>
          {/*Routes inside Variable*/}
          <Route path="/variables" element={<Variables></Variables>}></Route>
          <Route path="/events" element={<Events></Events>}></Route>
          <Route path="setState" element={<SetState></SetState>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
