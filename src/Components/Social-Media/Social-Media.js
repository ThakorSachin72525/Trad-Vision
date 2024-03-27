import Insta from './icons8-instagram-240.png'
import YouTube from './icons8-youtube-250.png'
import Telegram from './icons8-telegram-250.png'
import WhatsApp from './icons8-whatsapp-240.png'
import Phone from './icons8-ringer-volume-100.png'
import Gmail from './icons8-gmail-240.png'
import './social-media.css'

function SocialMedia() {
  return (
    <div className='icons'>
      <div id='connct'>
        <h2>Connect with us on SocialMedia</h2>
      </div>

      <div className='socialmedia'>

      <div id='iconsAndText'>
        <img onClick={() => window.open("https://www.instagram.com/trade__vision__007/")} src={Insta}/>
        <b>Instagram</b>
      </div>

      <div id='iconsAndText'>
        <img onClick={() => window.open("https://www.youtube.com/@tradevisionlive")} src={YouTube}/>
        <b>YouTube</b>
      </div>

      <div id='iconsAndText'>
        <img onClick={() => window.open("https://t.me/nkstok")} src={Telegram}/>
        <b>Telegram</b>
      </div>
      <div id='iconsAndText'>
        <img onClick={() => window.open("https://chat.whatsapp.com/HX9LmzTPplyJaERRaHHxNV")} src={WhatsApp}/>
        <b>WhatsApp</b>
      </div>
      <div id='iconsAndText'>
        <img onClick={() => window.open("https://mail.google.com/mail/u/0/#imp/FMfcgzGxSHnhCHsdqQWgvCRCjFSrMRxL?compose=new")} src={Gmail}/>
        <b>traadevision100@gmail.com</b>
      </div>
      <div id='iconsAndText'>
        <img src={Phone}/>
        <b>Connect No <br/> 93133 55076</b>
      </div>
      </div>

    </div>
  )
}

export default SocialMedia