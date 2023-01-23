import React from 'react'
import emailIcon from '../../assets/email-icon.svg'
import locationIcon from '../../assets/Location.svg'
import LogoSuan from '../../assets/logo_suan_horizontal-web_white 1.svg'
import phoneIcon from '../../assets/phone-icon.svg'
import s from './Footer.module.css'
export default function Footer() {
  return (
    <footer className={s.container}>
        <div className={s.firstInfo}>
            <img src={LogoSuan} alt='' />
            <p>Lorem ipsum dolor amet, consectetur adipiscing elit. Eget nisl nunc quam ac sed turpis volutpat. Cursus sed massa non nisi, placerat.</p>
        </div>
        <div className={s.secondInfo}>
            <div className={s.quickLinks}>
                <h5>Quick Links</h5>
                <ul>
                    <li>inicio</li>
                    <li>Acerca de</li>
                    <li>Terms of service</li>
                    <li>Politica de privacidad</li>
                </ul>
            </div>
            <div className={s.reachUs}>
                <h5>Reach Us</h5>
                <ul>
                    <li>
                        {/* <img src={emailIcon} alt=''/> */}
                        <p>info@suan.global</p>
                    </li>
                    <li>
                        {/* <img src={phoneIcon} alt=''/> */}
                        <p>+1 (650) 555-0111</p>
                    </li>
                    <li>
                        {/* <img src={locationIcon} alt=''/> */}
                        <p>742 de Evergreen Terrace, Springfield</p>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
  )
}
