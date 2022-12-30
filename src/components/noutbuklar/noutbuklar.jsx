import {MenuProduct, MainProduct} from '../'
import {laptopMenuInfo} from '../service/menu-product-info'
import { laptopMenuInfo1 } from '../service/product-info';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './noutbuklar.css'

const Noutbuklar = ({setSaveItem}) => {

  const eslatma = () => toast.success("Mahsulot Savatchaga qo'shildi!");

  return (
    <div className='noutbuklar'>
      <MainProduct setSaveItem={setSaveItem} product={laptopMenuInfo1} title={'Yangi Noutbuklar'} eslatma={eslatma} urlImage={process.env.PUBLIC_URL+"/Images/LaptopMenu/"}/>
      <MenuProduct setSaveItem={setSaveItem} product={laptopMenuInfo} title={'Noutbuklar'} eslatma={eslatma} urlImage={process.env.PUBLIC_URL+"/Images/LaptopMenu/"}/>
      <ToastContainer />
    </div>
  )
}

export default Noutbuklar