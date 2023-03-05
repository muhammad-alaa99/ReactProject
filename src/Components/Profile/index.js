import React,{useEffect,useState} from 'react';
import axios from 'axios';
import {ProfileSection,MyInfo,Iteminfo,Title,Span,Value,Skills,SkillName,Skillsitem,Persent,Div,Description,Line}from'./style.js'
export default function Profile() {

  const[skills,setSkills]=useState([]);
  const[myInfo,setInfo]=useState([]);
  useEffect(()=>{
    axios.get('js/data.json').then(response=>{setSkills(response.data.skills)});
    axios.get('js/data.json').then(response=>{setInfo(response.data.myInfo)});
  
  },[]);
  const information=myInfo.map((item)=>{
    return(
      <div>
      <Iteminfo>neme :: <Value>{item.name}</Value></Iteminfo>
      <Iteminfo>birthday :: <Value>{item.birthday}</Value></Iteminfo>
      <Iteminfo>address :: <Value>{item.address}</Value></Iteminfo>
      <Iteminfo>phone :: <Value>{item.phone}</Value></Iteminfo>
      <Iteminfo>email :: <Value>{item.email}</Value></Iteminfo>
      <Iteminfo>website :: <Value>{item.website}</Value></Iteminfo>
      </div>
    )
  });

  const someSkills=skills.map((item)=>{
    return(
      <Skillsitem key={item.id}>
            <SkillName>{item.name}</SkillName>
            <Persent>{item.persent}</Persent>
            <Div >
              <Line persent={item.persent}></Line>
            </Div>
          </Skillsitem>
    )
  });

  return (
    <section className='container'>
      <ProfileSection>
        <MyInfo>
          <Title>my <Span>profile</Span></Title>
          {information}
        </MyInfo>
        <Skills>
          <Title> some <Span>skills</Span></Title>
          <Description>
          Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
          </Description>
          {someSkills}
        </Skills>
      </ProfileSection>
    </section>
  )
}
