import React from "react";
import puff from "../../public/bean-bag.png"
import rian from "../../public/icons8-umbrella-64.png"
import cart from "../../public/icons8-shopping-bag-64.png"
import nap from "../../public/icons8-pillow-50.png"

const NavBar = () => {
  return (
    <nav className="nav-container">
      <div className="nav-container__logo">
        <h1>Pufi</h1>
      </div>
      <div className="nav-container__options">
        <ul>
          <li>
            <a href="">
              <img src={puff} alt="" />
              PUFI PUFF
              </a>
          </li>
          <li>
            <a href="">
              <img src={rian} alt="" />
              PUFI RAIN
              </a>
          </li>
          <li>
            <a href="">
            <img src={cart} alt="" />
              PUFI CART
              </a>
          </li>
          <li>
            <a href="">
              <img src={nap} alt="" />
              PUFI NAP
              </a>
          </li>
        </ul>
      </div>
      <div className="nav-container__options-user">
        <button>MI CUENTA</button>
        <button> MIS COMPRAS</button>
      </div>
    </nav>
  );
};

export default NavBar;
