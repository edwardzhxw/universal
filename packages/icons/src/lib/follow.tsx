import * as React from "react"

function Follow(props: React.SVGProps<SVGSVGElement>) {
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
        d="M11.25 6a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5zM7.5 8.25a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM6.648 15.959c-.83.808-1.148 1.85-1.148 2.791a.75.75 0 01-1.5 0c0-1.268.431-2.726 1.602-3.866C6.777 13.74 8.61 13 11.25 13c1.255 0 2.327.166 3.235.466a.75.75 0 11-.47 1.424c-.732-.24-1.642-.39-2.765-.39-2.36 0-3.777.656-4.602 1.459zM17.875 15a.625.625 0 10-1.25 0v1.375H15.25a.625.625 0 100 1.25h1.375V19a.625.625 0 101.25 0v-1.375h1.375a.625.625 0 100-1.25h-1.375V15z"
      />
    </svg>
  )
}

export default Follow;
