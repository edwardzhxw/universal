import * as React from "react"

function RightSml(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      height={24}
      viewBox="0 0 24 24"
      width={24}
      xmlns="http://www.w3.org/2000/svg"
      fill="#333"
      {...props}
    >
      <path
        clipRule="evenodd"
        d="M9.72 16.28a.75.75 0 010-1.06l2.97-2.97-2.97-2.97a.75.75 0 011.06-1.06l3.5 3.5a.75.75 0 010 1.06l-3.5 3.5a.75.75 0 01-1.06 0z"
        fillRule="evenodd"
      />
    </svg>
  )
}

export default RightSml;
