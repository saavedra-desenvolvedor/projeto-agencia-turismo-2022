import styled from "@emotion/styled";

export const NovaContainer = styled.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
  }

  .logo {
    margin: 20px;
    margin-left: 120px;
    width: 30%;
    height: 30%;
  }

  display: flex;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 10;
  background: white;

  section {
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
  }
  section .imgBx {
    position: relative;
    width: 50%;
    height: 100%;
  }
  section .imgBx:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(225deg, #e91e63, #03a9f4);
    z-index: 1;
    mix-blend-mode: screen;
  }
  section .imgBx img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  section .contetBx {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 100%;
  }
  section .contetBx .formBx {
    width: 50%;
  }
  section .contetBx .formBx h2 {
    color: #607d8b;
    font-weight: 600;
    font-size: 1.3em;
    text-transform: uppercase;
    margin-bottom: 20px;
    margin-left: 110px;
    border-bottom: 4px solid #ff4584;
    display: inline-block;
    letter-spacing: 19x;
  }
  section .contetBx .formBx .inputBx {
    margin-bottom: 20px;
  }
  section .contetBx .formBx .inputBx span {
    font-size: 16px;
    margin-bottom: 5px;
    display: inline-block;
    color: #607d8b;
    font-weight: 300px;
    letter-spacing: 1px;
  }
  section .contetBx .formBx .inputBx input {
    width: 100%;
    padding: 10px 20px;
    outline: none;
    font-weight: 400;
    border: 1px solid #607d8b;
    font-size: 16px;
    letter-spacing: 1px;
    color: #607d8b;
    background: transparent;
    border-radius: 30px;
  }
  section .contetBx .formBx .inputBx input[type="submit"] {
    background: #ff4584;
    color: #fff;
    outline: none;
    border: none;
    font-weight: bold;
    cursor: pointer;
    &:hover {
      background: #d61c4e;
      transition: all 250ms linear 0s;
    }
  }
  a {
    color: #0a81ab;
    display: inline-block;
    text-decoration: none;
    font-size: 1.1em;
    padding: 6px;
    font-weight: 500;
    &:hover {
      color: #d61c4e;
      transition: all 250ms linear 0s;
    }
  }
  section .contetBx .formBx h3 {
    color: #607d8b;
    text-align: center;
    margin: 80px 0 10px;
    font-weight: 500;
  }
  section .contetBx .formBx p {
    font-weight: 550;
  }
  section .contetBx .formBx .sci {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  section .contetBx .formBx .sci li {
    list-style-type: none;
    color: ${({ theme }) => theme.text};
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 7px;
    cursor: pointer;
    font-size: 30px;

    &:hover {
      color: #d61c4e;
      transition: all 250ms linear 0s;
    }
  }
  .loginEye {
    color: #000000;
    display: flex;
    justify-content: end;
    margin-top: -35px;
    padding: 0 10px;
    cursor: pointer;
  }
  /* RESPONSIVIDADE */
  @media (max-width: 768px) {
    section .imgBx {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
    section .contetBx {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      z-index: 1;
    }
    section .contetBx .formBx {
      width: 100%;
      padding: 40px;
      background: rgb(255 255 255 / 0.9);
      margin: 50px;
    }
    section .contetBx .formBx h3 {
      color: #607d8b;
      text-align: center;
      margin: 30px 0 10px;
      font-weight: 500;
    }
  }
`;
