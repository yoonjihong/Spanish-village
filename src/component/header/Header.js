import React from 'react'
import { Link, withRouter } from 'react-router-dom';

import './header.scss'

import logo from '../../assets/images/logo.png'

const Header = () => {
  return (
    <div className="header rap">
      <img src={logo} className="logo" />

      <div className="menu">
        <Link to="/introduce">마을소개</Link>
      </div>
    </div>
  )
}

export default withRouter(Header)