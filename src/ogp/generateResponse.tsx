import { ImageResponse } from '@vercel/og';
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../tailwind.config.mjs'
import { readFile } from 'node:fs/promises';

const { theme } = resolveConfig(tailwindConfig)

const notoSansBoldFont = () => {
  const url = new URL('../../public/fonts/NotoSansJP-ExtraBold.woff', import.meta.url);
  return readFile(url)
};

export async function getOgpResponse({ title }: { title: string }) {
  const notoSansBoldFontData = await notoSansBoldFont();

  return new ImageResponse(
    (
      <div style={{
        fontSize: '3rem',
        fontFamily: 'Noto Sans JP',
        color: theme.colors.black,
        background: "white",
        width: "100%",
        height: "100%",
        display: "flex",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
      }}>
        <span lang="ja-JP">
          {title}
        </span>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'Noto Sans JP',
          data: notoSansBoldFontData,
        }
      ],
    }
  ) as Response
}
