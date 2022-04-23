import styled from "styled-components";

export const Container = styled.div`
  width: 900px;

  padding: 2rem 0.9rem;
  margin-top: 40px;

`;

export const FormMural = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;

export const Label = styled.label`
  font-family: Arial;
  font-size: 1.12rem;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.5rem 0.8rem;

  font-family: Arial;
  font-size: 1.12rem;

  border: 1px solid #000;

  :focus {
    outline: 2px solid #000;
  }
`;
export const TextArea = styled.textarea`
  resize: none;
  padding: 0.5rem 0.8rem;

  width: 100%;
  height: 100px;

  font-family: Arial;
  font-size: 1.12rem;

  border: 1px solid #000;

  :focus {
    outline: 2px solid #000;
  }
`;

export const ButtonSubmit = styled.button`
  width: 100%;
  padding: 0.8rem 1.25rem;

  font-family: Arial;

  background: none;
  border: 1px solid #000;

  transition: all 200ms ease;

  cursor: pointer;

  :hover {
    color: #38b000;
    border-color: #38b000;
  }
`;

export const MuralContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding: 2rem 3rem;
  margin: 20px 0;

  border: 1px solid #000;

  width: 100%;
`;


export const MuralMessages = styled.div`
  display: flex;
  flex-direction: column;

  padding: 2rem 1.5rem;
  margin: 20px 0;

  border: 1px solid #000;

  width: 100%;
`;

export const Title = styled.h2`
  font-family: Arial;
  color: #000;
  margin-bottom: 12px;
`;

export const Description = styled.p`
  font-family: Arial;
  color: #000;
`;
