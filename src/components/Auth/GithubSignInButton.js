import styled from 'styled-components';
import image from '../../assets/images/github.png';
export default function GithubSignInButton() {
  function goToGithub(e) {
    e.preventDefault();
    const GITHUB_URL = 'https://github.com/login/oauth/authorize';

    const params = {
      response_type: 'code',
      scope: 'user',
      client_id: `${process.env.CLIENT_ID}`,
      redirect_uri: `${process.env.REDIRECT_URL}`,
    };

    const queryString = JSON.stringify(params);
    const authUrl = `${GITHUB_URL}?${queryString}`;
    console.log(params);
  }

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
