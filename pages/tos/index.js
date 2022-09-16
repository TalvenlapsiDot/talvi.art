import Head from 'next/head';
import Page from '../../components/Page';
import { useState } from 'react';
import styles from '../../styles/Home.module.css'

export default function Tos() {
  const [visible, setVisible] = useState(false);

  const handleMoreClick = () => {
    setVisible(!visible);
  };

    return (
      <Page>
        <Head>
            <title>Terms of Service</title>
        </Head>

        <section>
        <h2> <ins>Terms of Service </ins></h2>
        <p> By ordering any art from me, you agree to the following terms of service.</p>
          <hr color="#743141"></hr>
          <p>
          <ul className={styles.ulTos}> <b><ins>Payment and Refunds</ins></b>
            <li> ❥ I take Paypal Only</li>
            <li> ❥ USD only.</li>
            <li> ❥ I take payment after I&apos;m finished, before I send the final files to the customer.</li>
            <li> ❥ I use paypal invoices to send to the customer. After the invoice is paid, I will send the full size and quality images to the customer. You do not need Paypal account to pay the invoice!</li>
            <li> ❥ Refunds are not eligible in any point. Since the art is shown to the customer prior to paying, they are not eligible to receive a refund for whatever reason.</li>
        </ul>
        <br></br>
          <hr color="#743141"></hr>
          <ul className={styles.ulTos}> <b><ins>Reference, Edits and WIPs</ins></b>
            <li> ❥ Customer is responsible for providing good references of their character - preferably with some reference images. Please make sure your references are clear and include everything you want!</li>
            <li> ❥ Completed comissions cannot be edited by another artist, with the exclusion of the comissioner themselves.</li>
            <li> ❥ WIP&apos;s will be provided during the working phase; Usually at sketching, then after placing colors, and at the end before sending in the invoice and placing final edits.</li>
            <li> ❥ If you need major edits at the very end of the image, that requires reworking more than half of the image, an additional payment can be requested. Customer can refuse this payment with understanding that they will not get the edits made.</li>
        </ul>
        <br></br>
          <hr color="#743141"></hr>
          <ul className={styles.ulTos}> <b><ins>Art and Artistic Rights</ins></b>
            <li> ❥ I reserve all artistic rights to comissioned work. </li>
            <li> ❥ I have right to use the comissioned artwork in any online gallery or portfolios, as well as any publication I may do in future, with the character credits linking it back to the comissioner.</li>
            <li> ❥ The comissioner has rights to use the comissioned art for any personal display as long as credits are linked back to the artist. The art may be printed for personal use only.</li>
            <li> ❥ Comissioner are not allowed to use artwork for commercial use or promotion/profit.</li>
            <li> ❥ Comissioner does not have right to sell any comissioned art for NFT.</li>
        </ul>
        </p>
         <hr color="#743141"></hr>

        <button onClick={handleMoreClick} className={styles.buttonTos}>
          View NSFW-Comission Terms (Agree to being 18+)
        </button>

      {visible && (
      <box>
          <br></br>
          <ul className={styles.ulTos}> <b><ins>I Will Not Draw</ins></b>
            <li> ❥ Mechanoid creatures</li>
            <li> ❥ Children in sexual context (this includes cubs, kids, loli & shota)</li>
            <li> ❥ Vore, Scat, Vomit, Watersports - Make sure to ask if you want heavy kinks.</li>
            <li> ❥ Heavy Gore</li>
            <li> ❥ Hyper muscles / Micro / Macro anything.</li>
        </ul>
        <br></br>
        <ul className={styles.ulTos}>
          <li>All art ordered that contains any NSFW aspects, be it violence or nudity, will only be offered for people who are above the age of 18.</li>
          <li>When ordering any NSFW art, you agree to being above the age of 18, and having read the terms of services.</li>
        </ul>
      </box>
      )}
        </section>
     </Page>
    )
    }