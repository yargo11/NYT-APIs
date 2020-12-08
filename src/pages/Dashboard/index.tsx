import React, { useState, useEffect, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { api3 } from '../../services/api';
import CatIcon from '../../assets/CatIcon.png';
import tomtom3 from '../../assets/tomtom3.png';

import { Title, Header, Body, Form, CatFact } from './styles';

interface Fact {
  _id: string;
  _v: string;
  text: string;
}

const Dashboard: React.FC = () => {
  const [cats, setCats] = useState<Fact[]>([]);

  async function randomCatFact(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    const response = await api3.get<Fact>(`/facts/random`);

    const newFact = response.data;

    setCats([...cats, newFact]);
  }

  return (
    <>
      <Header>
        <div>
          <img src={tomtom3} alt="TJRN" />
          <Title>Random Cat Facts - Meow!</Title>
        </div>
      </Header>
      <Body>
        {/* <Form onSubmit={handleSearchBook}> */}
        <Form onSubmit={randomCatFact}>
          <button type="submit">Random Cat Fact</button>
        </Form>
        {/* <Copyright>
          <strong>
            Copyright (c) 2020 The New York Times Company. All Rights Reserved.
          </strong>
          <strong>Results Found: 59</strong>
        </Copyright> */}
        <>
          {cats.map(gatos => (
            <Link key={gatos._id} to={/catfactswithid}>
              <CatFact>
                <p>{gatos.text}</p>
                <br />
              </CatFact>
            </Link>
          ))}
        </>
        <hr />
      </Body>
    </>
  );
};

export default Dashboard;
