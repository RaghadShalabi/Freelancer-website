import cabin from "src/assets/img/portfolio/cabin.png";
import cake from "src/assets/img/portfolio/cake.png";
import circus from "src/assets/img/portfolio/circus.png";
import game from "src/assets/img/portfolio/game.png";
import safe from "src/assets/img/portfolio/safe.png";
import submarine from "src/assets/img/portfolio/submarine.png";
export default function Portfolio() {
  const portfolioItems = [
    { id: 1, image: { cabin }, title: "Cabin" },
    { id: 2, image: { cake }, title: "Cake" },
    { id: 3, image: { circus }, title: "Circus" },
    { id: 4, image: { game }, title: "Game" },
    { id: 5, image: { safe }, title: "Safe" },
    { id: 6, image: { submarine }, title: "Submarine" },
  ];
  return (
    <div className="container" style={{ paddingBottom: "70px" }}>
      <h2
        className=" text-center text-uppercase mb-0"
        style={{
          fontSize: "4em",
          fontWeight: "bold",
          color: "rgb(44 62 80)",
          paddingTop: "85px",
        }}
      >
        Portfolio
      </h2>
      <div
        className="divider-custom  divider-light my-3"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100",
          margin: "auto",
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
        />
        <div
          className="divider-custom-icon"
          style={{ color: "rgb(44 62 80)", fontSize: "45px" }}
        >
          <i class="fas fa-star"></i>
        </div>
        <div
          className="divider-custom-line "
          style={{
            flexGrow: "0.15",
            height: "5px",
            backgroundColor: "rgb(44 62 80)",
            margin: "0 20px%",
          }}
        />
      </div>

      <div className="row justify-content-center">
        {portfolioItems.map((item) => (
          <div className="col-md-6 col-lg-4 mb-5" key={item.id}>
            <img
              className="img-fluid"
              src={item.image}
              alt={item.title}
              style={{ borderRadius: "8px" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
