import * as React from "react"

function Twitter(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={40}
      height={40}
      viewBox="0 0 32 32"
      fill="#4DA0EC"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <circle cx="16" cy="16" r="15" fill="white"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M24.3424 13.12C24.576 18.3072 20.7072 24.0917 13.8592 24.0917C11.7771 24.0917 9.83787 23.4805 8.2048 22.4341C10.1621 22.6656 12.1152 22.1227 13.6661 20.9077C12.0523 20.8768 10.6891 19.8112 10.2208 18.3445C10.7979 18.4555 11.3664 18.4245 11.8859 18.2827C10.112 17.9264 8.88853 16.3285 8.928 14.6187C9.42507 14.8949 9.9936 15.0613 10.5984 15.0805C8.95573 13.984 8.49173 11.8133 9.45707 10.1568C11.2757 12.3872 13.9936 13.856 17.0592 14.0096C16.5216 11.7035 18.272 9.4816 20.6517 9.4816C21.7131 9.4816 22.672 9.9296 23.344 10.6464C24.1845 10.48 24.9739 10.1728 25.6864 9.7504C25.4112 10.6123 24.8256 11.3355 24.0651 11.7909C24.8096 11.7024 25.5211 11.5029 26.1835 11.2107C25.6896 11.9499 25.0635 12.6005 24.3424 13.12ZM16 0C7.16373 0 0 7.16373 0 16C0 24.8363 7.16373 32 16 32C24.8363 32 32 24.8363 32 16C32 7.16373 24.8363 0 16 0Z"/>
    </svg>
  )
}

export default Twitter;
