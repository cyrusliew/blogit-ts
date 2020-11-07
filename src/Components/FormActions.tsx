import React from 'react';
import {
    Btn,
    FormActionsWrapper,
    LinkBtn,
} from './formStyles';

const FormActions = () => {
    return (
        <FormActionsWrapper>
            <LinkBtn danger to="/">Discard</LinkBtn>
            <Btn primary>Publish</Btn>
        </FormActionsWrapper>
    )
}

export default FormActions;