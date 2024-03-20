import style from './index.module.css'
import ellipse from '../../../assets/ellipse.png'

import Linkedin from './socials/Linkedin.jsx'
import Github from './socials/Github.jsx'
import Telegram from './socials/Telegram.jsx'

const CallToActionCard = () => {
  return (
    <div
      className={style.callToAction}
    >
      <img
        src={ellipse}
        className={style.ellipse}
      />
      <div
        className={style.container}
      >
        <h3
          className={style.title}
        >
          Let&apos;s
          Talk!
        </h3>
        <a
          className={style.email}
          href='mailto:konghoitec@gmail.com'
       >
          konghoitec@gmail.com
        </a>
        <div
          className={style.socials}
        >
            <Linkedin />
            <Github />
            <Telegram />
        </div>
      </div>
    </div>
  )
}

export default CallToActionCard