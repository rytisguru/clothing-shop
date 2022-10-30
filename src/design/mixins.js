import { css } from "styled-components";

export const responsive = {
    forPhone: (...args) => css`
        @media (max-width: 599px) {
            ${css(...args)};
        }
    `,
    forTabletPortrait: (...args) => css`
        @media (max-width: 899px) {
            ${css(...args)};
        }
    `,
    forTabletLandscape: (...args) => css`
        @media (max-width: 1199px) {
            ${css(...args)};
        }
    `,
    forDesktop: (...args) => css`
        @media (max-width: 1799px) {
            ${css(...args)};
        }
    `,
    forBigDesktop: (...args) => css`
        @media (min-width: 1800px) {
            ${css(...args)};
        }
    `,
};