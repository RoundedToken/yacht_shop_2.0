/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from 'next/server';
import { getI18n } from '../../../locales/server';

// Route segment config
export const runtime = 'edge';

// Image metadata
export const size = {
    width: 1200,
    height: 630,
};

export const contentType = 'image/png';

// Image generation
export default async function Image() {
    // Font
    const nunitoExtraBold = await fetch(new URL('../Nunito-ExtraBold.ttf', import.meta.url)).then((res) =>
        res.arrayBuffer(),
    );
    const t = await getI18n();

    return new ImageResponse(
        (
            // ImageResponse JSX element
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    width: '100%',
                    height: '100%',
                    fontSize: 78,
                    color: 'rgb(2, 32, 128)',
                    fontWeight: 800,
                    backgroundColor: 'rgb(211, 240, 243)',
                    paddingLeft: 40,
                    paddingRight: 57,
                    position: 'relative',
                }}
            >
                <img
                    style={{ position: 'absolute', top: '20px', left: '20px' }}
                    src={`${process.env.URL}/_next/image?url=%2Fassets%2Fimages%2FOG_logo.png&w=256&q=75`}
                    alt=""
                    width={256}
                />

                <div style={{ display: 'flex', gap: 40, alignItems: 'center' }}>
                    <img
                        src={`${process.env.URL}/assets/images/contactsOG.jpg`}
                        style={{ borderRadius: '100%', boxShadow: '5px 5px 5px 5px rgba(163, 185, 188, 0.659)' }}
                        alt=""
                        width={400}
                        height={400}
                    />

                    <div style={{ textShadow: '2px 2px 2px rgba(2, 40, 163, 0.782)' }}>{t('contacts')}</div>
                </div>
            </div>
        ),
        // ImageResponse options
        {
            // For convenience, we can re-use the exported opengraph-image
            // size config to also set the ImageResponse's width and height.
            ...size,
            fonts: [
                {
                    name: 'Nunito',
                    data: nunitoExtraBold,
                    style: 'normal',
                    weight: 800,
                },
            ],
        },
    );
}
