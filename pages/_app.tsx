import '../styles/globals.css'
import type { AppProps } from 'next/app'
// @ts-ignore
import Airtable from 'airtable'
import Layout from '../components/Layout'
import {Comfortaa, Alfa_Slab_One} from '@next/font/google';

const comfortaa = Comfortaa();
const alfaSlabOne = Alfa_Slab_One({weight: "400", subsets: ["latin"]});

export default function App({ Component, pageProps }: AppProps) {
  return (
  <Layout>
    <style jsx global>{`
        .font-body {
          font-family: ${comfortaa.style.fontFamily};
        }
        .font-display {
            font-family: ${alfaSlabOne.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
  </Layout>
  )
}

Airtable.configure({
  apiKey:
    'patbZAXIowU4v3EAY.3689eccb133dbab1208d3c53ff7de659596c2d5e27d3fa9df4cc17da3af36783',
})
const baseId = 'app5UijqPM7BKyqS5'
