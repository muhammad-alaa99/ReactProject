import  axios  from 'axios';
import React,{useEffect,useState} from 'react'
import {PortfolioSection,PartInfo,PartImage,AllImages,List,LinlkItem,TitleInfo,Span,Show,Image,Overlay} from'./style.js'

export default function Portfolio() {
  
  const [images,setimgs]=useState([]);

useEffect(()=>{
  axios.get('js/data.json').then(response=>{setimgs(response.data.portfolio)});

},[]);


const AplayImages=images.map((Imgitem)=>{
  return(
    <PartImage key={Imgitem.id}>
        <Image src={Imgitem.img}  alt={Imgitem.title} />
        <Overlay>
          <Show> {Imgitem.title},{Imgitem.id} </Show>
        </Overlay>
      </PartImage>

  )
})


  return (
    <PortfolioSection>
      <PartInfo>
        <TitleInfo>My <Span>Portfolio</Span></TitleInfo>
        <List>
          <li><LinlkItem active  href='/'>All</LinlkItem></li>
          <li><LinlkItem href='/'>potoshop</LinlkItem></li>
          <li><LinlkItem href='/'>wordpress</LinlkItem></li>
          <li><LinlkItem href='/'>mobile</LinlkItem></li>
          <li><LinlkItem href='/'>App</LinlkItem></li>
        </List>
      </PartInfo>
      <AllImages>
        {AplayImages}
      </AllImages>

    </PortfolioSection>
  )
}
