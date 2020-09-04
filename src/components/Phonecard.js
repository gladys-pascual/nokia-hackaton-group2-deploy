/** @jsx jsx */
import React, { useEffect, useState } from 'react';
import './Phonelist.css';
import { jsx, css, keyframes } from '@emotion/core'

const Phonecard = (props) => {
console.log(props);
    const bounce = keyframes`
    from, to{
      transform: translate(-20px, -20px);
      // transform: scale(1); 
    }
  
    25% {
      transform: translate(20px, -20px);
    }
  
   50% {
      transform: translate(20px,20px);
      // transform: scale(1.1)
    }
  
    75% {
      transform: translate(-30px, 30px);
    }
  `

    return (
        <div className="phonecard">
            <div className="phonecard-square1">
                <img src={props[0].pictures[0]} />
                <img src={props[1].pictures[0]} />
            </div>
            <div css={css`
        animation: ${bounce} 50s linear infinite;
      `} className="phonecard-square-bottom" >
            </div>
        </div>
    );
}

export default Phonecard; 