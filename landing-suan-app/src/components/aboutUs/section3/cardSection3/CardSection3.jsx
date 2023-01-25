import React from 'react'
import s from './CardSection3.module.css'
export default function CardSection3({ image, name }) {
  return (
    <div className={s.container}>
        <img src={image} alt=''/>
        <h3>{name}</h3>
        <p className={s.description}>CEO y Co-founder</p>
        <p className={s.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum diam orci pretium a pharetra, feugiat cursus. Lorem ipsum dolor sit amet</p>
    </div>
  )
}
