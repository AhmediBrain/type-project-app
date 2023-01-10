import React from 'react'
import ProjectFileLogin from './pages/ProjectFileLogin';
import styled from 'styled-components'
//import './App.css';
//import ImageSlider from './components/ImageSlider';
//import Search from './components/Search';
//import TodoList from './components/TodoList';

//import { ProjectFile, Subject } from "./pages/ProjectFile.tsx";


const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2%;
  justify-content: space-around;
`

const App: React.FC = () => {
  return (
    <Container>
      {/*<h1> Slider App </h1>
      <TodoList></TodoList>
      <h1> Todo App </h1>
      <ImageSlider></ImageSlider>
      <Search />*/}
      {/* <ProjectFile name='Jason' age='24' subject={Subject.Accounting} /> */}

      <ProjectFileLogin name='Bennett' age={25} />

    </Container>
  );
}

export default App;
