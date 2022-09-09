import Head from 'next/head';
import Image from 'next/image';
import Page from '../../components/Page';
import { getAllGalleryFilenames } from '../../lib/images';

export async function getStaticProps({ params }) {
  const images = getAllGalleryFilenames();
  return {
    props: {
      images,
    },
  };
}



export default function Gallery({ images }) {
 /* const ImageDisplay =  images.map(function(element) {
    <Image src={images.file}/>
    console.log(element)
  }); */
  const ImageDisplay = () => {
    return (
      images.map((images) => (
        <Image src={images.file} layout="fill"/>
      ))
    )
  }
    return (
      <Page>
        <Head>
            <title> Gallery</title>
        </Head>
        <section>
          <h1> This is the gallery </h1>
          <p>Test text and shit.</p>
          <ImageDisplay />
        </section>
    </Page>
    )
}

