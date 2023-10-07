import NavBar from './contenedores/Navigation';
import React from 'react';
import Form from './contenedores/Form';
import Integrantes from './contenedores/Integrantes'
import Objetivos from './contenedores/Objetivos';


function App() {
  return (
    <>
    <NavBar></NavBar>
    <div class="flex">
      <Form></Form>
      <Integrantes></Integrantes>
    </div>
    <Objetivos></Objetivos>
    </>
  
  );
}

export default App;
