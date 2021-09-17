import * as React from "react"

function CouponS(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="#d9d9d9"
      height={24}
      viewBox="0 0 24 24"
      width={24}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        clipRule="evenodd"
        d="M5 8.79C5 7.803 5.802 7 6.79 7h10.42c.988 0 1.79.802 1.79 1.79v1.987a.488.488 0 01-.585.478 1.14 1.14 0 100 2.233.489.489 0 01.585.48v1.985a1.79 1.79 0 01-1.79 1.791H6.79A1.79 1.79 0 015 15.954v-1.987a.488.488 0 01.586-.478 1.14 1.14 0 100-2.233.489.489 0 01-.586-.48zm5.535-.325a.488.488 0 00-.977 0v1.302a.488.488 0 10.977 0zm0 3.256a.488.488 0 00-.977 0v1.302a.488.488 0 10.977 0zm-.488 2.768c.27 0 .488.218.488.488v1.302a.488.488 0 01-.977 0v-1.302c0-.27.219-.489.489-.489z"
        fillRule="evenodd"
      />
    </svg>
  )
}

export default CouponS