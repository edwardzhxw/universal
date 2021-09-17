import * as React from "react"

function AudioStop(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="none"
      height={24}
      viewBox="0 0 24 24"
      width={24}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx={12} cy={12} fill="#ff554b" r={11} />
      <rect fill="#fff" height={6} rx={1} width={6} x={9} y={9} />
    </svg>
  )
}

export default AudioStop;
