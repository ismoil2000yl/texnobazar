import {MenuProduct, MainProduct} from '../'
import {SmartfonMenuInfo} from '../service/menu-product-info'
import { SmartfonMenuInfo1 } from '../service/product-info';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './smartfonlar.css'

const Smartfonlar = ({setSaveItem}) => {

  const eslatma = () => toast.success("Mahsulot Savatchaga qo'shildi!");

  return (
    <div className='smartfonlar'>
      <MainProduct setSaveItem={setSaveItem} product={SmartfonMenuInfo1} title={'Yangi Smartfonlar'} eslatma={eslatma} urlImage={process.env.PUBLIC_URL+"/Images/SmartfonMenu/"}/>
      <MenuProduct setSaveItem={setSaveItem} product={SmartfonMenuInfo} title={'Smartfonlar'} eslatma={eslatma} urlImage={process.env.PUBLIC_URL+"/Images/SmartfonMenu/"}/>
      <ToastContainer />
    </div>
  )
}

export default Smartfonlar