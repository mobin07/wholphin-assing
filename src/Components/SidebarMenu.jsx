import React from 'react'
import { CiCircleChevLeft } from 'react-icons/ci';
import styles from '../styles/SidebarMenu.module.css'
import { AiOutlineHeart ,AiOutlineDoubleLeft,AiOutlineShareAlt ,AiOutlineEye,AiOutlineArrowRight, AiOutlineLeft} from 'react-icons/ai';

const SidebarMenu = ({toggle}) => {
  return (
    <div className={styles.mainBox}>
        <div className={styles.iconCover2} onClick={()=>toggle()}>
            <AiOutlineLeft className={styles.shape} color='rgb(155, 74, 7)' />
        </div>
        <div className={styles.leftDrag} onClick={()=>toggle()}>
            <AiOutlineDoubleLeft  color='rgb(155, 74, 7)' className={styles.drag}/>
        </div>
        <div className={styles.headingtext}>
            MAITREYA BUDDHA <br/>
            IN GESTURE OF FEARLESSNESS<br/>
            (ABHAYA MUDRA)
        </div>
        <div className={styles.threeIcons}>
            <div className={styles.threeIconsa}>
                <div className={styles.iconCover}>
                <AiOutlineHeart  className={styles.shape} />
                </div>
                <p>0</p>
            </div>
            <div className={styles.threeIconsa}>
                <div className={styles.iconCover}>
                <AiOutlineShareAlt  className={styles.shape} />
                </div>
                <p>120</p>
            </div>
            <div className={styles.threeIconsa}>
                <div className={styles.iconCover}>
                <AiOutlineEye  className={styles.shape} />
                </div>
                <p>27</p>
            </div>
        </div>
        <div className={styles.dynats}>
            Dynasty : Ahichchhatra<br/>
            Period : 200 CE <br/>
            Material : Sandstone <br/>
            Location : National Museum
        </div>
        <br/>
        <div style={{fontWeight:'bold'}} className={styles.description}>Description :</div>
        <div className={styles.maitreya}>
            <br/>
            Maitreya the future Buddha to be, resides in the 
            Tushita heaven as a bodhisattva waiting to redeem
            humanity. In Buddhism, Maitreya  is the eighth
            Buddha, a succssor of the seven historical Buddhas
            (sapta-manushi Buddhas).The Digha Nikaya 
            mentions. Maitreya Buddha will be born in Ketumati,
            in present day Varanasi, Uttar Pradesh.As a 
            bodhisattva, Maitreya wears a heavily adorned with
            earrings, wristlets, necklaces, and an amulet. The

        </div>
        <div className={styles.orange}>
            <AiOutlineArrowRight/> READ MORE
        </div>
        <div className={styles.bottomButton}>
            <button className={styles.button1}>ADD TO COLLECTION</button>
            <button className={styles.button2}>SOUVNIR</button>
        </div>
    </div>
  )
}

export default SidebarMenu