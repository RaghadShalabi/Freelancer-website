export default function Navbar() {
  return (
      <nav
        className="navbar navbar-expand-lg text-uppercase fixed-top"
        id="mainNav" style={{ backgroundColor:"rgb(44 62 80)"}}
      >
        <div className="container" >
          <a className="navbar-brand text-white font-weight-bold" href="#page-top" style={{fontSize: "2em", fontWeight:"bold", padding:"30px"}}>
            Start Bootstrap
          </a>
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
          <div
            className="navbar-collapse collapse show"
            id="navbarResponsive"
          >
            <ul className="navbar-nav ms-auto">
              <li className="nav-item mx-0 mx-lg-1">
                <a
                  className="nav-link py-3 px-0 px-lg-3 rounded text-white"
                  href="#portfolio" style={{fontSize: "1.3em", fontWeight:"bold"}}
                >
                  Portfolio
                </a>
              </li>
              <li className="nav-item mx-0 mx-lg-1">
                <a className="nav-link py-3 px-0 px-lg-3 rounded text-white" href="#about" style={{fontSize: "1.3em", fontWeight:"bold"}}>
                  About
                </a>
              </li>
              <li className="nav-item mx-0 mx-lg-1">
                <a
                  className="nav-link py-3 px-0 px-lg-3 rounded text-white"
                  href="#contact" style={{fontSize: "1.3em", fontWeight:"bold"}}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  );
}
