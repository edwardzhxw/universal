import * as React from "react"

function Schedule(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      height={24}
      viewBox="0 0 24 24"
      width={24}
      xmlns="http://www.w3.org/2000/svg"
      fill="#333"
      {...props}
    >
      <g clipRule="evenodd" fillRule="evenodd">
        <path d="M16 1.75a.75.75 0 01.75.75v.75H19A2.75 2.75 0 0121.75 6v10A5.75 5.75 0 0116 21.75H3a.75.75 0 01-.75-.75V6A2.75 2.75 0 015 3.25h2.25V2.5a.75.75 0 011.5 0v.75h6.5V2.5a.75.75 0 01.75-.75zm-8.75 3v.75a.75.75 0 001.5 0v-.75h6.5v.75a.75.75 0 001.5 0v-.75H19c.69 0 1.25.56 1.25 1.25v2.75H3.75V6c0-.69.56-1.25 1.25-1.25zm-3.5 5.5h16.5V16A4.25 4.25 0 0116 20.25H3.75z" />
        <path d="M12.75 13.068c0-.452-.336-.818-.75-.818s-.75.366-.75.818V14.5H9.818c-.452 0-.818.336-.818.75s.366.75.818.75h1.432v1.432c0 .452.336.818.75.818s.75-.366.75-.818V16h1.432c.452 0 .818-.336.818-.75s-.366-.75-.818-.75H12.75z" />
      </g>
    </svg>
  )
}

export default Schedule;
