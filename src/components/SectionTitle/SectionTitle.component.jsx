import * as React from "react";
import * as styles from './SectionTitle.module.scss';

const SectionTitle = ({title='', subtitle=''}) => {
  return(
    <>
      {/* <h2 className="section-title section-title--form"> */}
      <h2 className={styles.title}>
        {title}
      </h2>
      {
        subtitle.length > 0 
        ?
          <p className={styles.subtitle}>
            {subtitle}
          </p>
        :
          null
      }
    </>
  )
}

export default SectionTitle;