import * as React from "react"

function NotificationSml(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="#d9d9d9"
      height={24}
      viewBox="0 0 24 24"
      width={24}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipRule="evenodd" fillRule="evenodd">
        <path d="M17.476 15.482a.442.442 0 00-.142-.487c-.039-.032-.971-.794-.971-2.278v-2.26C16.363 8 14.394 6 11.975 6c-2.42 0-4.388 2-4.388 4.458v2.402c0 1.265-.936 2.147-.945 2.155a.443.443 0 00-.114.482c.065.17.224.28.403.28H17.07c.184 0 .346-.119.406-.295zM9.8 17a2.606 2.606 0 004.4 0z" />
      </g>
    </svg>
  )
}

export default NotificationSml;
