import React from 'react'
import image2 from '../../../assets/Daco_4544542.png'
import image3 from '../../../assets/kindpng_7191738.png'
import image5 from '../../../assets/PikPng.com_round-png-images_5413318.png'
import image4 from '../../../assets/PngItem_758282.png'
import image1 from '../../../assets/pngkit_henry-png_6399637 1.png'
import CardSection3 from './cardSection3/CardSection3'
import s from './Section3.module.css'
export default function Section3() {
  return (
    <div className={s.container}>
        <div className={s.titleContainer}>
            <h1>Meet the Leadership Team</h1>
        </div>
        <div className={s.cardsContainer}>
            <div className={s.cardsFirstRow}>
                <CardSection3 image={image1} name='Jhony F. Lopez'/>
                <CardSection3 image={image2} name='Jhony F. Lopez'/>
                <CardSection3 image={image3} name='Jhony F. Lopez'/>
            </div>
            <div className={s.cardsSecondRow}>
                <CardSection3 image={image4} name='Luis Restrepo'/>
                <CardSection3 image={image5} name='Robin Ochoa'/>
            </div>
        </div>
    </div>
  )
}
