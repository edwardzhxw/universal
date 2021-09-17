import * as React from "react"

function Language(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <mask id="a" height="22" maskUnits="userSpaceOnUse" width="22" x="1" y="1">
        <circle cx="12" cy="12" fill="#e9e9eb" r="10.5"/>
      </mask>
      <g stroke="#333" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10"/>
        <g mask="url(#a)">
          <path d="m11.975 15.125c-1.5-1.8227-6.475.6715-9.975 2.1546.6 1.5254 6.25 4.4492 9 5.7204.5-1.6949 2.025-6.5991.975-7.875z"/>
          <path
            d="m16.5895 12.8054c1.0331 1.5497 4.3045.6457 5.8111 0 .2152-.4304.5165-2.1953 0-5.81104-.6457-4.51972-8.3938-5.81107-9.6851-4.51972-1.2914 1.29134-2.0223 5.52954 0 5.81107 3.874.5393 2.8409 2.97009 3.874 4.51969z"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </g>
    </svg>
  )
}

export default Language;
