import styled from "@emotion/styled";

export const DestinationsContainer = styled.div`
  /* titulo */
  h1 {
    font-size: 20px;
    margin: 10px;
    text-align: center;
    color: red;
  }
  /* Css Card */
  .home {
    display: flex;
    padding: 30px 100px;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .card {
    width: 30%;
    padding: 10px;
    border-radius: 20px;
    -webkit-box-shadow: 0px 5px 33px -21px rgba(66, 68, 90, 1);
    -moz-box-shadow: 0px 5px 33px -21px rgba(66, 68, 90, 1);
    box-shadow: 0px 5px 33px -21px rgba(66, 68, 90, 1);
  }

  .img {
    width: 100%;
    height: 150px;
    object-fit: cover;
    margin: 20px 0px;
  }

  .cardButton {
    border: none;
    border-radius: 10px;
    /*background-color: rgba(53, 16, 102, 0.678); */
    padding: 10px;
    /*color: white; */
    font-weight: bold;
    cursor: pointer;
  }
  .title {
    font-weight: bold;
  }

  .desc {
    color: ${({ theme }) => theme.text};
    margin-bottom: 20px;
    line-height: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .postImg {
    width: 100%;
    height: 300px;
    object-fit: cover;
    margin-bottom: 20px;
  }

  .postDesc {
    padding: 0 100px;
    font-size: 24px;
    font-weight: 300;
    color: gray;
    margin-top: 50px;
  }
  .postLongDesc {
    padding: 100px;
    padding-top: 50px;
    font-size: 18px;
    line-height: 24px;
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

  @media screen and (max-width: 992px) {
    .card {
      width: 100%;
      margin-bottom: 50px;
    }

    .wrapper {
      width: 65%;
      height: 90%;
      flex-direction: column;
    }
  }
`;
