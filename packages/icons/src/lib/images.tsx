import * as React from 'react';

function Image(props: React.SVGProps<SVGSVGElement>) {
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
        d="M21 2.318c0-.452-.336-.818-.75-.818s-.75.366-.75.818V3.75h-1.432c-.452 0-.818.336-.818.75s.366.75.818.75H19.5v1.432c0 .452.336.818.75.818s.75-.366.75-.818V5.25h1.432c.452 0 .818-.336.818-.75s-.366-.75-.818-.75H21zM4 6.5c0-.69.56-1.25 1.25-1.25h9.5a.75.75 0 000-1.5h-9.5A2.75 2.75 0 002.5 6.5v14c0 .414.336.75.75.75h12A5.75 5.75 0 0021 15.5v-4.75a.75.75 0 00-1.5 0v4.75a4.236 4.236 0 01-1.215 2.975l-8.09-8.091a2.75 2.75 0 00-3.89 0L4 12.689zm0 8.31v4.94h11.25c.64 0 1.249-.142 1.794-.396l-7.91-7.91a1.25 1.25 0 00-1.768 0z"
        fillRule="evenodd"
      />
    </svg>
  )
}

export default Image;
