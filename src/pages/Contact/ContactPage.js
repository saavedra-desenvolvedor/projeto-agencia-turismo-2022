import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useUserAuth } from "../../context/UserAuthContext";
import { db } from "../../firebaseDb";

import logoB from "../../assets/logoB.png";
import { BiLogOut } from "react-icons/bi";
import { GiRotaryPhone } from "react-icons/gi";
import * as s from "./ContactStyles";

const ContactPage = () => {
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

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("contacts")
      .add({
        name: name,
        email: email,
        message: message
      })
      .then(() => {
        setLoader(false);
        alert("Sua mensagem foi enviada com Sucesso👍");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <s.ContactContainer>
      <form className="form" onSubmit={handleSubmit}>
        <div className="textUser">
          {user && user.email}

          <div onClick={handleLogout}>
            <div className="btnLogout"> {<BiLogOut />} </div>
            <div className="btnText"> Logout </div>
          </div>
        </div>

        <img src={logoB} alt="imagem home" className="logoContact" />
        <h1>Contact Form {<GiRotaryPhone />}</h1>
        <label>Name</label>
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>Email</label>
        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Message</label>
        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>

        <button
          type="submit"
          style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)" }}
        >
          Submit
        </button>
      </form>
    </s.ContactContainer>
  );
};
export default ContactPage;
