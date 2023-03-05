import styled from "styled-components";
export const HomeSection = styled.div`
  position: relative;
  background-image:url('image/home-bg.jpg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  margin-top:64px;
`;
export const HomeInfo = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  @media (max-width:640px) {
    width:80%;
  
}
`;
export const Title = styled.h2`
  font-size: 60px;
  color: #6d6969;
  margin-bottom: 20px;
  text-shadow: 2px 2px 2px #000;
`;
export const Type = styled.h4`
  font-size: 35px;
  color: #ff5675;
  margin-bottom: 10px;
`;
export const Description = styled.p`
  font-size: 20px;
  line-height: 1.6;
  color: #787070;
  margin-bottom: 20px;
`;
export const Jope = styled.span`
  color: #ff5675;
  font-weight: bold;
`;
export const Click = styled.button`
  width: 20%;
  padding: 10px;
  font-weight: bold;
  background-color: #ff5675;
  color: #fff;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  font-size: 20px;
  transition: all .3s;

  :hover {
    color: #000;
    background-color: #fff;
    border: 1px solid #ccc;
  }
`;
