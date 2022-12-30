import {MenuProduct, MainProduct} from '../'
import {smartwatchMenuInfo} from '../service/menu-product-info'
import { smartwatchMenuInfo1 } from '../service/product-info';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './smartwatchlar.css'


const Smartwatchlar = ({setSaveItem}) => {

  const eslatma = () => toast.success("Mahsulot Savatchaga qo'shildi!");
  
  return (
    <div className='smartwatchlar'>
      <MainProduct setSaveItem={setSaveItem} product={smartwatchMenuInfo1} title={'Yangi Smartwatchlar'} eslatma={eslatma} urlImage={process.env.PUBLIC_URL+"/Images/SmartwatchMenu/"}/>
      <MenuProduct setSaveItem={setSaveItem} product={smartwatchMenuInfo} title={'Smartwatchlar'} eslatma={eslatma} urlImage={process.env.PUBLIC_URL+"/Images/SmartwatchMenu/"}/>
      <ToastContainer />
    </div>
  )
}

export default Smartwatchlar