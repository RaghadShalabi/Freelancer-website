import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg text-uppercase fixed-top"
      id="mainNav"
      style={{ backgroundColor: "rgb(44 62 80)" }}
    >
      <div className="container">
        <Link
          className="navbar-brand text-white font-weight-bold"
          to={'/'}
          style={{ fontSize: "2em", fontWeight: "bold", padding: "30px" }}
        >
          Start Bootstrap
        </Link>
        <button
          className="navbar-toggler text-uppercase font-weight-bold text-white rounded"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="true"
          aria-label="Toggle navigation"
        >
          Menu
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-collapse collapse show" id="navbarResponsive">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item mx-0 mx-lg-1">
              <Link
                className="nav-link py-3 px-0 px-lg-3 rounded text-white"
                to={'/portfolio'}
                style={{ fontSize: "1.3em", fontWeight: "bold" }}
              >
                Portfolio
              </Link>
            </li>
            <li className="nav-item mx-0 mx-lg-1">
              <Link
                className="nav-link py-3 px-0 px-lg-3 rounded text-white"
                to={'/about'}
                style={{ fontSize: "1.3em", fontWeight: "bold" }}
              >
                About
              </Link>
            </li>
            <li className="nav-item mx-0 mx-lg-1">
              <Link
                className="nav-link py-3 px-0 px-lg-3 rounded text-white"
                to={'/contact'}
                style={{ fontSize: "1.3em", fontWeight: "bold" }}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
