import React from 'react'
import icon1 from '../../../assets/iconsStats/Feature Icon with circle.png'
import icon2 from '../../../assets/iconsStats/Feature Icon with circle2.png'
import icon3 from '../../../assets/iconsStats/Feature Icon with circle3.png'
import icon4 from '../../../assets/iconsStats/Feature Icon with circle4.png'
import s from './Section3.module.css'
export default function Section3() {
  return (
    <div className={s.container}>
        <div className={s.bar} />
        <div className={s.statsContainer}>
            <div className={s.stat}>
              <img src={icon2} alt=''/>
              <h6>500k+</h6>
              <p>Ton. CO2e 3Q 2022</p>
            </div>
            <div className={s.stat}>
              <img src={icon1} alt=''/>
              <h6>1.000M</h6>
              <p>Ton. CO2e antes del 2030</p>
            </div>
            <div className={s.stat}>
              <img src={icon3} alt=''/>
              <h6>500+</h6>
              <p>Aliados y clientes</p>
            </div>
            <div className={s.stat}>
              <img src={icon4} alt=''/>
              <h6>20+</h6>
              <p>Países</p>
            </div>
        </div>
    </div>
  )
}
