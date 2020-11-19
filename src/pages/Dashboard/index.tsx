import React, { useState, useEffect } from 'react';
import { api } from '../../services/api';
import logoImg from '../../assets/tjrn.png';

import { Title, Header, Body, Form, Books, Copyright } from './styles';

interface Livro {
  display_name: string;
  oldest_published_date: string;
  newest_published_date: string;
  updated: string;
}
interface Books {
  results: number;
  livro: Livro;
}
const Dashboard: React.FC = () => {
  // const [searchBook, setSearchBook] = useState('');
  const [books, setBooks] = useState<Books[]>([]);
  const apikey = '?api-key=rDoarHAbEEVJo0xbnk97zSVuSYt6zSf3';

  // async function handleSearchBook(
  //   event: FormEvent<HTMLFormElement>,
  // ): Promise<void> {
  //   event.preventDefault();

  //   const response = await api.get<Books>(`lists/names.json${apikey}`);

  //   // setBooks([response.data]);
  // }

  useEffect(() => {
    loadBooks();
  }, []);

  const loadBooks = async () => {
    const response = await api.get<Books>(`lists/names.json${apikey}`);

    setBooks([response.data]);
  };

  return (
    <>
      <Header>
        <div>
          <img src={logoImg} alt="TJRN" />
          <Title>Dashboard - SETIC</Title>
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
            Copyright (c) 2020 The New York Times Company. All Rights Reserved.
          </strong>
          <strong>Results Found: 59</strong>
        </Copyright>

        <hr />
        <Books>
          {books.map(book => (
            <a key={book.results} href="teste">
              {/* <div>
                <strong>{book.livro.display_name}</strong>
                <p>
                  <small>{book.livro.display_name}</small>
                </p>
              </div>
              <div>
                <p>
                  Newest publish Date:
                  {book.livro.newest_published_date}
                </p>
                <p>
                  Oldest publish Date:
                  {book.livro.oldest_published_date}
                </p>
              </div>
              <p>
                Updated:
                {book.livro.updated}
              </p> */}
            </a>
          ))}
        </Books>
      </Body>
    </>
  );
};

export default Dashboard;
