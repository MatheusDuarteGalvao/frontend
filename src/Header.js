import React from 'react';

// Componente:  Bloco isolado de HTML, CSS E JS, o qual não interfere no restante da aplicação
// Estado:
// Propriedade:  

function Header(props) {
  return (
  <h1>{props.title}</h1>
  );
}

export default Header;