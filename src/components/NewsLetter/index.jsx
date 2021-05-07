import React, { useState } from 'react'

import api from '../../services/api'

import newsLetterImage from '../../images/newsletter-image.webp'
import 'react-responsive-modal/styles.css'
import { Modal } from 'react-responsive-modal'
import alertIcon from '../../images/alert.svg'
import checkIcon from '../../images/check-icon.svg'

import './styles.css'
import Loading from '../Loading'

function NewsLetter() {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [phone, setPhone] = useState();
    const [open, setOpen] = useState(false);
    const [messageModal, setMessageModal] = useState({})
    const [loading, setLoading] = useState(false)

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    function handleToCreateLead(e) {
        e.preventDefault()
        setLoading(true)
        
        api('/leads', {
            data: {
            "name": name,
            "email": email,
            "phone": String(phone),
            "perfil": "Agro",
            "etapa": "newsletter"
        }})
            .then(response => {
                console.log('ress2121s',response)
                setLoading(false)
                if (response.data.status === 201) {
                    setMessageModal({
                        message: "Inscrição realizada com sucesso!",
                        image: checkIcon,
                        buttonColor: "modal-success",
                        textValue: "Ok!"
                    })
                    onOpenModal()
                    console.log(messageModal)
                    console.log('ressss',response)
                }
                if (response.data.status === 401 || response.data.status === 500) {
                    setMessageModal({
                        message: "Houve um erro ao fazer cadastro",
                        image: alertIcon,
                        buttonColor: "modal-again-error",
                        textValue: "Tentar novamente"
                    })
                    onOpenModal()
                }
                
            })
            .catch(error => console.log(error))
    }

    return (
        <section className="newsletter-container">
            <div className="newsletter-subcontainer">
                <div className="newsletter-image-container">
                    <img src={newsLetterImage} alt="newsletter porteira 360º"/>
                </div>
                {loading && (
                    <Loading />
                )}
                <div className="newsletter-fields-container">
                    <h1 className="newsletter-title">
                        Newsletter
                    </h1>
                    <p className="newsletter-text">
                        Assine a nossa newsletter e receba e-books e informações sobre o mercado em primeira mão!
                    </p>

                    <form onSubmit={e=> handleToCreateLead(e)} className="field">
                        <div class="form__div">
                            <input onChange={e => setName(e.target.value)} type="text" class="form__input" placeholder=" " />
                            <label class="form__label">Seu nome</label>
                        </div>

                        <div class="form__div">
                            <input onChange={e => setEmail(e.target.value)} type="email" class="form__input" placeholder=" " />
                            <label class="form__label">Seu melhor email</label>
                        </div>
                        
                        <div class="form__div">
                            <input onChange={e => setPhone(e.target.value)} type="number" class="form__input" placeholder=" " />
                            <label class="form__label">Telefone</label>
                        </div>

                        <input type="submit" class="form__button" value="Assinar newsletter" />
                    </form>
                </div>
            </div>
            <Modal open={open} onClose={onCloseModal} center>
                <div className="modal-error">
                    <div className="modal-text-error">
                        <img src={messageModal.image} alt="ícone de erro"/>
                    </div>
                    <p>{messageModal?.message}</p>
                    <input onClick={onCloseModal} className={messageModal?.buttonColor} type="submit" value={messageModal?.textValue} />
                </div>
            </Modal>
        </section>
    )
}

export default NewsLetter