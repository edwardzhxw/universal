import * as React from "react"

function Warning(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0-8.25a.75.75 0 01-.75-.75V8a.75.75 0 011.5 0v5a.75.75 0 01-.75.75zm0 3a.75.75 0 01-.75-.75v-.5a.75.75 0 011.5 0v.5a.75.75 0 01-.75.75z"
        fill={props.fill || "#FFC319"}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.25 13a.75.75 0 001.5 0V8a.75.75 0 00-1.5 0v5zm0 3a.75.75 0 001.5 0v-.5a.75.75 0 00-1.5 0v.5z"
        fill="#fff"
      />
    </svg>
  )
}

export default Warning;
