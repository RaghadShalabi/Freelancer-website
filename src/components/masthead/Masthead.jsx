import mySVG from "/src/assets/img/avataaars.svg";
import "./Masthead.css";
export default function Masthead() {
  return (
    <header
      className="masthead text-white text-center"
      style={{ backgroundColor: "rgb(26 188 156)" }}
    >
      <div
        className="container d-flex align-items-center flex-column"
        style={{ paddingBottom: "100px" }}
      >
        <img
          className="masthead-avatar mb-5"
          src={mySVG}
          alt="Avatar"
          width="320"
          height="320"
          style={{ margin: "245px" }}
        />
        <h1
          className="masthead-heading text-uppercase mb-4 fw-bold"
          style={{ fontSize: "5.6rem" }}
        >
          Start Bootstrap
        </h1>
        <div className="divider-custom divider-light m-2.5 mb-4" style={{width:"80%"}}>
          <div className="divider-custom-line" />
          <div className="divider-custom-icon">
            <i class="fas fa-star"></i>
          </div>
          <div className="divider-custom-line" />
        </div>
        <p className="masthead-subheading font-weight-light mb-0 fs-3 py-3">
          Graphic Artist - Web Designer - Illustrator
        </p>
      </div>
    </header>
  );
}
