import { Config } from "../config";
import { css } from "../css";

export function carousel(args: { config: Config }) {
  const styled = `
    .carousel {
      -ms-overflow-style: none;
      scrollbar-width: none;
      &::-webkit-scrollbar {
        @apply hidden;
      }
    }
  `;

  const unstyled = `
    .carousel {
      @apply flex overflow-x-scroll;
      scroll-snap-type: x mandatory;
      scroll-behavior: smooth;
      &-vertical {
        @apply flex-col overflow-y-scroll;
        scroll-snap-type: y mandatory;
      }
      &-item {
        @apply box-content flex flex-none;
        scroll-snap-align: start;
      }
      &-center .carousel-item {
        scroll-snap-align: center;
      }
      &-end .carousel-item {
        scroll-snap-align: end;
      }
    }
  `;

  return css(unstyled + styled);
}
