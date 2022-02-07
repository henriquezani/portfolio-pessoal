import Modal from 'react-modal'
import { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import closeImg from '../images/close.svg'
import Image from 'next/image'
import { set } from 'animejs';

const StyledModal = styled.form`

    h2{
        margin-bottom: 35px;
    }
   

    input, textarea{
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        border-radius: 0.25rem;
        color: var(--white);

        border: 1px solid var(--gray);
        background: transparent;

        font-weight: 400;
        font-size: 1rem;


        & + input {
            margin-top: 1.5rem;
        }    
    }

    textarea{
        margin-top: 1.5rem;
        height: 9rem;
        padding-top: 1.5rem;
    }

    button[type="submit"]{
        ${({ theme }) => theme.mixins.bigButton};
        font-size: var(--fz-xs);
        margin-top: 1.5rem;
    }
`


const ContactModal = ({isOpen, onRequestClose}) => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    async function handleCreateModal(e){
        e.preventDefault();

        const data = {
            name,
            email,
            message
        }
        

        const send = await fetch('/api/mail', {
            method: 'post',
            body: JSON.stringify(data)
        })

        
        onRequestClose();
        return send
    }

    return(
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            ariaHideApp={false}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button 
                type="button" 
                onClick={onRequestClose}
                className="react-modal-close"
            >
                <Image 
                    src={closeImg} 
                    alt="Fechar modal"
                    width={20}
                    height={20}
                />
            </button>
            <StyledModal method="post" onSubmit={handleCreateModal}>
                <h2>Enviar uma mensagem</h2>

                <input 
                    placeholder="Nome" 
                    name="name"
                    onChange={event => setName(event.target.value)}
                />

                <input 
                    placeholder="Email" 
                    name="email"
                    onChange={event => setEmail(event.target.value)}
                />
                <textarea 
                    placeholder="Mensagem" 
                    name="message"
                    onChange={event => setMessage(event.target.value)}
                />

                <button type="submit">
                    Enviar Mensagem
                </button>
            </StyledModal>
        </Modal>
    )
}

ContactModal.propTypes = {
    isOpen: PropTypes.bool,
};

export default ContactModal;