import * as React from "react"

function ButtonAudio(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="none"
      height={32}
      viewBox="0 0 32 32"
      width={32}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect fill="#ff554b" height={32} rx={16} width={32} />
      <g clipRule="evenodd" fill="#fff" fillRule="evenodd">
        <path d="M8.5 14.25a.75.75 0 01.75.75v2a.75.75 0 01-1.5 0v-2a.75.75 0 01.75-.75zM23.5 14.25a.75.75 0 01.75.75v2a.75.75 0 01-1.5 0v-2a.75.75 0 01.75-.75zM11.5 12.25a.75.75 0 01.75.75v6a.75.75 0 01-1.5 0v-6a.75.75 0 01.75-.75zM17.5 12.25a.75.75 0 01.75.75v6a.75.75 0 01-1.5 0v-6a.75.75 0 01.75-.75zM20.5 11.25a.75.75 0 01.75.75v8a.75.75 0 01-1.5 0v-8a.75.75 0 01.75-.75zM14.5 10.25a.75.75 0 01.75.75v10a.75.75 0 01-1.5 0V11a.75.75 0 01.75-.75z" />
      </g>
    </svg>
  )
}

export default ButtonAudio;
