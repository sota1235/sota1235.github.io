import { ImageResponse } from '@vercel/og'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { colors } from '../consts/colors'

export async function getOgpResponse({ title }: { title: string }) {
  const fontsDir = join(process.cwd(), 'src/assets/fonts')
  const notoSansRegularFontData = await readFile(
    join(fontsDir, 'NotoSansJP-Regular.woff')
  )
  const notoSansBoldFontData = await readFile(
    join(fontsDir, 'NotoSansJP-ExtraBold.woff')
  )

  return new ImageResponse(
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
          color: colors.black,
          fontSize: '3rem',
        }}
      >
        {title}
      </p>
      <p
        style={{
          fontWeight: 300,
          fontSize: '2.5rem',
          color: colors.black_hover,
        }}
      >
        sota1235.com
      </p>
    </div>,
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
