import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import React, { useState } from 'react';

const OnImgErrorHOC = ({
    width,
    height,
    src,
    defaultSrc,
    className,
    defaultClassName,
    onClick,
    priority = false,
}: {
    width: number;
    height: number;
    src: string | StaticImport;
    defaultSrc: string | StaticImport;
    className?: string;
    defaultClassName?: string;
    onClick?: () => void;
    priority?: boolean;
}) => {
    const [isImgError, setIsImgError] = useState(false);

    return (
        <>
            {!isImgError && (
                <Image
                    className={className}
                    src={src}
                    alt=""
                    onError={() => setIsImgError(true)}
                    width={width}
                    height={height}
                    onClick={onClick}
                    priority={priority}
                />
            )}

            {isImgError && <Image src={defaultSrc} className={defaultClassName} alt="" width={width} height={height} />}
        </>
    );
};

export default OnImgErrorHOC;
