import React, { useEffect } from 'react';
import { Btn, FormActionsWrapper } from '../formStyles'
import { ModalWrapper } from './styles';

const Modal = () => {
    useEffect(() => {
        const body = document.querySelector('body');

        if (body !== null) {
            body.style.overflow = 'hidden';
    
            return () => {
                body.style.overflow = 'auto';
            }
        }
    }, [])

    return (
        <ModalWrapper>
            <div>
                <h1>Are you sure?</h1>
                <FormActionsWrapper>
                    <Btn primary>Yes</Btn>
                    <Btn primary>No</Btn>
                </FormActionsWrapper>
            </div>
        </ModalWrapper>
    )
}

export default Modal;