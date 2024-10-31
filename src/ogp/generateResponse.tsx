import { ImageResponse } from '@vercel/og'
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../tailwind.config.mjs'
import { readFile } from 'node:fs/promises'

const { theme } = resolveConfig(tailwindConfig)

const notoSansRegularFont = () => {
  const url = new URL(
    '../../public/fonts/NotoSansJP-Regular.woff',
    import.meta.url
  )
  return readFile(url)
}

const notoSansBoldFont = () => {
  const url = new URL(
    '../../public/fonts/NotoSansJP-ExtraBold.woff',
    import.meta.url
  )
  return readFile(url)
}

export async function getOgpResponse({ title }: { title: string }) {
  const notoSansRegularFontData = await notoSansRegularFont()
  const notoSansBoldFontData = await notoSansBoldFont()

  return new ImageResponse(
    (
      <div
        lang="ja-JP"
        style={{
          fontFamily: 'Noto Sans JP',
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px 10px',
          textAlign: 'center',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <p
          style={{
            fontWeight: 700,
            color: theme.colors.black,
            fontSize: '3rem',
          }}
        >
          {title}
        </p>
        <p
          style={{
            fontWeight: 300,
            fontSize: '2.5rem',
            color: theme.colors.black_hover,
          }}
        >
          sota1235.com
        </p>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'Noto Sans JP',
          data: notoSansRegularFontData,
          weight: 300,
        },
        {
          name: 'Noto Sans JP',
          data: notoSansBoldFontData,
          weight: 700,
        },
      ],
    }
  ) as Response
}
