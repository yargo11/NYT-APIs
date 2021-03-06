import styled from 'styled-components';
import { shade } from 'polished';

export const Header = styled.div`
  width: 100%;
  background: #2196f3;
  height: 150px;
  display: flex;
  align-items: center;

  div {
    max-width: 960px;
    margin: auto;
    display: flex;

    img {
      float: left;
      margin-right: 25px;
      border-radius: 50%;
      margin-top: 10px;
      border: 3px solid #fff;
    }
  }
`;

export const Body = styled.div`
  max-width: 960px;
  margin: auto;
  hr {
    margin-bottom: 20px;
  }
  p {
    margin: 10px;
    padding: 10px;
    border-radius: 10px;
    background: #70b7f0;
    color: #fff;
  }
`;

export const Title = styled.h1`
  font-size: 48px;
  color: #fff;
  display: flex;
  align-items: center;
`;

export const Form = styled.form`
  margin-top: 70px;
  margin-bottom: 50px;
  /* max-width: 60px; */

  display: flex;
  justify-content: center;

  button {
    padding: 0px 24px;
    height: 50px;
    background: #04d361;
    border: 0;
    box-shadow: 5px 5px 10px black;
    border-radius: 5px;
    cursor: pointer;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#04d361')};
    }
  }
`;
