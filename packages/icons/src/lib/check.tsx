import * as React from 'react';

function Check(props: React.SVGProps<SVGSVGElement>) {
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
        <path d="M12 2.75a9.25 9.25 0 100 18.5 9.25 9.25 0 000-18.5zM1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75 1.25 17.937 1.25 12z" />
        <path d="M16.87 8.952a.75.75 0 010 1.06l-5.343 5.344a.75.75 0 01-1.06 0L7.81 12.699a.75.75 0 011.06-1.06l2.127 2.126 4.813-4.813a.75.75 0 011.06 0z" />
      </g>
    </svg>
  );
}

export default Check;
