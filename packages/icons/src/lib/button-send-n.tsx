import * as React from "react"

function ButtonSendN(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="none"
      height={32}
      viewBox="0 0 32 32"
      width={32}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect fill="#d9d9d9" height={32} rx={16} width={32} />
      <path
        clipRule="evenodd"
        d="M15.47 9.47a.75.75 0 011.06 0l4.8 4.8a.75.75 0 11-1.06 1.06l-3.52-3.52V22a.75.75 0 01-1.5 0V11.81l-3.52 3.52a.75.75 0 11-1.06-1.06z"
        fill="#fff"
        fillRule="evenodd"
      />
    </svg>
  )
}

export default ButtonSendN;
