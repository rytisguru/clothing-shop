import styled from "styled-components";
import { responsive } from "../../design/mixins";

export const PaymentFormContainer = styled.div`
    height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const FormContainer = styled.form`
    height: 100px;
    min-width: 500px;

    ${responsive.forPhone`
        min-width: 400px;
        max-width: 500px;
        .StripeElement {
            max-width: 400px;
        }
    `}
`