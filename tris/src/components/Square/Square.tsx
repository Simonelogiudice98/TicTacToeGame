
import React, { useState,useEffect } from 'react';
import styles from "./Square.module.scss";
import ISquare from './ISquareProps';
import XIcon from '../Icons/XIcon';
import OICon from '../Icons/OIcon';
import OIcon from '../Icons/OIcon';


export default function Square(props:ISquare):JSX.Element {
    const [isClicked,setIsClicked] = useState(false);

    useEffect(() => {
        if(props.haveAWinner === true){
            setIsClicked(false);
        }
    },[props.haveAWinner]);
    
    return (

        <div
        className={styles.square} 
        onClick={() => {
            if(isClicked === false && props.haveAWinner === false){
                props.onClick(props.index);
                setIsClicked(true);
            }
        }}
        
        >
         {
         
        props.board[props.index] === "X"
        &&
            <XIcon />
         }
         {
         
        props.board[props.index] === "O"
        &&
            <OIcon />
         }
        </div>

    );
    
}
