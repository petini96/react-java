// src/views/CostumerView.tsx
import React from 'react';
import { Link, Route, Routes } from "react-router-dom";
 
interface Props{}

const CostumerView = (props: Props) => {
  return (
    <div>
      <h1>Custumer View</h1>
      <ul>
        <li>
          <Link to="">Home</Link>
        </li>
        <li>
          <Link to="create">Create Page</Link>
        </li>
        <li>
          <Link to="show">show Page</Link>
        </li>
      </ul>


    </div>
  );
};

export default CostumerView;
