import React, { useState, useEffect } from 'react';
import { api4 } from '../../services/api';

import { Table, TR, TH, THT, TD, H2 } from './styles';

interface Data {
  distribuidos: number;
  baixados: number;
  decisoes: number;
  despachos: number;
  sentencas: number;
}

const Dados: React.FC = () => {
  // const [searchBook, setSearchBook] = useState('');
  const [dados, setDados] = useState<Data[]>([]);

  useEffect(() => {
    loadDados();
  }, []);

  const loadDados = async () => {
    const response = await api4.get('');

    setDados(response.data);
  };

  console.log(dados);

  return (
    <>
      <Table>
        <TR>
          <THT colSpan={5}>
            <H2>Produtividade Teletrabalho (a partir de 20/03/2020)</H2>
          </THT>
        </TR>
        <TR>
          <TH>Distribuídos</TH>
          <TH>Baixados</TH>
          <TH>Decisões</TH>
          <TH>Despachos</TH>
          <TH>Sentenças</TH>
        </TR>
        <TR>
          <TD>dados</TD>
          <TD>dados</TD>
          <TD>dados</TD>
          <TD>dados</TD>
          <TD>dados</TD>
        </TR>
      </Table>
    </>
  );
};

export default Dados;
