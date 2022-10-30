import styled from 'styled-components';
import { responsive } from '../../design/mixins';

export const SingleCategoryContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 20px;
    row-gap: 50px;

    ${responsive.forTabletPortrait`
        grid-template-columns: repeat(2, 1fr);
        column-gap: 10px;
        row-gap: 25px;
    `}
`;

export const CategoryTitle = styled.h2`
    text-align: center;
    font-size: 38px;
    margin-bottom: 25px;
`;