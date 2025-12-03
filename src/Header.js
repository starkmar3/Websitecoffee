import React from 'react';
import './Header.css';

function Header({setPage}) {
  return (
    <div className="Header">
      <li onClick={() => setPage('Main')}>Главная</li>
      <li onClick={() => setPage('Main')}>Меню</li>
      <li onClick={() => setPage('Main')}>Бронирование</li>
      <li onClick={() => setPage('Main')}>Блог</li>
      <li onClick={() => setPage('Main')}>Контакты</li>
    </div>
  );
}

export default Header;
