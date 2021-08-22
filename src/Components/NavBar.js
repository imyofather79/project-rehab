import React from 'react';

function NavBar({onChangePage}) {

  return (
    <nav>
      <a href="#home" onClick={() => onChangePage=("Home")}>Home</a>
      <a href="#card" onClick={() => onChangePage=("Card")}>Name Card</a>
      <a href="#room" onClick={() => onChangePage=("Room")}>Room</a>
      <a href="#backdoor" onClick={() => onChangePage=("Backdoor")}>Backdoor</a>
    </nav>
  );
}

export default NavBar;
