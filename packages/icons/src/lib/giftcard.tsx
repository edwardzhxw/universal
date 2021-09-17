import * as React from "react"

function Giftcard(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="none"
      height={24}
      viewBox="0 0 24 24"
      width={24}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        clipRule="evenodd"
        d="M5 2.75A2.75 2.75 0 002.25 5.5v15c0 .414.336.75.75.75h13a5.75 5.75 0 005.75-5.75v-10A2.75 2.75 0 0019 2.75zM3.75 5.5c0-.69.56-1.25 1.25-1.25h14c.69 0 1.25.56 1.25 1.25v10A4.25 4.25 0 0116 19.75H3.75zm9.79 3.13a2.41 2.41 0 00-1.54.556 2.41 2.41 0 00-3.244 3.56l.33.33 2.419 2.418a.7.7 0 00.99 0l2.749-2.749a2.412 2.412 0 00-1.705-4.115zm-.388 1.477a1.01 1.01 0 011.102 1.648L12 14.01l-2.254-2.254a1.01 1.01 0 111.43-1.429l.329.33a.7.7 0 00.99 0l.33-.33a1.01 1.01 0 01.327-.219z"
        fill={props.fill || "#333"}
        fillRule="evenodd"
      />
    </svg>
  )
}

export default Giftcard;
