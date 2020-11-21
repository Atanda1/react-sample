import React from 'react'
import styles from './styles/appStyles.module.css'

function greetChild(props) {
    return (
        <div>
            <h1 className = {styles.project}>a king</h1>
            <button onClick={()=> props.theGreet("Tunde")}>How far</button>
        </div>
    )
}

export default greetChild;
