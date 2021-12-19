import * as React from "react";
import SectionTitle from "../../SectionTitle/SectionTitle.component";
import CustomBtn from "../../Button/Button.component";
import * as styles from './Contacts.module.scss';

const Contacts = () => 
  <>
    <SectionTitle title="Contacts" subtitle="Let's get in touch!" />
    <form action="" className={styles.form}>
      <div className={styles.item}>
        <input type="text" placeholder="Name" />
      </div>
      <div className={styles.item}>
        <input type="email" placeholder="Email" />
      </div>
      <div className={styles.item}>
        <textarea name="message" cols="30" rows ="10" placeholder="Message"></textarea>
      </div>
      <CustomBtn>
        Send
      </CustomBtn>
    </form>
  </>

export default Contacts;