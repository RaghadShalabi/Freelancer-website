export default function About() {
  return (
    <section
      className="page-section text-white"
      id="about"
      style={{
        backgroundColor: "rgb(26 188 156)",
        paddingTop: "100px",
        paddingBottom: "170px",
      }}
    >
      <div className="container">
        <h2
          className="page-section-heading text-center text-uppercase text-white"
          style={{
            fontSize: "4em",
            fontWeight: "bold",
          }}
        >
          About
        </h2>
        <div
          className="divider-custom divider-light"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100",
            margin: "auto",
            paddingBottom: "20px",
          }}
        >
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon">
            <i className="fas fa-star"></i>
          </div>
          <div className="divider-custom-line"></div>
        </div>

        <div className="row">
          <div className="col-lg-4 ms-auto">
            <p className="lead fs-4" style={{ fontWeight: "450" }}>
              Freelancer is a free bootstrap theme created by Start Bootstrap.
              The download includes the complete source files including HTML,
              CSS, and JavaScript as well as optional SASS stylesheets for easy
              customization.{" "}
            </p>
          </div>
          <div className="col-lg-4 me-auto">
            <p className="lead fs-4" style={{ fontWeight: "450" }}>
              You can create your own custom avatar for the masthead, change the
              icon in the dividers, and add your email address to the contact
              form to make it fully functional!
            </p>
          </div>
        </div>
      </div>
      <div className="text-center mt-4" style={{ width: "100%" }}>
        <a
          className="btn btn-xl btn-outline-light rounded-3 border-3"
          href="https://startbootstrap.com/theme/freelancer/"
        >
          <i
            class="fas fa-download me-2"
            style={{ fontSize: "30px", padding: "20px 15px" }}
          ></i>
          <span style={{fontSize:"26px" ,paddingRight:"15px"}}>Free Download!</span>
        </a>
      </div>
    </section>
  );
}
