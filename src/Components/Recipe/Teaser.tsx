import React from 'react';
import TeaserWrapper from '../TeaserWrapper/TeaserWrapper';

export interface Props {
    name: string,
    ingredients: string,
    steps: string,
}

const Teaser: React.FC<Props> = (props) => {
    return (
        <TeaserWrapper
            icon="utensils"
            title="Recipe name"
        >
            <div>
                <ol>
                    <li>Step 1</li>
                    <li>Step 2</li>
                    <li>Step 3</li>
                </ol>
            </div>
            <div>
                ingredients
            </div>
        </TeaserWrapper>
    )
}

export default Teaser;