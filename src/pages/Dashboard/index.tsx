import React, { useState, FormEvent } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { api3 } from '../../services/api';
import tomtom3 from '../../assets/tomtom3.png';

import { Title, Header, Body, Form, CatFact } from './styles';

interface Fact {
  _id: string;
  _v: string;
  text: string;
}

const Dashboard: React.FC = () => {
  const [cats, setCats] = useState<Fact[]>([]);
  const [searchFacts, setSearchFacts] = useState();

  const history = useHistory();

  async function addRandomCatFact(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    if (cats.length >= 5) {
      cats.shift();
    }

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
        <div>
          {/* <Form onSubmit={handleSearchBook}> */}
          <Form>
            <button
              onClick={() => {
                history.push(`/catfactsall`);
              }}
              type="submit"
            >
              See All Cat Facts
            </button>
          </Form>
          <Form onSubmit={addRandomCatFact}>
            <button type="submit">Random Cat Facts</button>
          </Form>
          <Form onSubmit={addRandomCatFact}>
            <input
              // value={searchBook}
              // onChange={e => setSearchBook(e.target.value)}
              placeholder="Fact between 1 and 300"
            />
            <button type="submit">Specific Cat Facts</button>
          </Form>
        </div>
        <>
          {cats
            .map(gatos => (
              <Link
                key={gatos._id}
                to={{ pathname: `/catfactswithid/?id=${gatos._id}` }}
              >
                <CatFact>
                  <p>{gatos.text}</p>
                  <br />
                </CatFact>
              </Link>
            ))
            .reverse()}
        </>
        <hr />
      </Body>
    </>
  );
};

export default Dashboard;
