import styled from "styled-components";

export const PortfolioSection = styled.section`
  background-color: #f5f1f1;
  margin: 60px 0 30px 0;
`;
export const PartInfo = styled.div`
  text-align: center;
  padding: 20px;
`;
export const TitleInfo = styled.h2`
  font-size: 50px;
  padding-bottom: 20px;
`;

export const Span = styled.span`
  color: #ff5675;
  font-weight: bolder;
`;
export const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  // display: none;
`;

  export const LinlkItem = styled.a`
  padding: 5px 20px;
  color: #000;
  font-size: 20px;
  border-radius: 5px;
  background:${props=>props.active ?'#ff5675':''};
  color:${props=>props.active ?'#fff':'#000'};
  @media (max-width:640px) {
    padding:5px 10px;
    font-size:15px
}
`;
export const AllImages=styled.div`
overflow: hidden;

`;
export const PartImage = styled.div`
  position: relative;
  width: calc(100% / 4);
  float: left;
  font-size:0;
  @media (max-width:640px) {
    width: calc(100% / 2);
  
}
  @media (max-width:480px) {
    width: calc(100% / 1);
  
}
`;
export const Image = styled.img`
  width: 100%;
`;
export const Overlay = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  background-color: #ff56757a;
  opacity: 0;
  transition: all 0.3s;
  &:hover {
    opacity: 1;
  }
`;
export const Show = styled.p`
  background-color: #f5f1f175;
  font-weight: bold;
  padding: 5px 20px;
  // border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
  bottom: 0;
  position: absolute;
  text-align: center;
  width: 100%;
  height: 80px;
  font-weight: bold;
  font-size: 30px;
  // color: #fff;
`;
