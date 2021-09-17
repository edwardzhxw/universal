import * as React from "react"

function Zoom(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect x={3} y={3} width={18} height={18} rx={4} fill="#2D8CFF" />
      <mask
        id="zoom"
        maskUnits="userSpaceOnUse"
        x={6}
        y={8}
        width={12}
        height={8}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.022 9.133v4.335c0 .975.799 1.765 1.783 1.765h6.321c.18 0 .324-.143.324-.321v-4.335c0-.975-.799-1.765-1.782-1.765H6.346a.323.323 0 00-.324.321zm8.83 1.69l2.608-1.902c.228-.187.402-.144.402.2v5.81c0 .385-.217.342-.401.2l-2.61-1.903v-2.404z"
          fill="#fff"
        />
      </mask>
      <g mask="url(#zoom)">
        <path d="M5.58 8.33h21.232v12.924H5.58V8.33z" fill="#fff" />
      </g>
    </svg>
  )
}

export default Zoom;
