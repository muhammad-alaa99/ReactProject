import React from 'react'
import {HomeSection,HomeInfo,Jope,Click,Title,Type,Description} from'./style.js'
export default function Home() {
  return (
    <HomeSection>
      <div className='container'>
        <HomeInfo>
          <Title>
            muhammed alaa
          </Title>
          <Type>ceartiv dirctor</Type>
          <Description>
          Iam a professional UX Designer and <Jope>Front-End Developer</Jope> creating 
          modern and resposive designs to Web and Mobile. Let us work together. Thank you.
          </Description>
          <Click >going</Click>
        </HomeInfo>
      </div>
    </HomeSection>
  )
}
