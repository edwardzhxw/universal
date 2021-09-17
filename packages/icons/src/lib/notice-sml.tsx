import * as React from "react"

function NoticeSml(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      height={24}
      viewBox="0 0 24 24"
      width={24}
      xmlns="http://www.w3.org/2000/svg"
      fill="#d9d9d9"
      {...props}
    >
      <path
        d="M13.282 7.476v9.2c0 .73-.262 1.324-.993 1.324-.275 0-.545-.085-.77-.246l-2.87-2.4H5.661A.663.663 0 015 14.69V9.396a.66.66 0 01.661-.661h2.986l2.872-2.337c.595-.425 1.224-.619 1.648-.023.16.225.115.826.115 1.101z"
      />
      <g
        stroke={props.fill || "#d9d9d9"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.3}
      >
        <path d="M17 12h2M16.134 9l1.732-1M16.134 15l1.732 1" />
      </g>
    </svg>
  )
}

export default NoticeSml;
