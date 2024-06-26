import type { SVGProps } from "react";

export function CodiconClose(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 16 16'
      {...props}
    >
      <path
        fill='white'
        fillRule='evenodd'
        d='m8 8.707l3.646 3.647l.708-.707L8.707 8l3.647-3.646l-.707-.708L8 7.293L4.354 3.646l-.707.708L7.293 8l-3.646 3.646l.707.708z'
        clipRule='evenodd'
      ></path>
    </svg>
  );
}
