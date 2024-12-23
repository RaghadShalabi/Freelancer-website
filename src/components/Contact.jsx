export default function Contact() {
  return (
    <section className="page-section" id="contact" style={{paddingBottom:"94px"}}>
      <div className="container">
        <h2
          className="page-section-heading text-center text-uppercase"
          style={{
            fontSize: "4em",
            fontWeight: "bold",
            color: "rgb(44 62 80)",
            paddingTop:"180px"
          }}
        >
          Contact Me
        </h2>
        <div
          className="divider-custom"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100",
            margin: "auto",
            paddingBottom: "50px",
          }}
        >
          <div
            className="divider-custom-line"
            style={{
              flexGrow: "0.15",
              height: "5px",
              backgroundColor: "rgb(44 62 80)",
              margin: "0 20px%",
            }}
          ></div>
          <div
            className="divider-custom-icon"
            style={{ color: "rgb(44 62 80)", fontSize: "45px" }}
          >
            <i className="fas fa-star"></i>
          </div>
          <div
            className="divider-custom-line"
            style={{
              flexGrow: "0.15",
              height: "5px",
              backgroundColor: "rgb(44 62 80)",
              margin: "0 20px%",
            }}
          ></div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8 col-xl-7">
            <form id="contactForm">
              <div className="form-floating mb-4" >
                <input
                  className="form-control"
                  id="name"
                  type="text"
                  placeholder="Full name"
                  data-sb-validations="required"
                  style={{
                    border: "none",
                    borderBottom: "2px solid #cccccc",
                    fontSize: "24px",
                    height: "84px",
                  }}
                />
                <label
                  htmlFor="name"
                  style={{
                    fontSize: "24px",
                    color: "#6c757d",
                  }}
                >
                  Full name
                </label>
              </div>

              <div className="form-floating mb-4">
                <input
                  className="form-control"
                  id="email"
                  type="email"
                  placeholder="Email address"
                  data-sb-validations="required"
                  style={{ border: "none", borderBottom: "2px solid #cccccc" ,fontSize: "24px",
                    height: "84px",}}
                />
                <label
                  htmlFor="email"
                  style={{ fontSize: "24px", color: "#6c757d" }}
                >
                  Email address
                </label>
              </div>

              <div className="form-floating mb-4">
                <input
                  className="form-control"
                  id="phone"
                  type="tel"
                  placeholder="Phone number"
                  data-sb-validations="required"
                  style={{ border: "none", borderBottom: "2px solid #cccccc",fontSize: "24px",
                    height: "84px", }}
                />
                <label
                  htmlFor="phone"
                  style={{ fontSize: "24px", color: "#6c757d" }}
                >
                  Phone number
                </label>
              </div>

              <div className="form-floating mb-4">
                <textarea
                  className="form-control"
                  id="message"
                  placeholder="Message"
                  data-sb-validations="required"
                  style={{
                    border: "none",
                    borderBottom: "2px solid #cccccc",
                    fontSize: "28px",
                    height: "180px",
                  }}
                ></textarea>
                <label
                  htmlFor="message"
                  style={{ fontSize: "24px", color: "#6c757d",height:"40%"}}
                >
                  Message
                </label>
              </div>

              <button
                className="btn btn-xl disabled text-white rounded-3 border-1"
                style={{
                  backgroundColor: "rgb(26 188 156)",
                  padding: "20px",
                  fontSize: "20px",
                  fontWeight: "400",
                  width: "130px",
                }}
                id="submitButton"
                type="submit"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
