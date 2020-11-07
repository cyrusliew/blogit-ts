import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

export const DeleteBtn = styled.div`
    align-items: center;
    background: red;
    border-radius: 100%;
    color: white;
    cursor: pointer;
    display: inline-flex !important;
    height: 2rem;
    justify-content: center;
    opacity: 0;
    position: absolute;
    right: 1rem;
    top: 1rem;
    transition: all 0.25s ease;
    width: 2rem;

    > * {
        position: relative;
    }
`;

export const Wrapper = styled.div`
    background: #f2f2f2;
    overflow: hidden;;
    padding: 2rem;
    position: relative;
    width: calc(100% - 4rem);

    &:hover {
        ${DeleteBtn} {
            opacity: 1;
        }
    }

    > * {
        display: block;
        margin-bottom: 1rem;
    }
`;

export const BGFontAwesomeIcon = styled(FontAwesomeIcon)<FontAwesomeIconProps>`
    bottom: 0;
    left: 0;
    margin: auto;
    position: absolute;
    top: 0;
    z-index: 0;

    path {
        fill: #ddd;
    }
`;

export const ContentWrapper = styled.div`
    position: relative;
`;

export const Header = styled.div`
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    
    > h2 {
        margin: 0 0 0 0.5rem;
    }
`;
