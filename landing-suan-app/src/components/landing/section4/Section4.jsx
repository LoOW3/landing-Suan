import React from 'react'
import image1 from '../../../assets/iphonese1.png'
import s from './Section4.module.css'
export default function Section4() {
  return (
    <div className={s.container}>
        <h1 className={s.title}>Proyectos que puedes apoyar</h1>
        <div className={s.cardsContainer}>
            <div className={s.cardContainer1}>
                <div className={s.infoContainer}>
                    <h6 className={s.titleCard}>Project Title</h6>
                    <p className={s.textCard}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque vitae blanditiis illum similique architecto dolore suscipit ipsum fugiat.</p>
                </div>
                <img src={image1} alt= '' className={s.imageCard}/>
            </div>
            <div className={s.cardContainer2}>
                <div className={s.infoContainer}>
                    <h6 className={s.titleCard}>Project Title</h6>
                    <p className={s.textCard}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque vitae blanditiis illum similique architecto dolore suscipit ipsum fugiat.</p>
                </div>
                <img src={image1} alt= '' className={s.imageCard} />
            </div>
            <div className={s.cardContainer3}>
                <div className={s.infoContainer}>
                    <h6 className={s.titleCard}>Project Title</h6>
                    <p className={s.textCard}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque vitae blanditiis illum similique architecto dolore suscipit ipsum fugiat.</p>
                </div>
                <img src={image1} alt= '' className={s.imageCard}/>    
            </div>
        </div>
    </div>
  )
}
