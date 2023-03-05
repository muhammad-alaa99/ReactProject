import React from 'react'
import {FooterSection,Left,Logo,Right,Description,P,Span,Icons,Hr}from'./style.js'
export default function Footer() {
  return (
    <FooterSection>
      <div className='container'>
        <Left>
          <a href='/'>
            <Logo className='fa fa-user-circle'></Logo>
          </a>
            <Description>
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Enim Est Explicabo Maxime Quibusdam Quaerat
            Nihil Aliquid Aperiam Deleniti, Repellendus Dolorum. Possimus Nisi Cupiditate Ad Veritatis?
            </Description>
        </Left>
        <Right>
          <div className=' icons'>
            <a href='/'><Icons className='fa fa-facebook'></Icons></a>
            <a href='/'><Icons className='fa fa-github'></Icons></a>
            <a href='/'><Icons className='fa fa-linkedin'></Icons></a>
            <a href='/'><Icons className='fa fa-twitter'></Icons></a>
            <a href='/'><Icons className='fa fa-instagram '></Icons></a>
          </div>
          <Hr/>
          <P>copyright © 2023 by <Span>web developer</Span> </P>
        </Right>
      </div>

    </FooterSection>
  )
}
