import React, { useState } from 'react';
import api from '../../services/api';

import { Title, Header } from './styles';

interface Book {
  results: {
    list_name: string;
    oldest_published_date: string;
  };
}

const Dashboard: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);

  const response = api.get(
    `/lists/names.json?api-key=rDoarHAbEEVJo0xbnk97zSVuSYt6zSf3`,
  );

  const book = response;

  setBooks([...books, book]);

  return (
    <>
      <Header>
        <div>
          <Title>Dashboard - SETIC</Title>
        </div>
      </Header>
      {/* <p>{response}</p> */}
    </>
  );
};

export default Dashboard;
