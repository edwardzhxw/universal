import * as React from "react"

function StarN(props: React.SVGProps<SVGSVGElement>) {
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
        d="M11.315 3.639a.8.8 0 011.37 0l2.596 4.314a.8.8 0 00.505.366l4.905 1.136a.8.8 0 01.424 1.304l-3.3 3.802a.8.8 0 00-.193.594l.435 5.015a.8.8 0 01-1.11.806l-4.635-1.964a.8.8 0 00-.624 0l-4.636 1.964a.8.8 0 01-1.109-.806l.435-5.015a.8.8 0 00-.192-.594l-3.3-3.802a.8.8 0 01.423-1.304L8.214 8.32a.8.8 0 00.505-.366z"
      />
    </svg>
  )
}

export default StarN;
