import * as React from "react";

function Volume(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="#333" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        clipRule="evenodd"
        d="m19.0304 4.3998c-.2928-.29293-.7677-.29301-1.0607-.00016-.2929.29285-.293.76773-.0001 1.06066 1.744 1.74454 2.7804 4.10056 2.7804 6.5398 0 2.4391-1.0364 4.7952-2.7804 6.5397-.2929.2929-.2928.7678.0001 1.0607.293.2928.7679.2927 1.0607-.0002 2.0054-2.006 3.2196-4.7362 3.2196-7.6002 0-2.86414-1.2142-5.59428-3.2196-7.6003zm-3 3.53c-.2928-.29293-.7677-.29301-1.0606-.00016-.293.29285-.2931.76773-.0002 1.06066.7967.797 1.2443 1.8778 1.2443 3.0048 0 1.1269-.4476 2.2077-1.2443 3.0047-.2929.2929-.2928.7678.0002 1.0607.2929.2928.7678.2927 1.0606-.0002 1.078-1.0783 1.6835-2.5406 1.6835-4.0652 0-1.5247-.6055-2.98701-1.6835-4.0653zm-3.7804-2.92979c0-.28831-.1653-.55109-.4251-.67598-.2599-.12489-.5683-.08978-.7934.09033l-4.79459 3.83565h-3.73691c-.41421 0-.75.33578-.75.75v5.99999c0 .4142.33579.75.75.75h3.73691l4.79459 3.8357c.2251.1801.5335.2152.7934.0903.2598-.1249.4251-.3877.4251-.676zm-5.28148 4.58565 3.78148-3.02518v10.87902l-3.78148-3.0251c-.13298-.1064-.29822-.1644-.46852-.1644h-3.25v-4.49999h3.25c.1703 0 .33554-.05796.46852-.16435z"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default Volume;