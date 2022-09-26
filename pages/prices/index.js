import Head from 'next/head';
import Page from '../../components/Page';
import Image from 'next/future/image';
import styles from '../../styles/Home.module.css'

const css = { borderRadius: '20%'};

export default function Prices() {
    return (
      <Page>
        <Head>
            <title>Prices</title>
        </Head>

        <section>
        <h2 align="center"> Pricelist</h2>
          <p>All Prices are marked in USD. When the time for payment comes, I will send you a Paypal invoice; You do NOT need Paypal to pay it.
          <br/>
          Prices are equal for NSFW and SFW art alike.
          <br/><br/>
          In case of very complex characters or accessories, i.e. weapons, there can be complexity add-on. This will be talked with customer prior.</p>
        </section>
        <hr className={styles.rounded}></hr>
        <br/>

        <section>
          <div className={styles.price}>
            <Image src="/images/Illustration.jpg" width={300} height={300} style={css} alt="Illustration Example"/>
            <ul className={styles.ul}> <b><ins>Full Colored Illustration</ins></b>
              <li> ❥ Portrait: 55$ </li>
              <li> ❥ Half-Body: 60$ </li>
              <li> ❥ Full-Body: 70$ </li>
              <li> ❥ Average time to complete: 2-4 weeks </li>
            </ul>
            <br/>
            <ul className={styles.ulTos}>
              <li> Full Colored pictures are best I can offer - a fully, cleanly rendered pictures with full highlights and shadows, and any other possible effects
              (such as glitter, magic, etc). Price includes simple or single colored background.</li>
              <li>Detailed backgrounds are +40$.</li>
              <li>Nude and/or Alt versions for clothes are extra 50% of the price of the original picture.</li>
              <li>Price includes simple or single colored background.</li>
              <li>Second character is double the original character price. (Discounting possible complexity fee&apos;s and background fees)</li>
            </ul>
          </div>
        </section>
        <hr className={styles.rounded}></hr>
        <br/>

        <section>
        <div className={styles.price}>
            <Image src="/images/FlatColor.jpg" width={300} height={300} style={css} alt="Flat Color Example"/>
            <ul className={styles.ul}> <b><ins>Flat Colors</ins></b>
              <li> ❥ Portrait: 40$ </li>
              <li> ❥ Half-Body: 45$ </li>
              <li> ❥ Full-Body: 55$ </li>
              <li> ❥ Detailed Backgrounds are +20$.</li>
              <li> ❥ Average time to complete: 1-2 weeks </li>
            </ul>
            <br/>
            <ul className={styles.ulTos}>
              <li>Flat colors with clean lineart, often with little highlights/minor shading.</li>
              <li>Price includes a single-colored or simple background.</li>
              <li>Detailed backgrounds are +20$</li>
              <li>Nude and/or Alt versions for clothes are extra 50% of the price of the original picture.</li>
              <li>Second character is double the original character price. (Discounting possible complexity fee&apos;s and background fees)</li>
            </ul>
          </div>
        </section>
        <hr className={styles.rounded}></hr>
          <br></br>

        <section>
        <div className={styles.price}>
          <Image src="/images/Emote.png" width={150} height={150} alt="Emote Example"/>
          <ul className={styles.ul}> <b><ins>Emotes</ins></b>
          <li>❥ Single Emote: 10$</li>
          <li>❥ Pack of Five(5): 45$ </li>
          <li>❥ Average time to complete: 1 day, or 3-5 days for a pack.</li>
          </ul>
          <br/>
          <ul className={styles.ulTos}>
              <li>Emotes fit for Discord, Twitch etc. Also usable as icons or just chibi-like art.</li>
            </ul>
          </div>
        </section>
    </Page>
    )
}