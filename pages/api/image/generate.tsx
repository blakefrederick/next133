import { ImageResponse } from "next/server"

export const config = {
    runtime: "edge",
}

export default function handler() {
    const rand = parseInt(Math.random() * 10000 + '').toString().split('').reverse().join('') + parseInt(Math.random() * 10000 + '')
    return new ImageResponse(
        (
            <div
            style={{
                display: 'flex',
                height: '100%',
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                backgroundImage: 'linear-gradient(to bottom, #dbf4ff, #fff1f1)',
                fontSize: 40,
                letterSpacing: -2,
                fontWeight: 700,
                textAlign: 'center',
            }}
            >
                <div
                    style={{
                    backgroundImage: 'linear-gradient(90deg, rgb(121, 40, 202), rgb(255, 0, 128))',
                    backgroundClip: 'text',
                    '-webkit-background-clip': 'text',
                    color: 'transparent',
                    }}
                >
                    Next.js 13.3 generated image
                </div>
                <div
                    style={{
                    backgroundImage: 'linear-gradient(90deg, rgb(255, 77, 77), rgb(249, 203, 40))',
                    backgroundClip: 'text',
                    '-webkit-background-clip': 'text',
                    color: 'transparent',
                    fontSize: 30,
                    }}
                >
                    {rand}
                </div>
            </div>
        ),
        {
          width: 900,
          height: 600,
        },
      );
}
