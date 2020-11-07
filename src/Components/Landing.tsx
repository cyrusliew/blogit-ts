import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    ContentWrapper,
    Filter,
    FilterButton,
    Header,
    SearchInput,
} from './styles';
import Recipe from './Recipe/Teaser';
import Movie from './Movie/Teaser';
import Blog from './Blog/Teaser';
import AddEntry from './AddEntry/AddEntry';
// import Modal from './Modal/Modal';

const Landing = () => {
    return (
        <>
            <Header>
                <SearchInput placeholder="Search anything..."  />
                <Filter>
                    <FilterButton>
                        <FontAwesomeIcon icon="film" size="2x" />
                    </FilterButton>
                    <FilterButton>
                        <FontAwesomeIcon icon="file-alt" size="2x" />
                    </FilterButton>
                    <FilterButton>
                        <FontAwesomeIcon icon="utensils" size="2x" />
                    </FilterButton>
                </Filter>
            </Header>
            <ContentWrapper>
                <Recipe name="Brocolli soup" ingredients="huiahwuihfduanwdoianwdjoaiw" steps="1 asdiamw 2 asiodmiam 3 asoidmamwd" />
                <Movie name="Brocolli soup" ingredients="huiahwuihfduanwdoianwdjoaiw" steps="1 asdiamw 2 asiodmiam 3 asoidmamwd" />
                <Blog name="Brocolli soup" ingredients="huiahwuihfduanwdoianwdjoaiw" steps="1 asdiamw 2 asiodmiam 3 asoidmamwd" />
                <Recipe name="Brocolli soup" ingredients="huiahwuihfduanwdoianwdjoaiw" steps="1 asdiamw 2 asiodmiam 3 asoidmamwd" />
                <Movie name="Brocolli soup" ingredients="huiahwuihfduanwdoianwdjoaiw" steps="1 asdiamw 2 asiodmiam 3 asoidmamwd" />
            </ContentWrapper>
            <AddEntry />
        </>
    )
}

export default Landing;