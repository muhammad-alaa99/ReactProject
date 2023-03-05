import axios from "axios";
import React, { Component } from "react";
import {WorkSection,Workitem,SectionTitle,Span,Title,Description,Icon} from "./style.js";

export default class Work extends Component {

  state={
    work:[]
  }
  componentDidMount() { 
    axios.get('js/data.json').then(response=>{this.setState({work:response.data.work})});
  }
  render(){
    const work=this.state.work;
    const items=work.map((item )=>{
      return(
        <Workitem key={item.id}>
        <Icon className={item.icon}></Icon>
        <Title>{item.title}</Title>
        <hr />
        <Description>
          {item.body}
        </Description>
      </Workitem>
      )
    })

    return (
      <section>
        <div className="container">
          <SectionTitle>
            my<Span> work</Span>
          </SectionTitle>
          <WorkSection>
            {items}
          </WorkSection>
        </div>
      </section>
    )
  }
}
