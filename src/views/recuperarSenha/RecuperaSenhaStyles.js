import styled from "@emotion/styled";

export const SenhaContainer = styled.div`
  h1 {
    font-size: 20px;
    padding: 25px;
    text-align: center;
  }

  * {
    margin: 3px;
    box-sizing: border-box;
  }

  .logo {
    margin: 20px;
    width: 30%;
    height: 30%;
  }

  .grid {
    width: 100%;
    min-height: 70vh;
    text-align: center;
    display: block;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }

  .gridLogin {
    width: 400px;
    border-radius: 10px;
    overflow: hidden;
    border-radius: 15px 15px 15px 15px;
    box-shadow: 3px 3px 2px 0px rgba(48, 170, 221, 1);
    padding: 20px 20px 20px 20px;

    margin-left: 0 auto;
    margin-right: 0 auto;
    margin-top: 50px;
  }

  .form {
    width: 100%;
  }

  .login-form-title {
    display: block;
    font-size: 30px;
    font-weight: bold;
    color: ${({ theme }) => theme.text};
    line-height: 1.5;
    text-align: center;
  }

  input {
    width: 70%;
    height: 30px;
    border-radius: 5px 5px 5px 5px;
    box-shadow: 2px 2px 2px 0px rgba(48, 170, 221, 1);
  }

  button {
    width: 69%;
    height: 30px;
    border-radius: 5px 5px 5px 5px;
    box-shadow: 2px 2px 2px 0px;
  }

  a {
    text-decoration: none;
    font-size: 0.9rem;
    margin-right: 20px;
    margin-left: 20px;
    font-weight: 600;
  }
`;
