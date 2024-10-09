import './App.css';
import { Table } from './components/Table';
import { TableConfig } from './interfaces/config-table.interface';

interface User {
  id: string;
  name: string;
  email: string;
}

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
}

const App = () => {
  const userTableConfig: TableConfig<User> = {
    rows: [
      { id: '1', name: 'John Doe', email: 'john@example.com' },
      { id: '2', name: 'Jane Smith', email: 'jane@example.com' },
      { id: '3', name: 'Carlos Ruiz', email: 'carlos@example.com' },
      { id: '4', name: 'Ana García', email: 'ana@example.com' },
      { id: '5', name: 'Lara Bonilla', email: 'lara@example.com' },
    ],
    columns: [
      {
        key: 'id',
        header: 'ID',
      },
      {
        key: 'name',
        header: 'Nombre',
      },
      {
        key: 'email',
        header: 'Correo Electrónico',
      },
    ],
  };
  const productTableConfig: TableConfig<Product> = {
    rows: [
      {
        id: '1',
        name: 'Laptop',
        description: 'High-performance laptop',
        price: 1200,
      },
      {
        id: '2',
        name: 'Smartphone',
        description: 'Latest model smartphone',
        price: 800,
      },
      {
        id: '3',
        name: 'Headphones',
        description: 'Noise-cancelling headphones',
        price: 150,
      },
      {
        id: '4',
        name: 'Monitor',
        description: '4K resolution monitor',
        price: 300,
      },
      {
        id: '5',
        name: 'Keyboard',
        description: 'Mechanical gaming keyboard',
        price: 100,
      },
    ],
    columns: [
      {
        key: 'id',
        header: 'ID',
      },
      {
        key: 'name',
        header: 'Nombre',
      },
      {
        key: 'price',
        header: 'Precio',
      },
    ],
  };
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-900 gap-8">
      <h1 className="text-3xl font-bold text-white">
        Componente de tabla reusable
      </h1>
      <div className="max-w-xl flex flex-col gap-4">
        <Table config={userTableConfig}/>
        <Table config={productTableConfig}/>
      </div>
    </div>
  );
};

export default App;
