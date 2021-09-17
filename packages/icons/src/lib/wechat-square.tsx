import * as React from "react"

function WeChatSquare(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        x={3}
        y={3}
        width={18}
        height={18}
        rx={4}
        fill="url(#prefix__paint0_linear)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.452 7c-2.59 0-4.689 1.75-4.689 3.908 0 1.178.632 2.237 1.62 2.953.08.057.132.15.132.255l-.017.1-.211.788-.025.114c0 .087.07.156.156.156l.09-.029 1.027-.592a.493.493 0 01.249-.073l.137.02c.48.139.996.216 1.531.216l.258-.007a3.004 3.004 0 01-.157-.957c0-1.968 1.914-3.564 4.276-3.564l.255.006C14.73 8.428 12.792 7 10.452 7zM8.89 10.282a.626.626 0 110-1.25.626.626 0 010 1.25zm3.127 0a.625.625 0 110-1.25.625.625 0 010 1.25z"
        fill="#fff"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.387 16.312c.823-.596 1.35-1.48 1.35-2.46 0-1.799-1.75-3.257-3.908-3.257s-3.907 1.458-3.907 3.256c0 1.799 1.749 3.257 3.907 3.257a4.64 4.64 0 001.276-.179l.114-.017c.075 0 .144.023.208.06l.855.494.076.024a.13.13 0 00.13-.13l-.021-.095-.176-.657-.014-.083a.26.26 0 01.11-.213zm-3.861-2.982a.52.52 0 110-1.04.52.52 0 010 1.04zm2.605 0a.52.52 0 110-1.04.52.52 0 010 1.04z"
        fill="#fff"
      />
      <defs>
        <linearGradient
          id="prefix__paint0_linear"
          x1={12}
          y1={3}
          x2={12}
          y2={21}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#02E26E" />
          <stop offset={1} stopColor="#05CE66" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default WeChatSquare;
