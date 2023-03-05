import styled from "styled-components";
export const ContactSection = styled.div`
  width: 70%;
  margin: auto;
  margin-top: 70px;
  text-align: center;
  @media (max-width:640px) {
    width:100%
  
}
`;
export const Title = styled.h2`
  font-size: 40px;
  margin-bottom: 20px;
  margin-top: 50px;
  font-family: initial;
`;

export const Input = styled.input`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin-bottom: 10px;
`;
export const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const InputText = styled(Input)`
  width: 49%;
`;
export const InputSub = styled(Input)`
  width: 100%;
`;
export const Textarea = styled.textarea`
  width: 100%;
  padding: 10px;
  background-color: #ccc;
  border-radius: 5px;
`;
export const Inputsubmit = styled(Input)`
  width: 40%;
  font-weight: bold;
  background-color: #ccc;
  cursor: pointer;
`;
