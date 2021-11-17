import styled from "styled-components";
import Link from "next/link";
export const Contaier = styled.div`
  width: 50%;
  height: 42.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0px;
  @media (max-width: 768px) {
    width: 90%;
  }
`;
export const Content = styled.div`
  display: grid;
  grid-template-columns: 20rem;
  margin-right: 6.25rem;
  grid-template-rows: 7px 69px 41px 60px 41px 60px 70px 70px 152px;
  @media (max-width: 768px) {
    grid-template-columns: 18rem;
    margin-right:90px;
    grid-template-rows: 7px 69px 41px 60px 41px 60px 69px 70px 112px;
  }
`;
export const Welcome = styled.h1`
  font-family: Merriwether;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.256875rem;
  color: #1a202c;
  @media (max-width: 768px) {
    margin-left: 1.5rem;
  }
`;
export const LoginP = styled.p`
  font-family: Lato;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.2rem;
  color: #1a202c;
  @media (max-width: 768px) {
    margin-left: 1.5rem;
  }
`;
export const Title = styled.p`
  font-family: Merriwether;
  font-weight: 700;
  font-size: 1.625rem;
  line-height: 2.0425rem;
  color: #1a202c;
  @media (max-width: 768px) {
    margin-left: 1.5rem;
  }
`;
export const Form = styled.form`
  margin: auto;
`;
export const InputLogin = styled.input`
  padding-left: 1rem;
  border: 1px solid #e8e8e8;
  box-sizing: border-box;
  border-radius: 5px;
  width: 21.875rem;
  height: 3.125rem;
  @media (max-width: 768px) {
    margin-left: 1.5rem;
    width: 19rem;
  }
`;
export const Checkbox = styled.input`
  margin-top: 28px;
  width: 15px;
  height: 15px;
  background: #f7fafc;
  border: 1px solid #e8e8e8;
  box-sizing: border-box;
  @media (max-width: 768px) {
    margin-left: 1.5rem;
  }
`;
export const MyP = styled.p`
  margin-top: 28px;
  font-family: Lato;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1rem;
`;
export const TextBox = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Box = styled.div`
  display: flex;
`;
export const MyLink = styled(Link)``;
export const BoxLink = styled.div`
  margin-top: 28px;
  color: #2b6cb0;
  font-family: Lato;
  font-size: 14px;

  font-weight: 400;
  line-height: 17px;

  margin-right: -25px;
  @media (max-width: 768px) {
  }
`;
export const MyButtonLogin = styled.button`
  background: #04c45c;
  border-radius: 5px;
  width: 21.875rem;
  height: 3.125rem;
  color: white;
  @media (max-width: 768px) {
    width: 19rem;
    margin-left: 1.4rem;
  }
`;
export const ButtonGoogleLogin = styled.button`
  background: #1a202c;
  border-radius: 5px;
  width: 21.875rem;
  height: 3.125rem;
  color: white;
  @media (max-width: 768px) {
    width: 19rem;
    margin-left: 1.5rem;
  }
`;
export const BoxCadastro = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    color: #2b6cb0;
  }
  @media (max-width: 768px) {
  }
`;
export const BoxButton=styled.div`
z-index: 1;
`
export const BoxIcon=styled.div`
position: absolute;
z-index: 2;
margin-left: 70px;
margin-top: 15px;
`