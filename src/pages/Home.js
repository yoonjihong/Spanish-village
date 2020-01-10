import React from 'react'

import Header from '../component/header/Header'

import '../assets/styles/home.scss'

const Home = () => {
  return (
    <div className="home">
      <Header />

      <div className="banner">
        <div className="slide">
          <div></div>
          <div></div>
        </div>
        <div className="title rap">
          <h2>
            <span>선</span>
            <span>택</span>
            <span>받</span>
            <span className="sp">은</span> 
            
            <span>자</span>만이 누릴 수 있는  
          </h2>
          <h1>최고의 명품 타운하우스</h1>
          <div>
            <p>제주스페인마을만의 <strong>감성</strong>이 더해집니L다! </p>
            Spanish Village in Jeju
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home