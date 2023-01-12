import React from 'react'
import styled from 'styled-components'
import ProjectCreateUser from './pages/createuserpages/ProjectCreateUser';
import UserLoginPage from './pages/loginpages/UserLoginPage';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2%;
  align-items: center;
`

const App: React.FunctionComponent = () => {
  return (
    <Container>
      <ProjectCreateUser page='Create User' />
      <UserLoginPage page='Login' />
    </Container>
  );
}

export default App;
