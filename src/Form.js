import React from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
  width: 70%;
  margin: 300px auto;
  font-family: Roboto;
  font-weight: 300;

  @media (max-width: 1180px) {
    width: 80%;
    margin: 100px auto;
  }
`;

const FormHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.8rem;
  color: ${(props) => props.theme.nameColor};

  @media (max-width: 1180px) {
    font-size: 1.3rem;
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
`;

const Input = styled.input`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 1rem;
`;

const Textarea = styled.textarea`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 1rem;
  resize: vertical;
`;

const SubmitButton = styled.button`
width: 20%;
  padding: 10px 20px;
  background-color: #fff;
  color: #007bff;
  border: 1px solid #007bff;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;

  @media (max-width: 767px) {
   width: 100%
  }
  &:hover {
    background-color: #0056b3;
  }
`;

const Form = ({ isdarktheme }) => {
  return (
    <FormContainer isdarktheme={isdarktheme}>
      <FormHeader>Let's Talk 💬</FormHeader>
      <StyledForm action="https://formspree.io/YOUR_EMAIL_ADDRESS" method="POST">
        <Input type="text" name="name" placeholder="Name" required />
        <Input type="email" name="_replyto" placeholder="Email" required />
        <Textarea name="message" rows="5" placeholder="Message" required></Textarea>
        <SubmitButton type="submit">Send</SubmitButton>
      </StyledForm>
    </FormContainer>
  );
}

export default Form;
