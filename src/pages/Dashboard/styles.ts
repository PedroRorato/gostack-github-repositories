import styled from 'styled-components';
import { shade } from 'polished';

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
  line-height: 56px;
  margin-top: 80px;
  max-width: 450px;
`;

export const Form = styled.form`
  display: flex;
  margin-top: 40px;
  max-width: 700px;

  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    background: #04d361;
    border: 0;
    border-radius: 0 5px 5px 0;
    color: #fff;
    height: 70px;
    transition: background-color 0.3s;
    width: 210px;

    &:hover {
      background: ${shade(0.2, '#04d361')};
    }
  }
`;

export const Repositories = styled.div`
  margin-top: 80px;
  max-width: 700px;

  a {
    align-items: center;
    background: #fff;
    border-radius: 5px;
    display: flex;
    padding: 24px;
    text-decoration: none;
    width: 100%;
    transition: transform 0.2s;

    &:hover {
      transform: translateX(10px);
    }

    & + a {
      margin-top: 16px;
    }

    img {
      height: 64px;
      width: 64px;
      border-radius: 50%;
    }

    div {
      margin-left: 16px;

      strong {
        font-size: 20px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }

    svg {
      color: #cbcbd6;
      margin-left: auto;
    }
  }
`;
