import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logo from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logo} alt="github explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do Repositorio" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="test">
          <img
            src="https://avatars.githubusercontent.com/u/15646369?s=460&u=01d25984a387bef32d6066e7a449075b79dd8bd4&v=4"
            alt="felipe suknaic"
          />

          <div>
            <strong>Felipe Suknaic</strong>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
              dolores.
            </p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="test">
          <img
            src="https://avatars.githubusercontent.com/u/15646369?s=460&u=01d25984a387bef32d6066e7a449075b79dd8bd4&v=4"
            alt="felipe suknaic"
          />

          <div>
            <strong>Felipe Suknaic</strong>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
              dolores.
            </p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="test">
          <img
            src="https://avatars.githubusercontent.com/u/15646369?s=460&u=01d25984a387bef32d6066e7a449075b79dd8bd4&v=4"
            alt="felipe suknaic"
          />

          <div>
            <strong>Felipe Suknaic</strong>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
              dolores.
            </p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
