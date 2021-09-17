import * as React from "react"

function Successful(props: React.SVGProps<SVGSVGElement>) {
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
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm4.87-11.988a.75.75 0 10-1.06-1.06l-4.813 4.813-2.127-2.127a.75.75 0 10-1.06 1.06l2.657 2.658a.75.75 0 001.06 0l5.343-5.344z"
        fill={props.fill || "#0DE298"}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.87 8.952a.75.75 0 010 1.06l-5.343 5.344a.75.75 0 01-1.06 0L7.81 12.699a.75.75 0 011.06-1.06l2.127 2.126 4.813-4.813a.75.75 0 011.06 0z"
        fill="#fff"
      />
    </svg>
  )
}

export default Successful;
