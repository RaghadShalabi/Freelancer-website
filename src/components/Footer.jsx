export default function Footer() {
  return (
    <footer>
      <section
        className="footer1 text-center text-white"
        style={{
          backgroundColor: "rgb(44 62 80)",
          paddingTop: "78px",
        }}
      >
        <div className="container" style={{ paddingBottom: "65px" }}>
          <div className="row">
            <div className="col-lg-4 mb-5 mb-lg-0">
              <h4 className="text-uppercase mb-4">Location</h4>
              <p className="lead mb-0" style={{ fontWeight: "400" }}>
                2215 John Daniel Drive
                <br />
                Clark, MO 65243
              </p>
            </div>
            <div className="col-lg-4 mb-5 mb-lg-0">
              <h4 className="text-uppercase mb-4">Around the Web</h4>
              <a
                className="btn btn-outline-light btn-social mx-1 rounded-circle border-2"
                style={{
                  height: "48px",
                  width: "48px",
                  padding: "10px",
                  fontSize: "18px",
                }}
                href="#"
              >
                <i class="fab fa-fw fa-facebook-f"></i>
              </a>
              <a
                className="btn btn-outline-light btn-social mx-1 rounded-circle border-2"
                style={{
                  height: "48px",
                  width: "48px",
                  padding: "10px",
                  fontSize: "18px",
                }}
                href="#"
              >
                <i class="fab fa-fw fa-twitter"></i>
              </a>
              <a
                className="btn btn-outline-light btn-social mx-1 rounded-circle border-2"
                style={{
                  height: "48px",
                  width: "48px",
                  padding: "10px",
                  fontSize: "18px",
                }}
                href="#"
              >
                <i class="fab fa-fw fa-linkedin-in"></i>
              </a>
              <a
                className="btn btn-outline-light btn-social mx-1 rounded-circle border-2"
                style={{
                  height: "48px",
                  width: "48px",
                  padding: "10px",
                  fontSize: "18px",
                }}
                href="#"
              >
                <i class="fab fa-fw fa-dribbble"></i>
              </a>
            </div>
            <div className="col-lg-4">
              <h4 className="text-uppercase mb-4">About Freelancer</h4>
              <p className="lead mb-0" style={{ fontWeight: "400" }}>
                Freelance is a free to use, MIT licensed Bootstrap theme created
                by{" "}
                <a
                  href="http://startbootstrap.com"
                  style={{ color: "rgb(26 188 156)" }}
                >
                  Start Bootstrap
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        className="footer2 py-3 text-white"
        style={{ backgroundColor: "#1a252f" }}
      >
        <div className="small container text-center">
          <p className="mb-0">Copyright © Your Website 2024</p>
        </div>
      </section>
    </footer>
  );
}
