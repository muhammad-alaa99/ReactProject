import styled from "styled-components";

export const ProfileSection = styled.div`
  margin: 50px 0 20px 0;
  display: flex;
  justify-content: center;
  @media (max-width:640px) {
    display:block;
}
`;
export const MyInfo = styled.div`
  width: 50%;
  @media (max-width:640px) {
    width:100%

}
`;
export const Title = styled.h2`
  padding: 20px 0;
  font-size: 40px;
`;

export const Span = styled.span`
  font-weight: bolder;
  color: #ff5675;
`;
export const Iteminfo = styled.p`
  margin-bottom: 10px;
  font-weight: bold;
`;
export const Value = styled.span`
  color: #ff5675;
  margin-left: 20px;
`;
/* ///========\\\ */
export const Skills = styled.div`
  width: 50%;
  @media (max-width:640px) {
    width:100%
  
}
`;
export const Description = styled.p`
  color: #817f7f;
  line-height: 1.8;
  margin-bottom: 20px;
`;
export const Skillsitem = styled.div`
  overflow: hidden;
  margin-bottom: 20px;
`;
export const SkillName = styled.h4`
  font-size: 20px;
  font-weight: bold;
  width: 50%;
  float: left;
`;
export const Persent = styled.span`
  display: inline-block;
  width: 50%;
  text-align: right;
`;
export const Div = styled.div`
  margin-top: 10px;
  height: 4px;
  border-radius: 10px;
  background-color: #ccc;
`;
export const Line = styled.span`
  display: block;
  background-color: #ff5675;
  width: 0;
  height: 4px;
  border-radius: 10px;
  width:${props=>props.persent}
`;
