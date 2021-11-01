import styled from "styled-components";
import image from "next/image"
export const Contaier = styled.div`
    width: 50%;
    height: 700px;
    background: #F7FAFC;
    display: flex;
    justify-content: center;
    align-items: center;
    @media(max-width:768px){
      display  : none;
    }


` 
export const MyImage=styled(image)`

`