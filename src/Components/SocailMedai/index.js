import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './style.js';
import { Icon, Item, P, SocailSection, Title } from './style.js';
export default function Socail() {

  const[socail,setsocail]=useState([]);
  useEffect(()=>{
    axios.get('js/data.json').then(res=>{setsocail(res.data.socail)})
  },[]);
const data=socail.map((item)=>{
  return(
    <Item key={item.id} prop={item.id}> 
      <Icon className={item.icon}></Icon>
      <Title>{item.title}</Title>
      <P>{item.body}</P>
  </Item>
  )
})

  return (
    <SocailSection>
      {data}
    </SocailSection>
  )
}
