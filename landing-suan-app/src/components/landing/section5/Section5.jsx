import React from 'react'
import svg from '../../../assets/Indication.svg'
import s from './Section5.module.css'
export default function Section5() {
  return (
    <div className={s.container1}>
        <div className={s.container2}>
            <h2>Nuestro proceso</h2>
            <div className={s.cardContainer}>
                <div className={s.card}>
                    <img src={svg} alt='' />
                    <h6>Selección</h6>
                    <p>Identificación de proyectos de  captura de carbono</p>
                </div>
                <div className={s.card}>
                    <img src={svg} alt='' />
                    <h6>Firma</h6>
                    <p>Firmamos  contratos de largo plazo con los propietarios de los proyecto</p>
                </div>
                <div className={s.card}>
                    <img src={svg} alt='' />
                    <h6>Lanzamiento Tokens</h6>
                    <p>Los Tokens son emitidos de forma segura en la red block chain</p>
                </div>
                <div className={s.card}>
                    <img src={svg} alt='' />
                    <h6>Comercialización</h6>
                    <p>Los Tokens son vendidos a inversionistas y entregados a los propietarios del proyecto</p>
                </div>
            </div>
        </div>
    </div>
  )
}
