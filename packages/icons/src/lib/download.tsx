import * as React from "react"

function Download(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="none"
      height={24}
      viewBox="0 0 24 24"
      width={24}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g
        fill={props.fill || "#333"} fillRule="evenodd"
        clipRule="evenodd">
        <path
          d="m12.4802 17.5762c-.2782.2317-.6822.2317-.9603 0l-7-5.8334c-.3182-.2651-.3612-.7381-.09602-1.0563.26517-.3182.73809-.3612 1.0563-.096l5.76982 4.8082v-12.3987c0-.41421.3358-.75.75-.75.4143 0 .75.33579.75.75v12.3987l5.7699-4.8082c.3182-.2652.7911-.2222 1.0563.096s.2222.7912-.096 1.0563z" />
        <path
          d="m4.25 19.5c0-.4142.33579-.75.75-.75h14c.4142 0 .75.3358.75.75s-.3358.75-.75.75h-14c-.41421 0-.75-.3358-.75-.75z" />
      </g>
    </svg>
  )
}

export default Download;
