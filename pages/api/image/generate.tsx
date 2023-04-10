import { ImageResponse } from "next/server"

export const config = {
    runtime: "edge",
}

export default function handler() {
    return new ImageResponse(
        (
          <div
            style={{
              fontSize: 34,
              background: 'blue',
              color: 'white',
              width: '100%',
              height: '100%',
              display: 'flex',
              textAlign: 'center',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            Next.js 13.3 generated image! -&nbsp;&nbsp;
            <span>ID {parseInt(Math.random() * 10000 + '').toString().split('').reverse().join('') + parseInt(Math.random() * 10000 + '')}</span>
          </div>
        ),
        {
          width: 1200,
          height: 600,
        },
      );
}
