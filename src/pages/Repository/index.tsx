import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronsLeft, FiChevronRight } from 'react-icons/fi';
import logo from '../../assets/logo.svg';

import { Header, RepositoryInfo, Issue } from './styles';

interface repositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<repositoryParams>();

  return (
    <>
      <Header>
        <img src={logo} alt="github explorer" />
        <Link to="/">
          <FiChevronsLeft size={16} />
          voltar
        </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img
            src="https://avatars.githubusercontent.com/u/69631?v=4"
            alt="rocketseat"
          />
          <div>
            <strong>Facebook/React</strong>
            <p>descricao do repositorio</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>1808</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>48</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>67</strong>
            <span>Issues Abertas</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issue>
        <Link to="asdasdsad">
          <div>
            <strong>asdasdasd</strong>
            <p>asdasdasdasd</p>
          </div>
          <FiChevronRight size={20} />
        </Link>
        <Link to="asdasdsad">
          <div>
            <strong>asdasdasd</strong>
            <p>asdasdasdasd</p>
          </div>
          <FiChevronRight size={20} />
        </Link>
        <Link to="asdasdsad">
          <div>
            <strong>asdasdasd</strong>
            <p>asdasdasdasd</p>
          </div>
          <FiChevronRight size={20} />
        </Link>
        <Link to="asdasdsad">
          <div>
            <strong>asdasdasd</strong>
            <p>asdasdasdasd</p>
          </div>
          <FiChevronRight size={20} />
        </Link>
      </Issue>
    </>
  );
};

export default Repository;
