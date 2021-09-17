import * as React from "react"

function User(props: React.SVGProps<SVGSVGElement>) {
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
        d="M8.5 6.25a3.5 3.5 0 117 0 3.5 3.5 0 01-7 0zm3.5-5a5 5 0 100 10 5 5 0 000-10zm-6 11A2.75 2.75 0 003.25 15v7c0 .414.336.75.75.75h12A4.75 4.75 0 0020.75 18v-1A4.75 4.75 0 0016 12.25zM4.75 15c0-.69.56-1.25 1.25-1.25h10A3.25 3.25 0 0119.25 17v1A3.25 3.25 0 0116 21.25H4.75z"
        fillRule="evenodd"
      />
    </svg>
  )
}

export default User;
