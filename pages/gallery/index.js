import Head from 'next/head';
import Image from 'next/future/image';
import Page from '../../components/Page';
import { getAllGalleryFilenames } from '../../lib/images';
import styles from '../../styles/Home.module.css'

export async function getStaticProps({ params }) {
  const images = getAllGalleryFilenames();
  return {
    props: {
      images,
    },
  };
}

const css = { objectFit: 'contain'};

export default function Gallery({ images }) {
  const imageDisplay = images.map((images) => (
    <span key={images.params.file} className={styles.galleryImage}>
      <Image
        fill
        style={css}
        src={`/gallery/${images.params.file}`}
        alt="Artwork" />
    </span>
  ))

    return (
      <Page>
        <Head>
            <title> Gallery</title>
        </Head>
        <section>
          <h1> This is the gallery </h1>
          <p>Test text and stuff</p>
          <div className={styles.gallery}>
            {imageDisplay}
          </div>
        </section>
    </Page>
    )
}

