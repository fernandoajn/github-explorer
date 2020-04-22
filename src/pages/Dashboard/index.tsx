import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logo from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logo} alt="GitHub Explorer" />
      <Title>Explore repositórios no GitHub</Title>

      <Form>
        <input placeholder="Digite o nome do repositorio" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/29006087?s=460&u=957bb2b8b8a794b7acd937fde2ed03f1281bbffb&v=4"
            alt="Avatar"
          />
          <div>
            <strong>fernandoajn/unform</strong>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
              veritatis!
            </p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/29006087?s=460&u=957bb2b8b8a794b7acd937fde2ed03f1281bbffb&v=4"
            alt="Avatar"
          />
          <div>
            <strong>fernandoajn/unform</strong>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
              veritatis!
            </p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/29006087?s=460&u=957bb2b8b8a794b7acd937fde2ed03f1281bbffb&v=4"
            alt="Avatar"
          />
          <div>
            <strong>fernandoajn/unform</strong>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
              veritatis!
            </p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
