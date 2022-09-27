import Head from 'next/head';
import Image from 'next/future/image';
import Modal from 'react-modal'
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide} from 'swiper/react';
import { Keyboard, Navigation} from 'swiper';

import Page from '../../components/Page';

import { getAllGalleryFilenames } from '../../lib/images';

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
  const [swiper, setSwiper] = useState(null);
  const [slide, setSlide] = useState(0);

  function openModal(index) {
    setSlide(index);
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    if(swiper?.slideTo) {
      swiper?.slideTo(slide, 0);
    }
  }, [swiper, slide]);

  const imageDisplay = images.map((images, index) => (
    <span key={images.params.file} className={styles.galleryImage}>
      <a onClick={() => openModal(index + 1)}>
      <Image
        fill
        style={css}
        src={`/gallery/${images.params.file}`}
        alt="Artwork" />
        </a>
    </span>
  ))

  const swiperOutput = (
    <Swiper
      modules={[Navigation, Keyboard]}
      grabCursor={true}
      navigation={true}
      loop={true}
      keyboard={{enabled: true}}
      onSwiper={(instance) => {
        setSwiper(instance);
      }}
    >
      {images.map((images) => (
        <SwiperSlide style={{ height: '80vh' }} key={images.params.file}>
          <Image
            fill
            style={openpic}
            src={`/gallery/${images.params.file}`}
            alt="Artwork"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )

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
          {swiperOutput}
          </Modal>
          </div>
        </section>
    </Page>
    )
}

