import * as React from "react"

function EyeS(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="none"
      height={24}
      viewBox="0 0 24 24"
      width={24}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      >
        <path d="M2.155 12.435a.863.863 0 010-.87C3.064 9.988 6.535 4.667 12 4.667c5.466 0 8.936 5.32 9.845 6.898a.863.863 0 010 .87c-.909 1.577-4.38 6.898-9.845 6.898-5.466 0-8.936-5.32-9.845-6.898z" />
        <path d="M12 14.75a2.75 2.75 0 100-5.5 2.75 2.75 0 000 5.5z" />
      </g>
    </svg>
  )
}

export default EyeS;
