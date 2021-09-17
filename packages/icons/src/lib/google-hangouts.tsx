import * as React from "react"

function GoogleHangouts(props: React.SVGProps<SVGSVGElement>) {
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
        d="M20 10.636C20 5.866 16.189 2 11.497 2 6.804 2 3 5.867 3 10.636c0 4.518 4.051 8.182 8.497 8.182V22C16.66 19.339 20 15.056 20 10.636z"
        fill="#0F9D58"
      />
      <path
        d="M12.168 8.363V12h2.012v2.046c.877 0 1.566-1.137 1.566-2.273v-3.41h-3.578zM7.248 8.363V12h2.013v2.046c.877 0 1.565-1.137 1.565-2.273v-3.41H7.248z"
        fill="#fff"
      />
    </svg>
  )
}

export default GoogleHangouts;
