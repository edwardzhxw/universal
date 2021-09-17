import * as React from "react"

function ButtonCreate(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="none"
      height={32}
      viewBox="0 0 32 32"
      width={32}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx={16} cy={16} fill="#ff554b" r={16} />
      <path
        clipRule="evenodd"
        d="M16 10a.75.75 0 00-.75.75V15h-4.5a.75.75 0 000 1.5h4.5v4.75a.75.75 0 001.5 0V16.5h4.5a.75.75 0 000-1.5h-4.5v-4.25A.75.75 0 0016 10z"
        fill="#fff"
        fillRule="evenodd"
      />
    </svg>
  )
}

export default ButtonCreate;
