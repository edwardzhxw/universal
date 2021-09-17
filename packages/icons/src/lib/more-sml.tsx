import * as React from "react"

function MoreSml(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="#D9D9D9"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx={6} cy={12} r={1} />
      <circle cx={12} cy={12} r={1} />
      <circle cx={18} cy={12} r={1} />
    </svg>
  )
}

export default MoreSml;
