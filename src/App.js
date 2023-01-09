import React from 'react'
//import './App.css';
//import ImageSlider from './components/ImageSlider';
//import Search from './components/Search';
//import TodoList from './components/TodoList';

import { ProjectFile, Subject } from "./pages/ProjectFile.tsx";


const App = () => {
  return (
    <div>
      {/*<h1> Slider App </h1>
      <TodoList></TodoList>
      <h1> Todo App </h1>
      <ImageSlider></ImageSlider>
      <Search />*/}
      <ProjectFile name='Jason' age='24' subject={Subject.Accounting} />
    </div>
  );
}

export default App;
