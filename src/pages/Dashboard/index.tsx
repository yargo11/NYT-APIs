import React, { useState, FormEvent } from 'react';
import api from '../../services/api';
import logoImg from '../../assets/tjrn.png';

import { Title, Header, Body, Form, Books, Copyright } from './styles';

interface Books {
  results: {
    list_name: string;
    display_name: string;
    list_name_encoded: string;
    oldest_published_date: string;
    newest_published_date: string;
    updated: string;
  };
}
const Dashboard: React.FC = () => {
  const [searchBook, setSearchBook] = useState('');
  const [books, setBooks] = useState<Books[]>([]);

  async function handleSearchBook(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    const response = await api.get<Books>(
      `lists/names.json?api-key=rDoarHAbEEVJo0xbnk97zSVuSYt6zSf3`,
    );

    setBooks([...books, response.data]);
  }
  return (
    <>
      <Header>
        <div>
          <img src={logoImg} alt="TJRN" />
          <Title>Dashboard - SETIC</Title>
        </div>
      </Header>
      <Body>
        <Form onSubmit={handleSearchBook}>
          <input
            value={searchBook}
            onChange={e => setSearchBook(e.target.value)}
            placeholder="Pesquise aqui pelo livro"
          />
          <button type="submit">Pesquisar</button>
        </Form>
        <Copyright>
          <strong>
            Copyright (c) 2020 The New York Times Company. All Rights Reserved.
          </strong>
          <strong>Results Found: 59</strong>
        </Copyright>

        <hr />
        <Books>
          {books.map(book => (
            <a key={book.results.list_name} href="teste">
              <div>
                <strong>{book.results.display_name}</strong>
                <p>
                  <small>{book.results.list_name_encoded}</small>
                </p>
              </div>
              <div>
                <p>
                  Newest publish Date:
                  {book.results.newest_published_date}
                </p>
                <p>
                  Oldest publish Date:
                  {book.results.oldest_published_date}
                </p>
              </div>
              <p>
                Updated:
                {book.results.updated}
              </p>
            </a>
          ))}
        </Books>
      </Body>
    </>
  );
};

export default Dashboard;
