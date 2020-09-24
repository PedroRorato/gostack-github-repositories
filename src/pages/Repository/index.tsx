import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import api from '../../services/api';
import logoImg from '../../assets/logo.svg';

import { Header, RepositoryInfo, Issues } from './styles';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  return (
    <>
      <Header>
        <img src={logoImg} alt="Github Explorer" />
        <Link to="/dashboard">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>
      <RepositoryInfo>
        <header>
          <img
            src="https://avatars2.githubusercontent.com/u/41977327?s=400&u=f4b82d6f9c71964f6c943b0172517458571d2c85&v=4"
            alt="Pedro"
          />
          <div>
            <strong>rocketseat</strong>
            <p>description</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>1808</strong>
            <p>Stars</p>
          </li>
          <li>
            <strong>1808</strong>
            <p>Stars</p>
          </li>
          <li>
            <strong>1808</strong>
            <p>Stars</p>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link to="oi">
          <div>
            <strong>repository.full_name</strong>
            <p>repository.description</p>
          </div>
          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
