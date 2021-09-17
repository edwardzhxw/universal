import * as React from "react"

function More(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="#333"
      height={24}
      viewBox="0 0 24 24"
      width={24}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g>
        <circle cx={5} cy={12} r={1.5} />
        <circle cx={12} cy={12} r={1.5} />
        <circle cx={19} cy={12} r={1.5} />
      </g>
    </svg>
  )
}

export default More;
