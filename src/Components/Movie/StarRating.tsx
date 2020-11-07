import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

export interface Props {
    readonly index: number,
    readonly required: boolean,
}

const Wrapper = styled.label`
    input {
        display: none;

        &:checked {
            + svg {
                path {
                    fill: orange;
                }
            }
        }
    }
`;

const StarRating: React.FC<Props>  = ({
    index,
    required
}) => {
    return (
        <Wrapper>
            <input type="radio" name="rating" required={required} />
            <FontAwesomeIcon icon="star" />
        </Wrapper>
    )
}

export default StarRating;