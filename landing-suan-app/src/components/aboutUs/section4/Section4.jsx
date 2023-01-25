import React from 'react'
import image1 from '../../../assets/employees/Daco_5511364 1.png'
import image2 from '../../../assets/employees/PngItem_3127637 1.png'
import image3 from '../../../assets/employees/PngItem_4961795 1.png'
import image4 from '../../../assets/employees/PngItem_6275754 1.png'
import s from './Section4.module.css'

export default function Section4() {
  return (
    <div className={s.container}>
        <div className={s.titleContainer}>
            <h1>What Our Employees Say</h1>
        </div>
        <div className={s.cardsContainer}>
            <div className={s.firstCardsContainer}>
                <div className={s.card1}>
                    <div className={s.infoEmployee}>
                        <img src={image1} alt='' />
                        <div>
                            <h3>Sebastián Azcona</h3>
                            <p className={s.infoDescription}>Desc</p>
                        </div>
                    </div>
                    <p className={s.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat</p>
                </div>
                <div className={s.card1}>
                    <div className={s.infoEmployee}>
                        <img src={image2} alt='' />
                        <div>
                            <h3>Sebastián Plata</h3>
                            <p className={s.infoDescription}>Desc</p>
                        </div>
                    </div>
                    <p className={s.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in </p>
                </div>
            </div>
            <div className={s.secondCardsContainer}>
                <div className={s.card1}>
                    <div className={s.infoEmployee}>
                        <img src={image3} alt='' />
                        <div>
                            <h3>Ignacio Díaz</h3>
                            <p className={s.infoDescription}>Desc</p>
                        </div>
                    </div>
                    <p className={s.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</p>
                </div>
                <div className={s.card4}>
                    <div className={s.infoEmployee}>
                        <img src={image4} alt='' />
                        <div>
                            <h3>Carlos Soto</h3>
                            <p className={s.infoDescription}>Desc</p>
                        </div>
                    </div>
                    <p className={s.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </div>
            </div>
        </div>
        
    </div>
  )
}
