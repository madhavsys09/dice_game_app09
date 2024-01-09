import { useState } from "react";
import styled from "styled-components";

function NumberSelector({error,setError,selectedNumber,setSelectedNumber}) {
    const numbersArray = [1,2,3,4,5,6];

    const numberSelectorHandle=(value)=>{
        setSelectedNumber(value);
        setError("")
    }
    return ( 
        <NumberSelectorContainer>
            <p className="error">{error}</p>
            <div className="flex">
                {/* here pass value onClick  */}
                {numbersArray.map((value,i) => (<Box isSelected={value === selectedNumber} key={i} onClick={()=> numberSelectorHandle(value)} > {value}</Box>))}
            </div>
            <p>Select Number</p>
        </NumberSelectorContainer>
    );
}

export default NumberSelector;

const NumberSelectorContainer = styled.div `
display: flex;
flex-direction: column;
align-items: end;
.flex{
    display: flex;
    gap: 24px;
}
.error{
    color: red;
}
p {
    font-size: 24px;
    font-weight: 700px;
  }
`;

const Box = styled.div`
width: 72px;
height: 72px;
border: 1px solid black;
display: grid;
place-items: center;
font-size: 24px;
font-weight: 700;
background-color: ${(props)=> (props.isSelected ? "black" : "white")};
color: ${(props)=> (!props.isSelected ? "black" : "white")};
`;