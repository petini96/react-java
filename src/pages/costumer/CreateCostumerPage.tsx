// src/components/Home.tsx
import React from 'react';
import CreateCostumer from '../../components/costumer/CreateCostumer';
interface Props{}
const CreateCostumerPage = (props: Props) => {
  return (
    <div>
      <h1>Área de criação do usuário!</h1>
      <CreateCostumer />
    </div>
  );
}

export default CreateCostumerPage;
