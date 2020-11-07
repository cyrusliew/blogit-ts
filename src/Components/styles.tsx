import styled from 'styled-components';
import { colors, themeColors } from '../colors';
import { Input } from './formStyles';

export const Header = styled.header`
    background: ${colors.charade};
    padding: 2rem;
    position: sticky;
    top: 0;
    z-index: 100;
`;

export const Filter = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    > *:not(:last-child) {
        margin-right: 1rem;
    }
`;

export const FilterButton = styled.button`
    background: lightblue;
    align-items: center;
    background: ${themeColors.primary};
    border-radius: 100%;
    border: 0;
    color: #1F1F29;
    display: inline-flex;
    flex-direction: column;
    height: 3rem;
    justify-content: center;
    padding: 2rem;
    width: 3rem;
`;

export const SearchInput = styled(Input)`
    background: white;
    margin: auto;
    margin-bottom: 1.5rem;
`;

export const ContentWrapper = styled.div`
    padding: 2rem;

    > *:not(:last-child) {
        margin-bottom: 2rem;
    }
`;