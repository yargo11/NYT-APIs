import styled from 'styled-components';
import { shade } from 'polished';

export const Header = styled.div`
  width: 100%;
  background: #fff;
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
    }
  }
`;

export const Body = styled.div`
  max-width: 960px;
  margin: auto;

  div {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  hr {
    margin-bottom: 20px;
  }

  a {
    text-decoration: none;
  }
`;

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
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

export const Books = styled.div`
  a {
    text-decoration: none;

    max-width: 850px;
    margin: auto;

    padding: 20px 50px;
    border-radius: 10px;
    box-shadow: 5px 5px 10px black;

    color: #fff;
    background: #a9a9a9;

    display: flex;
    place-content: space-between;

    transition: transform 0.2s;

    p {
      align-self: center;
    }
    div {
      width: 33%;
    }

    &:hover {
      transform: translateX(10px);
    }

    & + a {
      margin-top: 20px;
    }
  }
`;

export const CatFact = styled.div`
  max-width: 960px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;

  background: #70b7f0;
  padding: 10px;
  margin: 10px;
  border-radius: 10px;

  transition: transform 0.2s;

  p {
    text-align: center;
  }

  &:hover {
    transform: translateX(10px);
  }
`;
