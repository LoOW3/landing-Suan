import React from 'react'
import s from './Section2Card.module.css'
export default function Section2Card({title, text, img}) {
  return (
    <div className={s.container}>
        <img src={img} alt=''/>
        <h3>{title}</h3>
        <p>{text}</p>
    </div>
  )
}
