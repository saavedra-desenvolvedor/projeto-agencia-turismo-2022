import styled from "@emotion/styled";

export const HomeContainer = styled.div`
  h1 {
    font-size: 20px;
    margin: 35px;
    text-align: center;
  }

  /*
   button {
    width: 69%;
    height: 30px;
    border-radius: 5px 5px 5px 5px;
    box-shadow: 2px 2px 2px 0px;
  }
  */
  .btnLogout {
    display: inline;
    text-decoration: none;
    list-style-type: none;
    cursor: pointer;
    color: red;
    font-weight: bold;
    font-size: 20px;
  }
  .btnText {
    display: inline;
    text-decoration: none;
    list-style-type: none;
    cursor: pointer;
    font-weight: 500;
    align-items: end;
  }
  .textUser {
    margin: 5px;
    text-align: end;
    @media screen and (min-width: 300px) and (max-width: 480px) {
      width: 30%;
      text-align: center;
      margin-left: -40px;
    }
  }

  .carousel {
    width: 95%;

    cursor: pointer;
    @media screen and (min-width: 300px) and (max-width: 480px) {
      width: 30%;
      right: 40px;
    }
    @media screen and (min-width: 600px) and (orientation: landscape) {
    }
    @media screen and (max-width: 380px) and (orientation: portrait) {
    }
  }
`;
