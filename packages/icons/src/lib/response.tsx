import * as React from "react"

function Response(props: React.SVGProps<SVGSVGElement>) {
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
        d="M12 3.75a8.25 8.25 0 00-6.29 13.588c.21.248.332.547.327.878-.004.31-.12.57-.24.765-.221.356-.58.671-.823.885l-.044.04-.019.016c.215.037.47.07.759.101.67.071 1.486.12 2.318.155 1.663.068 3.354.072 4.012.072a8.25 8.25 0 000-16.5zM2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75c-.663 0-2.378-.004-4.073-.074a38.943 38.943 0 01-2.415-.161 12.443 12.443 0 01-.981-.138 3.58 3.58 0 01-.781-.223c-.225-.102-.525-.29-.661-.647-.146-.381-.018-.719.091-.912a2.24 2.24 0 01.384-.474c.117-.115.25-.232.368-.336l.034-.03c.262-.23.437-.395.531-.528A9.713 9.713 0 012.25 12z"
        fillRule="evenodd"
      />
    </svg>
  )
}

export default Response;