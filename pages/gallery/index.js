import Head from 'next/head';
import Image from 'next/future/image';
import Page from '../../components/Page';
import { getAllGalleryFilenames } from '../../lib/images';
import Modal from 'react-modal'
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide} from 'swiper/react';
import { Keyboard, Navigation} from 'swiper';

import styles from '../../styles/Home.module.css'
import 'swiper/css/bundle';

export async function getStaticProps({ params }) {
  const images = getAllGalleryFilenames();
  return {
    props: {
      images,
    },
  };
}

const css = { objectFit: 'cover', borderRadius: '10%'};
const openpic = { objectFit: 'contain', borderRadius: '10%'};


export default function Gallery({images}) {
  const [modalIsOpen, setIsOpen] = useState(false);
  const myRef = useRef(null);

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

  const modalDisplay = images.map((images) => (
    <SwiperSlide style={{ height: '80vh' }} key={images.params.file} ref={myRef}>
      <Image
        fill
        style={openpic}
        src={`/gallery/${images.params.file}`}
        alt="Artwork" />
    </SwiperSlide>
  ))
    return (
      <Page>
        <Head>
            <title> Gallery</title>
        </Head>
        <section>
        <h2 align="center">Gallery</h2>
          <p>The gallery offers a general overview of my most favourite art pieces I have done to date.
          <br/>
          Gallery images may include tasteful/artistic nudity for demonstration purposes, but real explicit pictures are not listed.</p>
          <br/><br/>
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
            <Swiper
              modules={[Navigation, Keyboard]}
              grabCursor={true}
              navigation={true}
              loop={true}
              keyboard={{enabled: true}}
            >
            {modalDisplay}
            </Swiper>
          </Modal>
          </div>
        </section>
    </Page>
    )
}

