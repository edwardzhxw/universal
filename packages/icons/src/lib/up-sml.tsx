import * as React from "react"

function UpSml(props: React.SVGProps<SVGSVGElement>) {
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
        d="M7.97 14.53a.75.75 0 001.06 0L12 11.56l2.97 2.97a.75.75 0 101.06-1.06l-3.5-3.5a.75.75 0 00-1.06 0l-3.5 3.5a.75.75 0 000 1.06z"
        fillRule="evenodd"
      />
    </svg>
  )
}

export default UpSml;
