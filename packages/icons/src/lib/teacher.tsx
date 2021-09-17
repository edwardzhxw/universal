import * as React from "react"

function Teacher(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      height={24}
      viewBox="0 0 24 24"
      width={24}
      xmlns="http://www.w3.org/2000/svg"
      fill="#333"
      {...props}
    >
      <clipPath id="prefix__a">
        <path d="M0 0h24v24H0z" />
      </clipPath>
      <g clipPath="url(#prefix__a)">
        <path
          clipRule="evenodd"
          d="M1.44 7.564c-1.211.686-1.176 2.441.06 3.078l2.75 1.417v5.008a2.75 2.75 0 001.598 2.496l3.323 1.534a6.75 6.75 0 005.658 0l3.323-1.534a2.75 2.75 0 001.598-2.497v-4.751l2.518-1.152c1.278-.585 1.38-2.363.176-3.09l-8.229-4.966a4.75 4.75 0 00-4.796-.066zm16.81 5.438l-4.346 1.988a4.75 4.75 0 01-4.152-.097L5.75 12.832v4.236c0 .487.284.93.726 1.135L9.8 19.736a5.25 5.25 0 004.4 0l3.324-1.534a1.25 1.25 0 00.726-1.135zM2.188 9.309a.25.25 0 01-.01-.44l7.98-4.523a3.25 3.25 0 013.282.045l8.229 4.966a.25.25 0 01-.025.442l-8.364 3.827a3.25 3.25 0 01-2.84-.066z"
          fillRule="evenodd"
        />
      </g>
    </svg>
  )
}

export default Teacher;
