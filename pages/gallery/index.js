import Head from 'next/head';
import Page from '../../components/Page';

export default function Gallery() {
    return (
      <Page>
        <Head>
            <title> Gallery</title>
        </Head>

        <section>
          <h1> This is the gallery </h1>
          <p>Test text and shit.</p>
          <p>Will be pictures one day.</p>
        </section>
    </Page>
    )
}