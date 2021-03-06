import * as React from "react"

function Fileimg(props: React.SVGProps<SVGSVGElement>) {
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
        d="M4.75 3.5c-.69 0-1.25.56-1.25 1.25v11.767H5v-6.205a2.75 2.75 0 012.75-2.75h7.82a.75.75 0 010 1.5H7.75c-.69 0-1.25.56-1.25 1.25v4.729l1.575-1.576a2.75 2.75 0 013.89 0l6.409 6.41a4.236 4.236 0 001.143-2.9v-3.326a.75.75 0 111.5 0v3.326a5.75 5.75 0 01-5.75 5.75H5.75a.75.75 0 01-.75-.75v-3.958H2.75a.75.75 0 01-.75-.75V4.75A2.75 2.75 0 014.75 2h4.615c.92 0 1.778.46 2.288 1.225l.85 1.275h2.868a.75.75 0 010 1.5h-3.269a.75.75 0 01-.624-.334l-1.073-1.61a1.25 1.25 0 00-1.04-.556zm12.409 17.281l-6.255-6.255a1.25 1.25 0 00-1.768 0L6.5 17.162v4.063h8.767c.68 0 1.322-.16 1.892-.444zm.546-12.47c0-.353.313-.64.699-.64h1.222V6.45c0-.386.287-.699.64-.699s.641.313.641.699V7.67h1.223c.386 0 .699.287.699.64s-.313.641-.7.641h-1.222v1.223c0 .386-.287.699-.64.699s-.64-.313-.64-.7V8.953h-1.223c-.386 0-.699-.286-.699-.64z"
        fillRule="evenodd"
      />
    </svg>
  )
}

export default Fileimg;
