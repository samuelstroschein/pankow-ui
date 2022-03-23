import { Config } from "../config";
import { css } from "../css";

export function table(args: { config: Config }) {
  const styled = `
  .table {
    @apply text-left;
    :where(th, td) {
      @apply whitespace-nowrap p-4 align-middle;
    }
    tr.active,
    tr.active:nth-child(even) {
      th,
      td {
        @apply bg-base-300;
      }
    }
    tr.hover:hover,
    tr.hover:nth-child(even):hover {
      th,
      td {
        @apply bg-base-300;
      }
    }
    &:where(:not(.table-zebra)) {
      :where(thead, tbody, tfoot) {
        :where(tr:not(:last-child) :where(th, td)) {
          @apply border-b border-base-200;
        }
      }
    }
    :where(thead, tfoot) {
      :where(th, td) {
        @apply bg-base-200 text-xs font-bold uppercase;
      }
    }
  
    :where(:first-child) {
      :where(:first-child) {
        :where(th, td) {
          &:first-child {
            @apply rounded-tl-lg;
          }
          &:last-child {
            @apply rounded-tr-lg;
          }
        }
      }
    }
  
    :where(:last-child) {
      :where(:last-child) {
        :where(th, td) {
          &:first-child {
            @apply rounded-bl-lg;
          }
          &:last-child {
            @apply rounded-br-lg;
          }
        }
      }
    }
  
    :where(tbody th, tbody td) {
      @apply bg-base-100;
    }
  
    &-zebra tbody {
      tr:nth-child(even) {
        th,
        td {
          @apply bg-base-200;
        }
      }
    }
  }
  .table-normal {
    :where(th, td) {
      @apply p-4 text-base;
    }
  }
  .table-compact {
    :where(th, td) {
      @apply p-2 text-sm;
    }
  }
  
  
  `;
  const unstyled = `
  .table {
    @apply relative;
    th:first-child {
      @apply sticky left-0 z-[11];
      /* because safari */
      position: -webkit-sticky;
    }
  }
  
  `;

  return css(unstyled + styled);
}
