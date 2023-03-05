import styled from "styled-components";

export const SocailSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Item = styled.div`
  background-color: rgb(0, 4, 255);
  width: calc(100% / 3);
  padding: 50px;
  color: #fff;
  overflow: hidden;
  background:${props=>props.prop===2?'rgb(0, 162, 255)':''};
  background:${props=>props.prop===3?'red':''};
  
`;
export const Icon = styled.i`
  float: left;
  padding: 10px;
  background-color: #fff;
  border-radius: 5px;
  margin-right: 5px;
  /* color: #ff5675; */
  color: #727070;
  cursor: pointer;
`;
export const Title = styled.h4`
  font-size: 25px;
`;
export const P = styled.p`
  color: rgb(197, 201, 204);
`;
