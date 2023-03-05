import styled from "styled-components";
export const FooterSection=styled.section`
  padding: 20px 0;
  background-color:#000;
  color: #fff;
  overflow: hidden;
`
export const Left=styled.div`
  width: 50%;
  /* padding: 10px; */
  float: left;
  @media (max-width:640px) {
    width:100%;
    float: none;
}
`
export const Logo=styled.i`
  font-size: 80px;
  margin-bottom: 10px;
  color: #ff5677;
`
export const Description=styled.p`
  line-height: 1.7;
  color: #ccc;

`
export const Right=styled.div`
  width: 50%;
  padding: 10px;
  float: right;
  text-align: center;
  margin-top: 80px;
  @media (max-width:640px) {
    width:100%;
    float: none;

  
}
`

export const Icons=styled.i`
  margin: 0 20px;
  font-size: 25px;
  color: #fff;
  transition: all .3s;
  &:hover{
    transform: scale(1.5);
    color: #ff5677;
  }
`
export const Hr=styled.hr`
  margin-top: 10px;
  margin-bottom: 20px;
`
export const P=styled.p`
  color: #ccc;
`
export const Span=styled.span`
  color: #ff5677;
  font-weight: bold;
`