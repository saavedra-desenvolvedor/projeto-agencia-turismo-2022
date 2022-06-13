import React from "react";
import { useNavigate } from "react-router";
import { useUserAuth } from "../../context/UserAuthContext";

//import logoB from "../../assets/logoB.png";
import { BiLogOut } from "react-icons/bi";
import CarouselComponent from "../../components/CarouselComponent";

import * as s from "./HomeStyles";

const HomePage = () => {
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
    <s.HomeContainer>
      <div className="textUser">
        {user && user.email}
        {user && user.uidphotoURL}

        <div onClick={handleLogout}>
          <div className="btnLogout"> {<BiLogOut />} </div>
          <div className="btnText"> Logout </div>
        </div>
      </div>

      <div className="carousel">
        <CarouselComponent />
      </div>
    </s.HomeContainer>
  );
};
export default HomePage;
