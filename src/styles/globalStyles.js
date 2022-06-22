import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*, *::before, *::after {
margin: 0;
padding: 0;
box-sizing: border-box;
}


body {  

background: ${({ theme }) => theme.bg2};
color: ${({ theme }) => theme.text};
font-family: 'Roboto', sans-serif;
letter-spacing: .6px; 

}
/*LOGIN */
.gridLogin {
background: ${({ theme }) => theme.bgLogin};
}
.btnLogin {
background: ${({ theme }) => theme.bgBottonCard};
&:hover {
background: rgba(255,140,0);
transition: all 250ms linear 0s;
}
}
/* a {
color: ${({ theme }) => theme.text};
text-decoration: none;
}
*/
/* CSS CARD POST */
.desc {
color: ${({ theme }) => theme.text}; 
}
.postDesc {
color: ${({ theme }) => theme.text};
font-weight:600; 
}
.cardButton {
color: ${({ theme }) => theme.titleCard};
background: ${({ theme }) => theme.bgBottonCard};
}
.postTitle {
color: ${({ theme }) => theme.titleCard}; 
text-align: center;
font-size: 26px;
font-weight: bold;
}
.postImg {
width: 100%;
height: 300px;
object-fit: cover;
margin-bottom: 10px;
}
.postDesc {
padding: 0 100px;
font-size: 22px;
font-weight: 300;
color: ${({ theme }) => theme.titleCard};
margin-top: 10px;
}
.postLongDesc {
padding: 100px;
padding-top: 50px;
font-size: 18px;
font-style: italic;
line-height: 24px;
margin-top: -30px;
}

.textVoltar {
font-size: 20px;
font-weight: bold; 
display: flex;
}
.btnVolta { 
display: flex;
font-size: 30px; 
width: 22px;
height: 22px; 
margin-left: 50px;
cursor: pointer;
border-radius: 50%;
background: ${({ theme }) => theme.bgBottonCard};
} 
@media screen and (max-width: 992px) {
    .postImg {
      width: 70%;   
      height: 20%;
      margin-left: -48px;
      
      
    }
    .postTitle {
      
    }
}

`;
