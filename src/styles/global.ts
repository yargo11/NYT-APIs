import { createGlobalStyle } from 'styled-components';
import tomtom1 from '../assets/tomtom1.jpg';

export default createGlobalStyle`
*{
margin:0;
padding:0;
outline:0;
box-sizing:border-box;
}

body{
  /* background:#fff; */
  background-image:url(${tomtom1});
  background-repeat: no-repeat;
  background-size: 100%;
  -webkit-font-smoothing: antialiased;
}

body, input, button {
  font: 16px Roboto, sans-serif;
}

#root{
  /* max-width:960px; */
  /* margin: 0 auto; */
  /* padding: 40px 20px; */
}
`;
