import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { api3 } from '../../services/api';
import CatIcon from '../../assets/CatIcon.png';

import { Title, Header, Body, Form, CatFact } from './styles';

interface Fact {
  _id: string;
  text: string;
}

const CatFactsAll: React.FC = () => {
  const [cats, setCats] = useState<Fact[]>([]);
  const history = useHistory();

  useEffect(() => {
    loadCats();
  }, []);

  const loadCats = async () => {
    const response = await api3.get('/facts');

    setCats(response.data);
  };

  function handleClick() {
    history.push('/');
  }

  return (
    <>
      <Header>
        <div>
          <img src={CatIcon} alt="TJRN" />
          <Title>Cat Facts All</Title>
        </div>
      </Header>
      <Body>
        <Form>
          <button type="button" onClick={handleClick}>
            Voltar
          </button>
        </Form>
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

export default CatFactsAll;
