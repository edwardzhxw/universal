import * as React from "react"

function Delete(props: React.SVGProps<SVGSVGElement>) {
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
        d="M10 1.5a2.75 2.75 0 00-2.75 2.75V5H2a.75.75 0 000 1.5h2.25v15.25c0 .414.336.75.75.75h9a5.75 5.75 0 005.75-5.75V6.5H22A.75.75 0 0022 5h-5.25v-.75A2.75 2.75 0 0014 1.5zM15.25 5v-.75C15.25 3.56 14.69 3 14 3h-4c-.69 0-1.25.56-1.25 1.25V5zm-8 1.5h-1.5V21H14a4.25 4.25 0 004.25-4.25V6.5h-1.5z"
        fillRule="evenodd"
      />
    </svg>
  )
}

export default Delete;
