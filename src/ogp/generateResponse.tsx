import { ImageResponse } from '@vercel/og'
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../tailwind.config.mjs'
import { readFile } from 'node:fs/promises'
import type { Config } from 'tailwindcss/types/config'
import { fileURLToPath } from 'node:url'
import { join } from 'node:path'

const { theme } = resolveConfig(tailwindConfig as Config)

function readFileFromRelative(relativePath: string) {
  // FIXME: during building process, import.meta.url will be the path of the file **which imports this file**
  // so this will be easily broken...
  // refs https://github.com/withastro/astro/issues/5438
  return readFile(
    import.meta.env.DEV
      ? join(fileURLToPath(import.meta.url), relativePath)
      : new URL(`../${relativePath}`, import.meta.url)
  )
}

export async function getOgpResponse({ title }: { title: string }) {
  const notoSansRegularFontData = await readFileFromRelative(
    '../../../src/assets/fonts/NotoSansJP-Regular.woff'
  )
  const notoSansBoldFontData = await readFileFromRelative(
    '../../../src/assets/fonts/NotoSansJP-ExtraBold.woff'
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
          color: (theme.colors as any).black_hover, // TODO: fix type
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
