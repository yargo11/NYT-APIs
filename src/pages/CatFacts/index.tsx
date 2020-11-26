import React, { useState, useEffect } from 'react';
import logoImg from '../../assets/tjrn.png';
import { api3 } from '../../services/api';

import { Title, Header, Body, Form, Copyright } from './styles';

interface Fact {
  _id: string;
  _v: Number;
  text: string;
}

const CatFacts: React.FC = () => {
  const [cats, setCats] = useState<Fact[]>([]);

  useEffect(() => {
    loadCats();
  }, []);

  const loadCats = async () => {
    const response = await api3.get('/facts');

    setCats(response.data);
  };

  console.log('eu estou aqui');
  console.log(typeof cats);
  console.log(cats);

  return (
    <>
      <Header>
        <div>
          <img src={logoImg} alt="TJRN" />
          <Title>CatFacts - SETIC</Title>
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
        {/* {cats.map(gatos => (
          <div>{gatos.text}</div>
        ))} */}
        <hr />
      </Body>
    </>
  );
};

export default CatFacts;
