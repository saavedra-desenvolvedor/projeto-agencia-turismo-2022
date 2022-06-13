import styled from "@emotion/styled";

export const BlogContainer = styled.div`
  .logoBlog {
    max-width: 40%;
    min-width: 40%;
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
`;
