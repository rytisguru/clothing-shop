import styled from 'styled-components';
import { responsive } from '../../design/mixins';

export const SignUpContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 380px;

    h2 {
        margin: 10px 0;
    }

    ${responsive.forTabletPortrait`
        margin: 10px auto;
    `}

    ${responsive.forPhone`
        width: 80%;
    `}
`;