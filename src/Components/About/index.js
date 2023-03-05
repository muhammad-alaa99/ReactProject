import React from 'react'
import Profile from '../Profile/index.js';
import{ AboutSection,Info,Title,Span ,Titledesc,Description,}from './style.js';

export default function About() {
  return (
    <>
    <AboutSection>
      <div className='container'>
      <Info>
        <Title className='title-info'>this is <Span>me</Span></Title>
        <Titledesc>Creative Director</Titledesc>
        <Description>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est explicabo maxime quibusdam quaerat 
        nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
        </Description>

        <Description>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est explicabo maxime quibusdam quaerat 
        nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
        </Description>
      </Info>
      </div>
    </AboutSection>
    <Profile/>
    </>
  )
}
