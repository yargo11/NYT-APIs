import React, { useState, useEffect } from 'react';
import logoImg from '../../assets/tjrn.png';
import { api2 } from '../../services/api';

import { Title, Header, Body, Form, Books, Copyright } from './styles';

interface Books {
  id: number;
  name: string;
  username: string;
}

const Fetch: React.FC = () => {
  // const [searchBook, setSearchBook] = useState('');
  const [books, setBooks] = useState<Books[]>([]);

  useEffect(() => {
    loadBooks();
  }, []);

  const loadBooks = async () => {
    const response = await api2.get('users');

    setBooks(response.data);
  };

  // console.log(books);

  return (
    <>
      <Header>
        <div>
          <img src={logoImg} alt="TJRN" />
          <Title>Fetch - SETIC</Title>
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
            Multiple Ways of Async Await Fetch API Call With Hooks (useState,
            useEffect) and Map
          </strong>
          <strong>Results Found: 59</strong>
        </Copyright>
        {books.map(user => (
          <div key={user.id}>
            {user.name}
            {user.username}
          </div>
        ))}
        <hr />
      </Body>
    </>
  );
};

export default Fetch;
