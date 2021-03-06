import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { api3 } from '../../services/api';
import tomtom3 from '../../assets/tomtom3.png';

import { Title, Header, Body, Form } from './styles';

interface Fact {
  _id: string;
  createdAt: string;
  updatedAt: string;
  text: string;
  user: {
    name: {
      first: string;
      last: string;
    };
  };
}

const CatFactsWithID: React.FC = () => {
  const [cats, setCats] = useState<Fact>({
    _id: '',
    createdAt: '',
    updatedAt: '',
    user: {
      name: {
        first: '',
        last: '',
      },
    },
    text: '',
  });

  const history = useHistory();

  useEffect(() => {
    loadCats();
  }, []);

  const urlParams = new URLSearchParams(window.location.search);

  const id = urlParams.get('id');

  const loadCats = async () => {
    const response = await api3.get(`/facts/${id}`);

    setCats(response.data);
  };

  const { text, _id, createdAt, updatedAt, user } = cats;

  function handleClick() {
    history.push('/');
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
        <Form>
          <button type="button" onClick={handleClick}>
            Voltar
          </button>
        </Form>
        <p>
          <strong>Fact: </strong>
          {text}
        </p>
        <p>
          <strong>ID: </strong>
          {_id}
        </p>
        <p>
          <strong>Created At: </strong>
          {createdAt}
        </p>
        <p>
          <strong>Updated At: </strong>
          {updatedAt}
        </p>
        <p>
          <strong>User Name: </strong>
          {user.name.first}
          {'  '}
          {user.name.last}
        </p>
        <hr />
      </Body>
    </>
  );
};

export default CatFactsWithID;
