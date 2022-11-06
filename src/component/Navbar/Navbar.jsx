import { NavLink } from "react-router-dom";
import "./Navbar.styles.css";

function NavBar() {
  return (
    <nav>
      <div>
        <img
          src="https://digipplus.com/static/homepage/imgs/digipplus-logo-70x70.38a25d5cef0d.png"
          alt="logo"
        />
        <span className="digi">DIGI</span>
        <span className="plus">PPLUS</span>
      </div>
      <div className="link-con">
        <NavLink className="navlink" to="/">
          HOME
        </NavLink>
        <NavLink className="navlink" to="/myjobs">
          My Jobs
        </NavLink>
        <NavLink className="navlink" to="/mypayment">
          My Payment
        </NavLink>
        <NavLink className="navlink" to="/myoffer">
          My Offerletter
        </NavLink>
        <NavLink className="navlink" to="/mycert">
          My Certificate
        </NavLink>
      </div>
      <div className="con">
        <p className="circle">
          <span className="text1"> l</span>
          <span className="text2"> D</span>
        </p>
      </div>
    </nav>
  );
}

export default NavBar;
