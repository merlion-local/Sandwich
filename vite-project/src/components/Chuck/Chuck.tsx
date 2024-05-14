/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect } from 'react'
import styles from './Chuck.module.css'

export default function Chuck(): JSX.Element {
const [joke, setJoke] = React.useState('');
const[timer, setTimer] = React.useState(0);
function startTimer():void{
    setInterval(loadJoke, 10000);
    
}

async function loadJoke():Promise<void>{
    const res = await fetch('https://api.chucknorris.io/jokes/random');
    const obj = await res.json();
    setJoke(obj.value);
}
useEffect(() => {
    loadJoke();
},[])


  return (
    <div className={styles.container}>
        <h1 >{joke}</h1>
        <button className={styles.button} onClick={startTimer}>Start</button>
    </div>
  )
}
