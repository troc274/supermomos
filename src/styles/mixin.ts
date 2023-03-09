import { css } from "styled-components";

type cssParams = Parameters<typeof css>;

export const breakpoint = {
  xs: (...args: cssParams) => css`
    @media (max-width: 575.98px) {
      ${css(...args)}
    }
  `,
  sm: (...args: cssParams) => css`
    @media (min-width: 576px) {
      ${css(...args)}
    }
  `,
  md: (...args: cssParams) => css`
    @media (min-width: 768px) {
      ${css(...args)}
    }
  `,
  lg: (...args: cssParams) => css`
    @media (min-width: 992px) {
      ${css(...args)}
    }
  `,
  xl: (...args: cssParams) => css`
    @media (min-width: 1200px) {
      ${css(...args)}
    }
  `,
  xxl: (...args: cssParams) => css`
    @media (min-width: 1400px) {
      ${css(...args)}
    }
  `,
};

export const truncateOneLine = css`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const truncateMultiline = (num: number) => css`
  overflow: hidden;
  text-overflow: ellipsis;
  /* stylelint-disable-next-line value-no-vendor-prefix */
  display: -webkit-box;
  /* stylelint-disable property-no-vendor-prefix */
  -webkit-line-clamp: ${num};

  /* autoprefixer: off */
  -webkit-box-orient: vertical;
`;
