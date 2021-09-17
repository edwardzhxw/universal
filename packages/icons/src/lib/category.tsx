import * as React from 'react';

function Category(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        clipRule="evenodd"
        d="m18.0018 4.49823c.8284 0 1.5.67157 1.5 1.5v5.94317c0 .3978-.1581.7793-.4394 1.0606l-5.8967 5.8967c-.3886.3863-.9142.6031-1.4621.6031s-1.0735-.2168-1.4621-.6031l-.0014-.0013-5.13008-5.1301c-.19282-.1926-.34579-.4214-.45016-.6731-.10437-.2518-.15809-.5217-.15809-.7942 0-.2726.05372-.5424.15809-.7942.10427-.2516.25706-.4801.44964-.6726l5.8882-5.89501c.2813-.28168.6631-.43996 1.0612-.43996zm-4.2857 4.5c0 .71008.5756 1.28567 1.2857 1.28567s1.2857-.57559 1.2857-1.28567-.5756-1.28571-1.2857-1.28571-1.2857.57563-1.2857 1.28571z"
        fill={props.fill || "#d9d9d9"}
        fillRule="evenodd" />
    </svg>
  );
}

export default Category;
