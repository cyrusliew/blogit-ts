import React from 'react';
import { IconName } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    DeleteBtn,
    Header,
    Wrapper,
} from './styles';

export interface Props {
    children: React.ReactNode,
    icon: string,
    title: string,
}

const TeaserWrapper: React.FC<Props> = ({
    children,
    icon,
    title,
}) => {
    return (
        <Wrapper>
            <DeleteBtn>
                <FontAwesomeIcon icon="trash-alt" />
            </DeleteBtn>

            <Header>
                <FontAwesomeIcon icon={icon as IconName} />
                {' '}
                <h2>{title}</h2>
            </Header>
            {children}
        </Wrapper>
    )
}

export default TeaserWrapper;