import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html>
          <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={"true"}/>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Comfortaa:wght@300;400;500;600;700&display=swap" />
          </Head>
          <body className="font-body bg-body">
            <Main />
            <NextScript />
          </body>
        </Html>)
}