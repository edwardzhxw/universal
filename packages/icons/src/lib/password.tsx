import * as React from "react"

function Password(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      height={24}
      viewBox="0 0 24 24"
      width={24}
      xmlns="http://www.w3.org/2000/svg"
      fill="#d9d9d9"
      {...props}
    >
      <path
        clipRule="evenodd"
        d="M8.25 8.75a3.75 3.75 0 117.5 0v2.5h1.588c.366 0 .662.296.662.662v1.338a6 6 0 01-12 0v-1.338c0-.366.296-.662.662-.662H8.25zm6 0v2.5h-4.5v-2.5a2.25 2.25 0 014.5 0zm-1.5 5.5a.75.75 0 00-1.5 0v1.5a.75.75 0 001.5 0z"
        fillRule="evenodd"
      />
    </svg>
  )
}

export default Password;
