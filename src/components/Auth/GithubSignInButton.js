import styled from 'styled-components';
import image from '../../assets/images/github.png';
import qs from 'query-string';
import { useEffect } from 'react';
import axios from 'axios';
export default function GithubSignInButton() {
  function goToGithub(e) {
    e.preventDefault();
    const GITHUB_URL = 'https://github.com/login/oauth/authorize';

    const params = {
      response_type: 'code',
      scope: 'user',
      client_id: `${process.env.REACT_APP_CLIENT_ID}`,
      redirect_uri: `${process.env.REACT_APP_REDIRECT_URL}`,
    };

    const queryString = qs.stringify(params);
    const authUrl = `${GITHUB_URL}?${queryString}`;
    window.location.href = authUrl;
  }

  useEffect(async() => {
    const params = {
      response_type: 'code',
      scope: 'user',
      client_id: `${process.env.REACT_APP_CLIENT_ID}`,
      redirect_uri: `${process.env.REACT_APP_REDIRECT_URL}`,
    };
    const { code } = qs.parseUrl(window.location.href).query;
    if (code) {
      try {
        const promise = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/users/register/github`, { code });
        const user = promise.data;
        console.log(user);
      } catch (error) {
        console.log(error);
      }
    }
  }, []);

  return (
    <>
      <StyledButton onClick={goToGithub}>
        <img src={image}></img>GitHub
      </StyledButton>
    </>
  );
}
const StyledButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px;
  margin-top: 4px !important;
  box-sizing: border-box;
  border: 1px solid black;
  border-radius: 4px;
  img {
    padding-right: 5px;
  }
  &:hover {
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }
`;
