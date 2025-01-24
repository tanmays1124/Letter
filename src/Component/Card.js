import './Card.css'
import React, { useState } from 'react';
import png1 from './e6d16637-3296-4c38-bd82-d542f8c1fac3.webp'
import png2 from './STK-20250124-WA0001.webp'
import png3 from './62f361ae-d46e-43cb-b334-cfd4a2810a05.webp'
import Letter from './Letter.js'
const Card = () =>{
    const [photo, setphoto] = useState(png1)
    const [question, setQuestion] = useState('Will you be my valentine ?')
    const [saidYes, setSaidYes] = useState('Yes')
    const [letter, setLetter] = useState(0)

    const handleNo = ()=>{
        setphoto(png2)
        setQuestion('Yes kar to tu.')
    }

    const handleYes = ()=>{

        setphoto(png3)
        setQuestion('We are married now HIHIHIHI!!')
        setSaidYes('Letter')
        setLetter(letter+1)

    }

    return(
        <div className = 'CardContainer'>
        
        { letter === 2? <Letter/>
        :
        (<>
            <span className='question'>{question}</span>

            <div className = 'CardInside'>
                <img src={photo} className = 'Png1'/>
             
                 
            </div>
            <div className = 'buttons'>
            <button onClick={handleYes}>{saidYes}</button>
            <button onClick={handleNo} className = {photo == png3 ? 'hidden' :''}>No</button>
            </div>
            </>
        )
        }
        </div>
        )
}

export default Card