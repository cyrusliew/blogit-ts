import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TeaserWrapper from '../TeaserWrapper/TeaserWrapper';

export interface Props {
    name: string,
    ingredients: string,
    steps: string,
}

const Teaser: React.FC<Props> = (props) => {
    return (
        <TeaserWrapper
            icon="film"
            title="Movie title"
        >
            <div>
                Release date: 20 November 2020
            </div>
            <a href="https://imdb.com/inception">https://imdb.com/inception</a>
            <div>
                <FontAwesomeIcon icon="star" />
                <FontAwesomeIcon icon="star" />
                <FontAwesomeIcon icon="star" />
                <FontAwesomeIcon icon="star" />
                <FontAwesomeIcon icon="star" />
            </div>
            <div>
                Het is al geruime tijd een bekend gegeven dat een lezer, tijdens het bekijken van de layout van een pagina, afgeleid wordt door de tekstuele inhoud. Het belangrijke punt van het gebruik van Lorem Ipsum is dat het uit een min of meer normale verdeling van letters bestaat, in tegenstelling tot "Hier uw tekst, hier uw tekst" wat het tot min of meer leesbaar nederlands maakt. Veel desktop publishing pakketten en web pagina editors
            </div>
        </TeaserWrapper>
    )
}

export default Teaser;