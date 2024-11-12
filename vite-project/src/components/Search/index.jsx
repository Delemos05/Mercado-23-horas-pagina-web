import React, { useState } from 'react';
import { Form, Input, Button } from './style.jsx';
import { DATA } from "../../Utils/Data";

export const SearchBar = ({ setData }) => { // `data` removido, pois não foi utilizado
  const [query, setQuery] = useState('');
  const [indexActive, setIndexActive] = useState(null);

  const handleClick = (index) => {
    setIndexActive(index);
  };

  const handleSearch = (e) => {
    e.preventDefault(); // Impede o envio do formulário para evitar reload da página
    const filtered = DATA.map((item) => {
      const filteredProducts = item.products.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase())
      );

      if (filteredProducts.length > 0) {
        return { ...item, products: filteredProducts };
      }
      return null;
    }).filter(item => item !== null); // Remove itens nulos

    setData(filtered); // Atualiza os dados no componente pai
  };

  return (
    <>
      <Form onSubmit={handleSearch}> {/* `onSubmit` chama `handleSearch` ao enviar o formulário */}
        <Input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button type="submit">Search</Button> {/* Agora o botão aciona `onSubmit` */}
      </Form>
    </>
  );
};
