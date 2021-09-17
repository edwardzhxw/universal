import * as React from "react"

function Error(props: React.SVGProps<SVGSVGElement>) {
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
        d="M19.071 4.929c3.905 3.905 3.905 10.237 0 14.142-3.905 3.905-10.237 3.905-14.142 0-3.905-3.905-3.905-10.237 0-14.142 3.905-3.905 10.237-3.905 14.142 0z"
        fill={props.fill || "#FF4338"}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.357 9.7a.75.75 0 00-1.061-1.061l-2.298 2.298L9.7 8.639a.75.75 0 00-1.06 1.06l2.297 2.299-2.298 2.298a.75.75 0 001.06 1.06l2.299-2.298 2.298 2.299a.75.75 0 101.06-1.061l-2.297-2.298L15.357 9.7z"
        fill="#fff"
      />
    </svg>
  )
}

export default Error;
