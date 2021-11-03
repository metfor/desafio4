import styled from "styled-components";
import image from "next/image";
export const Contaier = styled.div`
  width: 50%;
  height: 680px;
  background: #f7fafc;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0px;

  @media (max-width: 768px) {
    display: none;
  }
`;
export const MyImage = styled(image)``;
export const Checkbox = styled.input`
  width: 15px;
  height: 15px;
  background: #f7fafc;
  border: 1px solid #e8e8e8;
  box-sizing: border-box;
`;
