# [YachtShop 2.0](https://uus.yachtshop.ee/)

## Description

The goal of the project is to migrate the [YachtShop](https://github.com/RoundedToken/yacht_shop) project to the Next production framework with maximum from Next API's to improve performance, SEO, and also integrate analytics

## Technologies

### Full-stack 

<p>
<img background-color='#ECD53F' width='64' src='https://github.com/RoundedToken/yacht_shop_admin/assets/117864556/b3ae4356-16be-454d-97dd-1d5d30f49413'/>
&emsp;
<img background-color='#ECD53F' width='64' src='https://github.com/RoundedToken/ticketSearch/assets/117864556/fb446c3b-df86-4093-9128-5a2935970d7b'/>
&emsp;
<img background-color='#ECD53F' width='64' src='https://user-images.githubusercontent.com/117864556/231853059-42dbeb92-46e5-464c-96fb-1f96c318f2b3.svg'/>
&emsp;
<img background-color='#ECD53F' width='64' src='https://github.com/RoundedToken/yacht_shop_2.0/assets/117864556/7757e5e0-9d25-44f5-b8ff-c1e604393592'/>
&emsp;
<img background-color='#ECD53F' width='64' src='https://user-images.githubusercontent.com/117864556/231822337-e7f5ac40-8640-4be1-b23a-d43fd642262c.svg'/>
&emsp;
<img background-color='#ECD53F' width='64' src='https://user-images.githubusercontent.com/117864556/231822633-2a95fe34-3182-4ab9-8025-2c78027190a8.svg'/>
&emsp;
<img background-color='#ECD53F' width='64' src='https://user-images.githubusercontent.com/117864556/231823330-a690159b-92b3-4127-a6f2-52ef8356371e.svg'/>

### DevOps stack
<p>
<img background-color='#ECD53F' width='64' src='https://github.com/RoundedToken/yacht_shop/assets/117864556/9d33c06d-9eec-402f-b901-df0678630a27'/>
&emsp;
<img background-color='#ECD53F' width='64' src='https://github.com/RoundedToken/yacht_shop/assets/117864556/aeaebabf-088b-4abe-bf5f-e11881ca983c'/>
&emsp;
<img background-color='#ECD53F' width='64' src='https://github.com/RoundedToken/yacht_shop/assets/117864556/cfb831eb-8c68-49b2-bbb9-c880f74c3850'/>

## About the work done

### SEO
- **Metadata**: added all required meta fields using `Next.js metadata API`: title template, description, icons, themeColor, manifest, viewport, alternates (i18n), category, and basic fields (generator, applicationName, referrer, keywords, authors, colorScheme, creator, publisher)
- **Social**: implemented `OpenGraph` and Twitter metadata with `ImageResponse API` (considering i18n)
- **Robots**: `robots.txt`, `static sitemap`, `dynamic sitemap` (considering i18n)

### Analytics
Deployed `self-hosted Matomo Analytics` on own server and configured all necessary tracking events in the app

### Perfomance optimization
- **Ngnix**: enabled `HTTP/2`, `gzip compression`, and `static file caching support`.
- **Assets**: applied `Next.js <Image/> component` and `next-gen .webp image format` for image optimization, Next.js also optimizes fonts
- **Bundles**: Next.js splits large bundles into smaller chunks to reduce unused code on the page and diminishes resources blocking input
- **Components**: refactored to move maximum content rendering to the server side to leverage maximum benefits of `Next.js server components`, as well as maximize usage of `SSG for in build time generation`
- **Caching**: integrated `Redis` for caching the central recursive request with heavy computations

### i18n
Refactored `custom internationalization` using the `next-international library` with full typing support for better scalability and configurability of the project, as well as to enable `internationalization in SEO`

## Routes and Lighthouse reports
<img src="https://github.com/RoundedToken/yacht_shop_2.0/assets/117864556/4f6f598f-bad2-4dee-94f3-99f50cb2b389" />


