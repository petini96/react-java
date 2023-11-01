// src/components/Home.tsx
import React from 'react';
import ShowCostumer from '../../components/costumer/ShowCostumer';
interface Props{}
const ShowCostumerPage = (props: Props) => {
  return (
    <div>
      <h1>Área de visualização do usuário!</h1>
      <ShowCostumer />
    </div>
  );
}

export default ShowCostumerPage;
