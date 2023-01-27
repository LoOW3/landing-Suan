import React from 'react'
import line from '../../../../assets/linea-card.svg'
import s from './Section1Card.module.css'

export default function Section1Card({image, title, paragraph}) {
  return (
    <div className={s.container}>
        {/* <img classname={s.line} src={line} alt='' /> */}
        <div className={s.textContainer}>
            <h3>{title}</h3>
            <p>{paragraph}</p>
        </div>
        <div className={s.imageContainer}>
            <img src={image} alt='' />
        </div>
    </div>
  )
}
