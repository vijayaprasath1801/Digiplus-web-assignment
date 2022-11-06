import "./Home.styles.css";

function Home() {
  return (
    <div className="home">
      <div className="imgh1">
        <img
          src="https://digipplus.com/static/homepage/imgs/digipplus-logo-70x70.38a25d5cef0d.png"
          alt="img"
        />
        <h2>Welcome to Digipplus</h2>
      </div>
      <div className="announce">
        <h3>
          Announcements <i className="fa fa-duotone fa-bullhorn"></i>
        </h3>
      </div>
      <div className="antext">
        <p className="text">
          We are working on adding Projetcs and Internships ,So just fill up
          profile only
        </p>
      </div>
      <div className="lastbox">
        <h3>Work Action</h3>
        <p>View Intern Data</p>
        <h3>Internships</h3>
        <div className="solution">
          <h3>Solution Writing</h3>
          <p>Write Solution</p>
        </div>
      </div>
    </div>
  );
}
export default Home;
