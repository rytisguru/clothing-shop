import styled from 'styled-components';
import { responsive } from '../../design/mixins';

export const AuthContainer = styled.div`
    display: flex;
    width: 900px;
    justify-content: space-between;
    margin: 30px auto;

    ${responsive.forTabletPortrait`
        flex-direction: column;
        width: auto;
        max-width: 900px;
    `}
`;