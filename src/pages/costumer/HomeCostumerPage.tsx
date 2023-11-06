import React, { useEffect, useState } from 'react';

interface Customer {
  id: number;
  name: string;
  mail: string;
}

interface Props {}

const HomeCostumerPage: React.FC<Props> = () => {
  const [customer, setCustomer] = useState<Customer | null>(null);

  useEffect(() => {
    const token = 'eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJzZWxmIiwic3ViIjoidXNlciIsImV4cCI6MTY5OTMyODE0OSwiaWF0IjoxNjk5MjkyMTQ5LCJzY29wZSI6InVzZXIifQ.yvSTx54o9Up44IyDhUDl5_4d_Ca-3_8Yvjmfn_t-QBvxEdNDgAdUPYXPVxdCYM4xlmiA8EF4IjdNhPyo9LevhGXgksY7a6LMQyjXtVSoERIKlDozRdReF797hRfYVeuGCcaAq7oU42hvD2ofGwS_5GsEvgMehpR0-eFZkNwrnEtTDnwUIZDCcRFKYklBWZHAZCbF3PpDgN4_4mZKMxSQnAbmw-dkNQkRJ6ZI1OOKmID_4Msiv5yO3CzCQ041Z7eQNyimrJjoYjc_U3dsMwDI-rETyBzKddVkq06lMOY1txPRZxDKmwLpyrNG1azmAqyE7e3InTawxsZLGHXUdKIC9A'; // Substitua pelo seu token

    fetch('http://localhost:8080/costumer/find/vinicius', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setCustomer(data[0]))
      .catch((error) => console.error('Erro ao buscar o cliente:', error));
  }, []);

  return (
    <div className='home'>
      <h1>Bem vindo ao HomeCostumerPage!</h1>

      {customer && (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{customer.id}</td>
              <td>{customer.name}</td>
              <td>{customer.mail}</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default HomeCostumerPage;
