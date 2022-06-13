import styled from "@emotion/styled";

export const ContactContainer = styled.div`
  .logoContact {
    max-width: 18%;
    min-width: 18%;
    /*object-fit: contain; */
    height: auto;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
  h1 {
    font-size: 20px;
    margin: 15px;
    text-align: center;
    svg {
      font-size: 30px;
    }
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
  }
  .textUser {
    margin: 5px;
    text-align: end;
  }

  /* ContactPage.js */

  .form {
    margin: 0 auto;
    width: 350px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .form > h1 {
    margin-bottom: 20px;
  }

  .form > input,
  textarea {
    padding: 20px;
    height: 50px;
    /* box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.137); */
    margin-bottom: 15px;
    /* border: none; */
    background: #fff;
    font-size: 16px;
    outline: none;
    border-radius: 5px 5px 5px 5px;
    box-shadow: 2px 2px 2px 0px rgba(48, 170, 221, 1);
  }

  /*
  .form > input:focus,
  textarea:focus {
    border: 1px solid rgb(0, 0, 196);
  } 
  */

  .form > textarea {
    height: 130px;
    max-width: 350px;
    min-height: 80px;
    border-radius: 5px 5px 5px 5px;
    border: 2px solid;
  }

  .form > label {
    padding-bottom: 1px;
    font-weight: bold;
  }

  .form > button {
    padding: 5px;
    border: none;
    height: 40px;
    background-color: rgb(2, 2, 110);
    font-weight: 500;
    font-size: 20px;

    color: #fff;
    cursor: pointer;
    transition: 0.2s ease-in-out;
    margin-top: -10px;

    border-radius: 5px 5px 5px 5px;
    box-shadow: 2px 2px 2px 0px;
    color: ${({ theme }) => theme.text};
    &:hover {
      color: rgb(0, 191, 255);
      transition: all 250ms linear 0s;
    }
  }

  .form > button:hover {
    background-color: rgb(0, 0, 196);
  }
`;
