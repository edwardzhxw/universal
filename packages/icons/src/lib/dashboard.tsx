import * as React from "react"

function Dashboard(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      height={24}
      viewBox="0 0 24 24"
      width={24}
      xmlns="http://www.w3.org/2000/svg"
      fill="#333"
      {...props}
    >
      <path
        clipRule="evenodd"
        d="M2.25 5A2.75 2.75 0 015 2.25h14A2.75 2.75 0 0121.75 5v11A5.75 5.75 0 0116 21.75H3a.75.75 0 01-.75-.75zM5 3.75c-.69 0-1.25.56-1.25 1.25v3.94A.749.749 0 014 8.897h16c.088 0 .172.015.25.043V5c0-.69-.56-1.25-1.25-1.25zm15.25 6.604a.75.75 0 01-.25.043h-9.603V20a.748.748 0 01-.043.25H16A4.25 4.25 0 0020.25 16zm-11.353.043H4a.75.75 0 01-.25-.043v9.896h5.19a.749.749 0 01-.043-.25z"
        fillRule="evenodd"
      />
    </svg>
  )
}

export default Dashboard;
