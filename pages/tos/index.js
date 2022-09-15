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
          <hr color="#743141"></hr>
          <p>
          <b><ins>Payment and Refunds</ins></b>
        <br></br>
         ❥ I take Paypal Only
        <br></br>
         ❥ USD or Euro only.
        <br></br>
         ❥ I take payment after I&apos;m finished, before I send the final files to the customer.
        <br></br>
         ❥ I use paypal invoices to send to the customer. After the invoice is paid, I will send the full size and quality images to the customer. You do not need Paypal account to pay the invoice!
        <br></br>
         ❥ Refunds are not eligible in any point. Since the art is shown to the customer prior to paying, they are not eligible to receive a refund for whatever reason.
        <br></br><br></br>
          <hr color="#743141"></hr>
          <b><ins>Reference, Edits and WIPs</ins></b>
        <br></br>
         ❥ Customer is responsible for providing good references of their character - preferably with some reference images. Please make sure your references are clear and include everything you want!
        <br></br>
         ❥ Completed comissions cannot be edited by another artist, with the exclusion of the comissioner themselves.
        <br></br>
         ❥ WIP&apos;s will be provided during the working phase; Usually at sketching, then after placing colors, and at the end before sending in the invoice and placing final edits.
        <br></br>
         ❥ If you need major edits at the very end of the image, that requires reworking more than half of the image, an additional payment can be requested. Customer can refuse this payment with understanding that they will not get the edits made.
        <br></br><br></br>
          <hr color="#743141"></hr>
          <b><ins>Art and Artistic Rights</ins></b>
        <br></br>
         ❥ I reserve all artistic rights to comissioned work.
        <br></br>
         ❥ I have right to use the comissioned artwork in any online gallery or portfolios, as well as any publication I may do in future, with the character credits linking it back to the comissioner.
        <br></br>
         ❥ The comissioner has rights to use the comissioned art for any personal display as long as credits are linked back to the artist. The art may be printed for personal use only.
        <br></br>
         ❥ Comissioner are not allowed to use artwork for commercial use or promotion/profit.
        <br></br>
         ❥ Comissioner does not have right to sell any comissioned art for NFT.</p>
         <hr color="#743141"></hr>

        <button onClick={handleMoreClick} className={styles.buttonTos}>
          View NSFW-Comission Terms (Agree to being 18+)
        </button>

      {visible && (
      <box>
          <br></br>
          <b><ins>I Will Not Draw</ins></b>
          <br></br>
          ❥ Mechanoid creatures
          <br></br>
          ❥ Children in sexual context (this includes cubs, kids, loli & shota)
          <br></br>
          ❥ Vore, Scat, Vomit, Watersports - Make sure to ask if you want heavy kinks.
          <br></br>
          ❥ Heavy Gore
          <br></br>
          ❥ Hyper muscles / Micro / Macro anything.
      </box>
      )}
        </section>
     </Page>
    )
    }