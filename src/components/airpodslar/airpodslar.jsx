import {MenuProduct, MainProduct} from '../'
import {AirpodsMenuInfo} from '../service/menu-product-info'
import { AirpodsMenuInfo1 } from '../service/product-info';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './airpodslar.css'

const Airpodslar = ({setSaveItem}) => {

  const eslatma = () => toast.success("Mahsulot Savatchaga qo'shildi!");

  return (
    <div className='airpodslar'>
      <MainProduct setSaveItem={setSaveItem} product={AirpodsMenuInfo1} title={'Yangi AirPodslar'} eslatma={eslatma} urlImage={process.env.PUBLIC_URL+"/Images/AirpodsMenu/"}/>
      <MenuProduct setSaveItem={setSaveItem} product={AirpodsMenuInfo} title={'AirPodslar'} eslatma={eslatma} urlImage={process.env.PUBLIC_URL+"/Images/AirpodsMenu/"}/>
      <ToastContainer />
    </div>
  )
}

export default Airpodslar