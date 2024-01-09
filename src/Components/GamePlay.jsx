import React, { useState } from 'react';
import TotalScore from './TotalScore';
import NumberSelector from './NumberSelector';
import styled from 'styled-components';
import RoleDice from './RoleDice';
import { Button, OutlineButton } from '../styled/Button';
import Rules from './Rules';

function GamePlay() {
    const [selectedNumber,setSelectedNumber] = useState();
    
    //set 1 from dice 
    const [currectDice,setCurrectDice] = useState(1);

    //set 0 from total score
    const [score,setScore] = useState(0);

    //showing for error
    const [error,setError] = useState("");

    //show rules
    const[showRules,setShowRules] = useState(false);

     //Random number for dice
     const generateRandomNumber = (min,max) =>{ 
        return Math.floor(Math.random() * (max - min + 1) + min);
    };

    //When dice roll is change the image 
    const roleDice=()=>{

        //if number is not selected 
        if(!selectedNumber) {
            setError("You have not selected any number");
            return;
        }
        setError("");
        //generate number btween 1 to 6
        const randomNumber = generateRandomNumber(1,6);

        //set those number on setCurrectDice
        setCurrectDice((prev) => randomNumber);

        //if selectedNumber and randomNumber are match are plus those number in total score
        if (selectedNumber === randomNumber) {
            setScore((prev)=> prev + randomNumber)
        }
        //else selectedNumber is not same then minus from total score
        else{
            setScore((prev)=> prev - 2)
        }

        //when dice is role remove selected number UNSET that number
        setSelectedNumber(undefined);
    }
    
    //rest score when click on button
    const restScore=()=>{
        setScore(0);
    }
    return (
        <MainContainer>
            <div className='topSection'>
                <TotalScore score={score}/>
                <NumberSelector error={error} setError={setError} selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber}/>
            </div>
            <RoleDice currectDice={currectDice} roleDice={roleDice} />
            <div className='btns'>
                <OutlineButton onClick={restScore}>Rest</OutlineButton>
                <Button onClick={()=>setShowRules((prev)=>!prev)}>{showRules ? "Hide" :"Show"} Rules</Button>
            </div>
            {showRules && <Rules/>}
        </MainContainer>
    );
}

export default GamePlay;

const MainContainer = styled.main `
padding-top: 70px;
    .topSection{
        display: flex;
        justify-content: space-around;
        align-items: center;

    };
    .btns{
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 12px;
        align-items: center;
    }
`;