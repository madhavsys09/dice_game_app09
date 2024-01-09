import styled from "styled-components";



export const Button = styled.button`
    color: #FFFFFF;
    padding: 10px 18px;

    background: #000;
    border-radius: 5px;
    min-width: 220px;  
    border: none;
    font-size: 16px;
    border: 1px solid transparent;
    transition: 0.9s background ease-in;
    cursor: pointer;

    &:hover{
        background-color: #FFFFFF;
        border: 1px solid black;
        color: black;
        transition: 0.7s background ease-in;
     }
`;

export const OutlineButton = styled(Button)`
    background-color: white;
    border: 1px solid black;
    color: black;
   &:hover{
        background-color: black;
        border: 1px solid transparent;
        color: white;
     }
`;