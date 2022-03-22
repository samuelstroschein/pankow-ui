import { Config } from "../config";
import { css } from "../css";

export function avatar(args: { config: Config }) {
  const styled = `
    .avatar {
      &.online {
        &:before {
          content: "";
          @apply absolute z-10 block rounded-full bg-success;
          width: 15%;
          height: 15%;
          top: 7%;
          right: 7%;
          box-shadow: 0 0 0 2px hsl(var(--b1));
        }
      }
      &.offline {
        &:before {
          content: "";
          @apply absolute z-10 block rounded-full bg-base-300;
          width: 15%;
          height: 15%;
          top: 7%;
          right: 7%;
          box-shadow: 0 0 0 2px hsl(var(--b1));
        }
      }
    }
  
    .avatar-group {
      @apply flex overflow-hidden;
      .avatar {
        @apply overflow-hidden rounded-full border-4 border-base-100;
      }
    }
  `;

  const unstyled = `
    .avatar {
      @apply relative inline-flex;
      & > div {
        @apply block aspect-square overflow-hidden;
      }
      img {
        @apply h-full w-full object-cover;
      }
      &.placeholder {
        & > div {
          @apply flex items-center justify-center;
        }
      }
    }
  `;

  return css(styled + unstyled);
}
