import React from "react";
import { useNavigate } from "react-router";
import { useUserAuth } from "../../context/UserAuthContext";

//import logoB from "../../assets/logoB.png";
import { BiLogOut } from "react-icons/bi";

import * as s from "./DestinationsStyle";
import { posts } from "../../data";
import Card from "../../components/card";

const DestinationsPage = () => {
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
    <s.DestinationsContainer>
      <div className="textUser">
        {user && user.email}

        <div onClick={handleLogout}>
          <div className="btnLogout"> {<BiLogOut />} </div>
          <div className="btnText"> Logout </div>
        </div>
      </div>
      <h1>Destinos</h1>
      <div className="home">
        {/*<img src={logoB} alt="imagem Destinations" className="logoDestinations" /> */}
        {posts.map((post) => (
          <Card key={post.id} post={post} />
        ))}
      </div>
    </s.DestinationsContainer>
  );
};
export default DestinationsPage;
