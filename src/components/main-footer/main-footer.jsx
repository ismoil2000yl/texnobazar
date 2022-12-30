import './main-footer.css'
import { logo7 } from '../../constants/'
import { NavLink } from 'react-router-dom'
import img1 from '../../icons/Karta/1.svg'
import img2 from '../../icons/Karta/2.jpeg'
import img3 from '../../icons/Karta/3.jpeg'
import img4 from '../../icons/Karta/4.svg'
import img5 from '../../icons/Karta/5.svg'
import img6 from '../../icons/Karta/6.jpeg'
import img7 from '../../icons/Karta/7.svg'
import img8 from '../../icons/Karta/8.svg'
import img9 from '../../icons/Karta/9.svg'
import img10 from '../../icons/Karta/10.svg'
import img11 from '../../icons/Karta/11.jpeg'
import facebook from '../../icons/Tarmoq/facebook.png'
import instagram from '../../icons/Tarmoq/instagram.png'
import telegram from '../../icons/Tarmoq/telegram.png'

const MainFooter = () => {
  return (
    <div className='main-footer'>
        <div className='row'>
            <div className='col-md-4 main-footer-logo'>
                <NavLink className={'navbar-brand mx-3'} to='/'><img alt='' src={logo7} className={'logo'}/></NavLink>
                <div></div>
            </div>
            <div className='col-md-4 my-3'>
                <div className='row'>
                    <div className='col-md-12 text-center price-title mb-4'>
                        <h5>To'lov usullari:</h5>
                    </div>
                    <div className='col-3 col-sm-3 col-md-3'>
                        <img alt='' src={img1} className={'price-icon'}/>
                    </div>
                    <div className='col-3 col-sm-3 col-md-3'>
                        <img alt='' src={img2} className={'price-icon'}/>
                    </div>
                    <div className=' col-3 col-sm-3 col-md-3'>
                        <img alt='' src={img3} className={'price-icon'}/>
                    </div>
                    <div className=' col-3 col-sm-3 col-md-3'>
                        <img alt='' src={img4} className={'price-icon'}/>
                    </div>
                    <div className='col-3 col-sm-3 col-md-3'>
                        <img alt='' src={img5} className={'price-icon'}/>
                    </div>
                    <div className='col-3 col-sm-3 col-md-3'>
                        <img alt='' src={img6} className={'price-icon'}/>
                    </div>
                    <div className='col-3 col-sm-3 col-md-3'>
                        <img alt='' src={img7} className={'price-icon'}/>
                    </div>
                    <div className='col-3 col-sm-3 col-md-3'>
                        <img alt='' src={img8} className={'price-icon'}/>
                    </div>
                    <div className='col-3 col-sm-3 col-md-3'>
                        <img alt='' src={img9} className={'price-icon'}/>
                    </div>
                    <div className='col-3 col-sm-3 col-md-3'>
                        <img alt='' src={img10} className={'price-icon'}/>
                    </div>
                    <div className='col-3 col-sm-3 col-md-3'>
                        <img alt='' src={img11} className={'price-icon'}/>
                    </div>
                </div>
            </div>
            <div className='col-md-4 my-3'>
            <div className='row'>
                    <div className='col-md-12 text-center price-title mb-4'>
                        <h5>Biz bilan aloqa:</h5>
                    </div>
                    <div className='col-md-12 text-center price-title phone-number'>
                        <h3>+998 (77) 777-77-77</h3>
                    </div>
                    <div className='row text-center mt-5'>
                        <div className='col-4 col-sm-4 col-md-4'>
                            <a href='https://www.facebook.com/ismoil2000yl'><img alt='' src={facebook} className={'ijtimoiy-tarmoq-icon'}/></a>
                        </div>
                        <div className='col-4 col-sm-4 col-md-4'>
                            <a href='https://www.instagram.com/ismoil2000yl'><img alt='' src={instagram} className={'ijtimoiy-tarmoq-icon'}/></a>
                        </div>
                        <div className='col-4 col-sm-4 col-md-4'>
                            <a href='https://www.telegram.me/ismoil2000yl'><img alt='' src={telegram} className={'ijtimoiy-tarmoq-icon'}/></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MainFooter