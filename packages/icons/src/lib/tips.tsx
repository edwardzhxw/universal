import * as React from "react"

function Tips(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      height={24}
      viewBox="0 0 24 24"
      width={24}
      xmlns="http://www.w3.org/2000/svg"
      fill="#333"
      {...props}
    >
      <g clipRule="evenodd" fillRule="evenodd">
        <path d="M12 2.75a9.25 9.25 0 100 18.5 9.25 9.25 0 000-18.5zM1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75 1.25 17.937 1.25 12z" />
        <path d="M11.25 13a.75.75 0 001.5 0V8a.75.75 0 00-1.5 0zm0 3a.75.75 0 001.5 0v-.5a.75.75 0 00-1.5 0z" />
      </g>
    </svg>
  )
}

export default Tips;
