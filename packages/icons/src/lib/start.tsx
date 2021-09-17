import * as React from "react"

function Start(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="#333" {...props}>
      <path
        d="M8.555 5.036A1 1 0 007 5.87V18.13a1 1 0 001.555.832l9.197-6.13a1 1 0 000-1.665L8.555 5.036z"
      />
    </svg>
  )
}

export default Start;
