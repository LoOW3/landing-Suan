import React from 'react'
import image1 from '../../../assets/37031f00de0c9aaf9673227d099f7d396b33b05b.jpeg'
import image2 from '../../../assets/Figura-1-Imagen-satelital-del-area-de-estudio-Las-zonas-boscosas-mas-oscuras 1.png'
import image3 from '../../../assets/imagenes-satelitales-santa-fe-trigo.jpg'
import image4 from '../../../assets/paramos-de-colombia-fabricas-de-agua-y-cunas-de-biodiversidad-scaled.jpg'
import s from './Section1.module.css'
import Section1Card from './section1Card/Section1Card'
export default function Section1() {
  return (
    <div className={s.container}>
        <h4>How it works</h4>
        <h2>Nuestro proceso de selección de proyectos</h2>
        <div className={s.cardsContainer}>
          <Section1Card image={image1} title='Selección de proyectos' paragraph='Suan Blockchain encuentra y establece relación con propietarios de tierras dispuestos a ponerlos a disposición de proyectos con captura de CO2'/>
          <Section1Card image={image2} title='Firma de proyectos' paragraph='Si firman contratos a largo plazo con la intención de asegurar la protección de los ecosistemas y la viabilidad futura de captura de CO2 del ecosistema. '/>
          <Section1Card image={image3} title='Lanzamiento' paragraph='Se analiza el alcance del proyecto y se realiza la emisión de los tokenz de los proyectos con tecnologia blockchain y con toda la información confirmando la viabilidad del proyecto y su ejecución. '/>
          <Section1Card image={image4} title='Comercialización' paragraph='Los Tokenz se ponen a disposición para el proceso de comercialización con inversionistas y crowfunding para asegurar la ejecución de los diferentes procesos que aseguran su valorización y adecuada ejecución del proyecto. '/>
        </div>
    </div>
  )
}
