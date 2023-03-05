import styled from "styled-components";
import { NavLink } from 'react-router-dom';


export const NavBar = styled.div`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
  padding: 10px 10%;
  position: fixed;
  z-index: 5;
  width: 100vw;
  background-color: #fff;
  top:0;
  @media (max-width:640px) {
    display:block;
    padding: 10px 5%;
  
}
`;
export const Icon=styled.i`
  font-size:42px;
  color:#ff5675;
  &:hover{
  color:#000;

`;


export const UlList=styled.ul`
@media (max-width : 640px) {
  display: none
  }
`
export const List = styled.li`
  display: inline-block;
  margin: 10px;
  
}
`;
export const Navlink = styled(NavLink)`
  text-decoration: none;
  color: #000;
  font-weight: bold;
  transition: all 0.3s;
  :hover {
    color: #ff5675;
  }
  &.active{
    color:#ff5675;
  }
`;
// =============

export const Media=styled.div`
display:none;
background-color:#fff;
position:absolute;
z-index:5;
width:100vw;
text-align:right;
position: fixed;
top:55px;
@media (max-width : 640px) {
  display:block;
}
`
export const List2 = styled.li`
  display: block;
  margin: 10px;
  
`
export const Ul=styled.ul`
display:none;
transition: all 0.3s;
`
export const Input=styled.input`
display:none;
transition: all 0.3s;

&:checked ~ ul {
  display: block;
}
`
export const Label=styled.label`
display: inline-block;
width: 15px;
height: 15px;
background: url('../image/open.png') no-repeat ;
background-size: cover;
padding: 20px;
cursor: pointer;
position: absolute;
right: 15px;
top: -40px
`