import type { SVGProps } from "react";

export function CodiconStarFull(props: SVGProps<SVGSVGElement>) {
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
        d='M9.595 6.252L8 1L6.405 6.252H1l4.373 3.4L3.75 15L8 11.695L12.25 15l-1.623-5.348L15 6.252z'
        clipRule='evenodd'
      ></path>
    </svg>
  );
}
