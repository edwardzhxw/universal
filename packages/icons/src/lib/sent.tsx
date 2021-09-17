import * as React from "react"

function Sent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      height={24}
      viewBox="0 0 24 24"
      width={24}
      xmlns="http://www.w3.org/2000/svg"
      fill="#fff"
      {...props}
    >
      <path
        clipRule="evenodd"
        d="M11.47 5.47a.75.75 0 011.06 0l4.8 4.8a.75.75 0 11-1.06 1.06l-3.52-3.52V18a.75.75 0 01-1.5 0V7.81l-3.52 3.52a.75.75 0 01-1.06-1.06z"
        fillRule="evenodd"
      />
    </svg>
  )
}

export default Sent;
