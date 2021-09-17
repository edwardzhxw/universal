import * as React from "react"

function Audio(props: React.SVGProps<SVGSVGElement>) {
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
        d="M15.167 6.667v3.666a3.167 3.167 0 01-6.334 0V6.667a3.167 3.167 0 116.334 0zm-7.834 0a4.667 4.667 0 119.334 0v3.666a4.667 4.667 0 11-9.334 0zM5 9.25a.75.75 0 01.75.75 6.25 6.25 0 1012.5 0 .75.75 0 011.5 0c0 4.01-3.046 7.31-6.951 7.71l.001.04v2.5a.75.75 0 01-1.5 0v-2.5-.031A7.75 7.75 0 014.25 10 .75.75 0 015 9.25z"
        fillRule="evenodd"
      />
    </svg>
  )
}

export default Audio;
