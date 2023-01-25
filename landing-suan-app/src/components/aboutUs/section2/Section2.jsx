import React from 'react'
import image1 from '../../../assets/Figura-1-Imagen-satelital-del-area-de-estudio-Las-zonas-boscosas-mas-oscuras 1.png'
import image2 from '../../../assets/imagenes-satelitales-santa-fe-trigo.jpg'
import s from './Section2.module.css'

export default function Section2() {
  return (
    <div className={s.container}>
        <div className={s.titleContainer}>
            <h3>Transforming agriculture systems is the single most important thing we can do to combat climate change.</h3>
            <p>That’s why FluroSat and Dagan have combined forces to launch Regrow, a company that empowers the food and agriculture industries to adopt, scale and monetize resilient agricultural practices. Hear Our Story.</p>
        </div>
        <div className={s.infoContainer}>
            <div className={s.infoSection}>
                <img src={image1} alt='' className={s.infoImage1} />
                <div className={s.infoText1}>
                    <h3>Nuestra misión y visión</h3>
                    <p>Suan es una empresa tecnologica que busca a traves de la tokenización la protección de activos ambientales en el largo plazo, para la mitigación del cambio climatico y al mismo tiempo convertirlos en un instrumento de generación de riquieza para los Owners.
                    Queremos convertirnos en el mejor servicio de protección, trazabilidad, monetización,  y comercialización de activos climaticos del mundo.
                    </p>
                </div>
            </div>
            <div className={s.infoSection}>
                <div className={s.infoText2}>
                    <h3>Valores</h3>
                    <ol>
                        <li>Compromiso ambiental y co-responsabilidad: Maximizar nuestro impacto en el medio ambiente y colaborar con las comunidades.</li>
                        <li>Desarrollo e innovación:  Investigar y implementar las ultimas soluciones para entregarle el mayor valor a nuestros stakeholders.</li>
                        <li>Que todo desafio se convierta en un proceso de mejora continua: Eficiencia y mejoramiento continuo a traves de la experimentación.</li>
                        <li>Transparencia y cumplimiento de compromisos: Completa transparencia y trazabilidad en la ejecución de nuestros procesos, cumpliendo con el valor entregado a los owners.   </li>
                    </ol>
                </div>
                <img src={image2} alt='' className={s.infoImage2} />
            </div>
        </div>
    </div>
  )
}
