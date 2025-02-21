import React from 'react';
import './header.css';
import { CgMenu } from "react-icons/cg";

const Header: React.FC = () => {
  return (
    <header>
      <div className="logo-title">
        <div className="logo">
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line2"></div>
        </div>
        <p className="title">DashBook</p>
      </div>
      <div className="menu">{CgMenu({})}</div>
    </header>
  );
};

export default Header;
