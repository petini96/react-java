import { Link, Outlet } from 'react-router-dom';
import './styles/App.scss';
import { ChakraProvider } from '@chakra-ui/react';
import NavbarLayout from './layouts/public/NavbarLayout';

function App() {
  return (
    <ChakraProvider>
      <NavbarLayout />
      <Outlet />
    </ChakraProvider>
  );
}

export default App;
