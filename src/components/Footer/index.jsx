import React from 'react'

//import logoWhiteImage from '../../images/logo-white.svg'
import logoWhiteImage from '../../images/logo-porteira-branca.png'
import whatsappIcon from '../../images/whatsapp-icon.svg'
import instagramIcon from '../../images/instagram-icon.svg'
import facebookIcon from '../../images/facebook-icon.svg'
import linkedinIcon from '../../images/linkedin-icon.svg'
import youtubeIcon from '../../images/youtube-icon.svg'

import './styles.css'

function Footer() {
    return (
        <footer className="footer-page">
            <div className="footer-image-container">
                <img src={logoWhiteImage} alt=""/>
            </div>
            <div className="footer-social-media-container">
                <div className="footer-social-medias">
                    <a href="https://www.instagram.com/porteira360/" target="_blank">
                        <img src={instagramIcon} alt="instagram porteira"/>
                    </a>

                    <a href="https://facebook.com" target="_blank">
                        <img src={facebookIcon} alt="facebook porteira"/>
                    </a>

                   {/* <a href="https://whatsapp.com" target="_blank">
                        <img src={whatsappIcon} alt="whatsapp porteira"/>
                    </a> */}

                    <a href="https://www.linkedin.com/company/porteira-360%C2%BA/" target="_blank">
                        <img src={linkedinIcon} alt="linkedin porteira"/>
                    </a>

                    <a href="https://www.youtube.com/channel/UCmZMhm4FOo_gtyvREZKuUPw" target="_blank">
                        <img src={youtubeIcon} alt="youtube porteira"/>
                    </a>
                </div>
                <p className="footer-contact">
                    contato@porteira360.com.br
                </p>
            </div>
        </footer>
    )
}

export default Footer
