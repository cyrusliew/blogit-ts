import styled from 'styled-components';

export const ModalWrapper = styled.div`
    position: fixed;
    left: 0;
    right: 0;

    &::before {
        align-items: center;
        bottom: 0;
        content: '';
        display: flex;
        left: 0;
        justify-content: center;
        right: 0;
        top: 0;
    }
`;