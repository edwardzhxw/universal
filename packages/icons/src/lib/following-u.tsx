import * as React from "react"

function FollowingU(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="#333"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.25 6a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5zM7.5 8.25a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM6.648 15.959c-.83.808-1.148 1.85-1.148 2.791a.75.75 0 01-1.5 0c0-1.268.431-2.726 1.602-3.866C6.777 13.74 8.61 13 11.25 13c1.255 0 2.327.166 3.235.466a.75.75 0 11-.47 1.424c-.732-.24-1.642-.39-2.765-.39-2.36 0-3.777.656-4.602 1.459zM19.308 16.567a.625.625 0 00-.884-.884l-2.42 2.42-1.012-1.011a.625.625 0 10-.884.884l1.415 1.414c.12.12.276.18.433.183a.624.624 0 00.524-.178l2.828-2.828z"
      />
    </svg>
  )
}

export default FollowingU;
