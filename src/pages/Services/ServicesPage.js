import React from "react";
import { useNavigate } from "react-router";
import { useUserAuth } from "../../context/UserAuthContext";

import logoB from "../../assets/logoB.png";
import { BiLogOut } from "react-icons/bi";
import * as s from "./ServicesStyles";
import BannerComponet from "../../components/BannerComponet";

//import Slider from "react-slick";

const ServicesPage = () => {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/about");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <s.ServicesContainer>
      <div className="textUser">
        {user && user.email}

        <div onClick={handleLogout}>
          <div className="btnLogout"> {<BiLogOut />} </div>
          <div className="btnText"> Logout </div>
        </div>
      </div>
      <h1>Services Page</h1>
      <img src={logoB} alt="imagem Services" className="logoServices" />
      <BannerComponet />
    </s.ServicesContainer>
  );
};
export default ServicesPage;
