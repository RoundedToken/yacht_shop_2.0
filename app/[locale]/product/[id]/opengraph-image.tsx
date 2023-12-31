/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from 'next/server';
import { TLang } from '../../../../models/types/TLang';
import { getProduct } from '../../../../services/getProduct';

// Route segment config
export const runtime = 'edge';

// Image metadata
export const size = {
    width: 1200,
    height: 630,
};

export const contentType = 'image/png';

// Image generation
export default async function Image({ params: { id, locale } }: { params: { id: number; locale: TLang } }) {
    // Font
    const nunitoExtraBold = await fetch(new URL('../../Nunito-ExtraBold.ttf', import.meta.url)).then((res) =>
        res.arrayBuffer(),
    );
    const product = await getProduct({ lang: locale, id });

    return new ImageResponse(
        (
            // ImageResponse JSX element
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    width: '100%',
                    height: '100%',
                    fontSize: 64,
                    color: 'rgb(2, 32, 128)',
                    fontWeight: 800,
                    backgroundColor: 'rgb(211, 240, 243)',
                    paddingLeft: 40,
                    paddingRight: 57,
                    paddingTop: 150,
                    position: 'relative',
                }}
            >
                <img
                    style={{ position: 'absolute', top: '20px', left: '20px' }}
                    src={`${process.env.URL}/_next/image?url=%2Fassets%2Fimages%2FOG_logo.png&w=256&q=75`}
                    alt=""
                    width={256}
                />

                <div style={{ display: 'flex', gap: 40 }}>
                    <div
                        style={{
                            borderRadius: '100%',
                            boxShadow: '5px 5px 5px 5px rgba(163, 185, 188, 0.659)',
                            width: 400,
                            height: 400,
                            overflow: 'hidden',
                            display: 'flex',
                        }}
                    >
                        <img
                            style={{
                                backgroundImage: `url("${process.env.URL}/assets/images/defaultProductOG.png")`,
                                width: '100%',
                                height: '100%',
                                objectFit: 'contain',
                            }}
                            src={product.og_src[0]}
                            alt=""
                            width={400}
                            height={400}
                        />
                    </div>
                    <div style={{ maxWidth: 680, textShadow: '2px 2px 2px rgba(2, 40, 163, 0.782)' }}>
                        {product.name}
                    </div>
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
