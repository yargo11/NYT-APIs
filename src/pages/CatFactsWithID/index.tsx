import React, { useState, useEffect } from 'react';
import logoImg from '../../assets/tjrn.png';
import { api3 } from '../../services/api';

import { Title, Header, Body, Form, Copyright } from './styles';

interface Fact {
  _id: string;
  _v: Number;
  text: string;
}

const CatFactsWithID: React.FC = () => {
  const [cats, setCats] = useState<Fact>({
    _id: '',
    _v: 0,
    text: '',
  });

  useEffect(() => {
    loadCats();
  }, []);

  const loadCats = async () => {
    const response = await api3.get('/facts/5a4aab132c99ee00219e11c2');

    setCats(response.data);
  };

  const factText = (gatinhos: Fact) => {
    return gatinhos.text;
  };

  const factID = (gatinhos: Fact) => {
    return ` ${gatinhos._id}`;
  };

  return (
    <>
      <Header>
        <div>
          <img src={logoImg} alt="TJRN" />
          <Title>Cat Facts With ID</Title>
        </div>
      </Header>
      <Body>
        {/* <Form onSubmit={handleSearchBook}> */}
        <Form>
          <input
            // value={searchBook}
            // onChange={e => setSearchBook(e.target.value)}
            placeholder="Pesquise aqui pelo livro"
          />
          <button type="submit">Pesquisar</button>
        </Form>
        <Copyright>
          <strong>
            Using a combination of Node.js, Angular, and Tasker, this app will
            combine APIs and Services from the web to do just one thing… send
            cat facts.
          </strong>
        </Copyright>
        <p>
          Fact:
          {factText(cats)}
        </p>
        <br />
        <p>
          ID:
          {factID(cats)}
        </p>
        <hr />
      </Body>
    </>
  );
};

export default CatFactsWithID;
