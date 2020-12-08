import React, { useState, useEffect } from 'react';
import { api3 } from '../../services/api';
import CatIcon from '../../assets/CatIcon.png';

import { Title, Header, Body, Form, Copyright } from './styles';

interface Fact {
  _id: string;
  _v: string;
  text: string;
}

const CatFactsAll: React.FC = () => {
  const [cats, setCats] = useState<Fact[]>([]);
  const allCatsId = [''];

  useEffect(() => {
    loadCats();
  }, []);

  const loadCats = async () => {
    const response = await api3.get('/facts');

    setCats(response.data.all);
  };

  cats.map(gatos => allCatsId.push(gatos._id));

  // console.log(allCatsId);

  return (
    <>
      <Header>
        <div>
          <img src={CatIcon} alt="TJRN" />
          <Title>Cat Facts All</Title>
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
        {cats.map(gatos => (
          <div key={gatos._id}>
            <p>{gatos._id}</p>
            <br />
          </div>
        ))}

        {/* {greet(cats)} */}
        <hr />
      </Body>
    </>
  );
};

export default CatFactsAll;
