// src/views/CostumerView.tsx
import React from 'react';
import { Link, Route, Routes } from "react-router-dom";
 
const NavbarLayout = () => {
  return (
    <nav className='gabs-container'>
      <ul>
        <Link to='/'>Home</Link>
        <Link to='/costumer'>Listar Clientes</Link>
        <Link to='/costumer/create'>Cadastrar Clientes</Link>
        <Link to='/costumer/orders'>Pedidos</Link>
        <Link to='/login'>Login</Link>
      </ul>
    </nav>
  );
};

export default NavbarLayout;
