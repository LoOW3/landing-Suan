import React from 'react'
import Image3 from '../../../assets/carbono-neutral.png'
import Image2 from '../../../assets/co2 (1).png'
import Image1 from '../../../assets/istockphoto-685841602-612x612-removebg-preview-removebg-preview.png'
import s from './Section2.module.css'
import Section2Card from './section2card/Section2Card'
export default function Section2() {
  return (
    <div className={s.container}>
        <div className={s.titleContainer}>
            <h3>Nuestra propuesta</h3>
            <p><b>SUAN</b> se compromete a crear un mercado justo y equitativo para los generadores de reducción, compensación o secuestro de Carbono...</p>
        </div>
        <div className={s.cardsContainer}>
            <Section2Card 
                title='Cambio climático' 
                text='El cambio climático es "un cambio en el clima atribuido directa o indirectamente a la actividad humana que altera la composición de la atmósfera global"'
                img={Image1}
                />
            <Section2Card 
                title='Mercado de carbono' 
                text='Los mercados de carbono son sistemas en los que se comercializan creditos de carbono.
                        Un credito es la cantidad equivalente de un gas de efecto invernadero diferente reducido, secuestrado o evitado.'
                img={Image2}
                />
            <Section2Card 
                title='Carbono Neutral' 
                text='Los mercados internacionales de carbono pueden desempeñar un papel clave en la reducción de las emisiones globales de gases de efecto invernadero de manera rentable.'
                img={Image3}
                />
        </div>
        <div className={s.contactContainer}>
            <h2>We're here to help you become nature positive!</h2>
            <button>Contact Us</button>
        </div>
    </div>
  )
}
