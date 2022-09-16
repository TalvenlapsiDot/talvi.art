import Head from 'next/head';
import Image from 'next/future/image';
import Page from '../../components/Page';
import { getAllGalleryFilenames } from '../../lib/images';
import Modal from 'react-modal'
import React, { useState } from 'react';
import styles from '../../styles/Home.module.css'

export async function getStaticProps({ params }) {
  const images = getAllGalleryFilenames();
  return {
    props: {
      images,
    },
  };
}

const css = { objectFit: 'contain', borderRadius: '10%'};

export default function Gallery({images}) {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal(image) {
    setImageURL(image);
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  const [imageURL, setImageURL] = useState('')

  const imageDisplay = images.map((images) => (
    <span key={images.params.file} className={styles.galleryImage}>
      <a onClick={() => openModal(images.params.file)}>
      <Image
        fill
        style={css}
        src={`/gallery/${images.params.file}`}
        alt="Artwork" />
        </a>
    </span>
  ))

    return (
      <Page>
        <Head>
            <title> Gallery</title>
        </Head>
        <section>
        <h2> <ins>Gallery</ins></h2>
          <p>The gallery offers a general overview of my most favourite art pieces I have done to date.</p>
          <p>The art also includes some NSFW pieces, although only the more tasteful ones. (Only tasteful nudity at worst.)</p>
          <div className={styles.gallery}>
          {imageDisplay}
          <Modal
            className={styles.modal}
            overlayClassName={styles.overlay}
            ariaHideApp={false}
            isOpen={modalIsOpen}
            closeTimeoutMS={100}
            onRequestClose={closeModal}>

          <button onClick={closeModal} className={styles.button}>X</button>
          <Image
            fill
            style={css}
            src={`/gallery/${imageURL}`}
            alt="Artwork" />

            </Modal>
          </div>
        </section>
    </Page>
    )
}

