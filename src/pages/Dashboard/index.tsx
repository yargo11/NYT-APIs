import React, { useState, useEffect } from 'react';
import { api } from '../../services/api';
import CatIcon from '../../assets/CatIcon.png';

import { Title, Header, Body, Form, Books, Copyright } from './styles';

interface Fact {
  _id: string;
  _v: string;
  text: string;
}

const Dashboard: React.FC = () => {
  const [cats, setCats] = useState<Fact[]>([]);

  // async function handleSearchBook(
  //   event: FormEvent<HTMLFormElement>,
  // ): Promise<void> {
  //   event.preventDefault();

  //   const response = await api.get<Books>(`lists/names.json${apikey}`);

  //   // setBooks([response.data]);
  // }

  return (
    <>
      <Header>
        <div>
          <img src={CatIcon} alt="TJRN" />
          <Title>Dashboard - SETIC</Title>
        </div>
      </Header>
      <Body>
        {/* <Form onSubmit={handleSearchBook}> */}
        <Form>
          <button type="submit">Random Cat Fact</button>
        </Form>
        <Copyright>
          <strong>
            Copyright (c) 2020 The New York Times Company. All Rights Reserved.
          </strong>
          <strong>Results Found: 59</strong>
        </Copyright>

        <hr />
      </Body>
    </>
  );
};

export default Dashboard;
