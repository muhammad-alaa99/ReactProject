import styled from "styled-components";
export const AboutSection = styled.div`
  background-image: url('image/about-bg.jpg');

  background-position: unset;
  background-attachment: fixed;
  background-size: cover;
  height: 100vh;
  overflow: hidden;
`;
export const Info = styled.div`
padding-top:100px;
  width: 50%;
  float: right;
  @media (max-width:640px) {
    width:100%
    
  
}
`;
export const Title = styled.h2`
  margin: 20px 0;
  font-size: 50px;
  font-weight: normal;
`;
export const Span = styled.span`
  font-weight: bold;
  color: #ff5675;
`;
export const Titledesc = styled.h4`
  margin-bottom: 20px;
  font-size: 40px;
  font-weight: bold;
  color: #ff5675;
`;
export const Description = styled.p`
  line-height: 1.8;
  margin: 20px;
  color: #333232;
`;
