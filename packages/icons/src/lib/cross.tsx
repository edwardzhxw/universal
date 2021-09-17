import * as React from "react"

function Cross(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="#333"
      height={24}
      viewBox="0 0 24 24"
      width={24}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        clipRule="evenodd"
        d="m5.5 4.4c-.3-.3-.8-.3-1.1 0s-.3.8 0 1.1l6.5 6.5-6.5 6.5c-.3.3-.3.8 0 1.1s.8.3 1.1 0l6.5-6.5 6.5 6.5c.3.3.8.3 1.1 0s.3-.8 0-1.1l-6.5-6.5 6.5-6.5c.3-.3.3-.8 0-1.1s-.8-.3-1.1 0l-6.5 6.5z"
        fillRule="evenodd"
      />
    </svg>
  )
}

export default Cross;
