// src/views/CostumerView.tsx
import React from 'react';
import { Link, Route, Routes } from "react-router-dom";
 
const NavbarLayout = () => {
  return (
    <nav className='gabs-container'>
      <ul>
        <Link to='/home'>Home</Link>
        <Link to='/costumer'>Costumer Page</Link>
        <Link to='/costumer/create'>Create Costumer</Link>
        <Link to='/costumer/show/755'>Show Costumer</Link>
      </ul>
    </nav>
  );
};

export default NavbarLayout;
