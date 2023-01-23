import React from 'react'
import ReactElasticCarousel from 'react-elastic-carousel'
import image from '../../../assets/Picture.png'
import s from './Section6.module.css'
export default function Section6() {
  return (
    <div className={s.container}>
        <h1>Our Partners Speak</h1>
        <p>We have been working with clients around the world</p>
        <ReactElasticCarousel itemsToShow={3} style={{width: '80%', marginTop: '2%'}} showArrows={false}>
            <div className={s.cardContainer}>
                <h3>Efficient Collaborating</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed imperdiet nibh lectus feugiat nunc sem.</p>
                <div className={s.infoContactContainer}>
                    <img src={image} alt='' />
                    <h5>Jane Cooper</h5>
                    <p>CEO at ABC Corporation</p>
                </div>
            </div>
            <div className={s.cardContainer}>
                <h3>Intuitive Design</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed imperdiet nibh lectus feugiat nunc sem.</p>
                <div className={s.infoContactContainer}>
                    <img src={image} alt='' />
                    <h5>Jane Cooper</h5>
                    <p>CEO at ABC Corporation</p>
                </div>
            </div>
            <div className={s.cardContainer}>
                <h3>Mindblowing Service</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed imperdiet nibh lectus feugiat nunc sem.</p>
                <div className={s.infoContactContainer}>
                    <img src={image} alt='' />
                    <h5>Jane Cooper</h5>
                    <p>CEO at ABC Corporation</p>
                </div>
            </div>
        </ReactElasticCarousel>
        <div className={s.contactContainer}>
            <h2>Inscribe tu proyecto y sé parte de Suan</h2>
            <button>Inscribe tu proyecto</button>
        </div>
    </div>
  )
}
