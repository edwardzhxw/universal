import * as React from "react"

function File(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="#333333" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path fillRule="evenodd" clipRule="evenodd"
        d="M3.75 6C3.75 5.30964 4.30964 4.75 5 4.75H10.9296C11.3476 4.75 11.7379 4.95888 11.9697 5.30662L13.376 7.41603C13.5151 7.62467 13.7492 7.75 14 7.75H19C19.6904 7.75 20.25 8.30964 20.25 9V16C20.25 18.3472 18.3472 20.25 16 20.25H3.75V6ZM5 3.25C3.48122 3.25 2.25 4.48122 2.25 6V21C2.25 21.4142 2.58579 21.75 3 21.75H16C19.1756 21.75 21.75 19.1756 21.75 16V9C21.75 7.48122 20.5188 6.25 19 6.25H14.4014L13.2178 4.47457C12.7077 3.70953 11.8491 3.25 10.9296 3.25H5ZM11.9999 11.25C12.4142 11.25 12.7499 11.5858 12.7499 12V13H13.75C14.1642 13 14.5 13.3357 14.5 13.75C14.5 14.1642 14.1642 14.5 13.75 14.5H12.7499V15.5C12.7499 15.9142 12.4142 16.25 11.9999 16.25C11.5857 16.25 11.2499 15.9142 11.2499 15.5V14.5H10.25C9.83579 14.5 9.5 14.1642 9.5 13.75C9.5 13.3357 9.83579 13 10.25 13H11.2499V12C11.2499 11.5858 11.5857 11.25 11.9999 11.25Z"
      />
    </svg>
  )
}

export default File;
