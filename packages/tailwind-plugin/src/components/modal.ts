import { Config } from "../config";
import { css } from "../css";

export function modal(args: { config: Config }) {
  const styled = `
  .modal {
    @apply bg-neutral-focus bg-opacity-40 duration-200 ease-in-out;
    transition-property: transform, opacity;
    overflow-y: hidden;
    overscroll-behavior: contain;
  }
  .modal-box {
    @apply transform bg-base-100 p-6 transition duration-200 ease-in-out rounded-t-box;
    @apply w-11/12 max-w-lg scale-90 rounded-b-box rounded-t-box;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    overflow-y: auto;
    overscroll-behavior: contain;
  }
  .modal-open .modal-box,
  .modal-toggle:checked + .modal .modal-box,
  .modal:target .modal-box {
    @apply translate-y-0 scale-100;
  }
  .modal-action {
    @apply mt-6 justify-end space-x-2;
  }
  .modal-bottom :where(.modal-box){
    @apply w-full max-w-none translate-y-10 scale-100 rounded-b-none;
  }
  .modal-middle :where(.modal-box){
    @apply w-11/12 max-w-lg translate-y-0 scale-90 rounded-b-box;
  }
  
  `;
  const unstyled = `
  .modal {
    @apply pointer-events-none invisible fixed inset-0 flex justify-center opacity-0;
    z-index: 999;
  }
  :where(.modal){
    @apply items-center;
  }
  .modal-box {
    max-height: calc(100vh - 5em);
  }
  .modal-open,
  .modal:target,
  .modal-toggle:checked + .modal {
    @apply pointer-events-auto visible opacity-100;
  }
  .modal-action {
    @apply flex;
  }
  .modal-toggle {
    @apply fixed h-0 w-0 appearance-none opacity-0;
  }
  .modal-bottom{
    @apply items-end;
  }
  .modal-middle{
    @apply items-center;
  }
  `;

  return css(unstyled + styled);
}
