import {MenuProduct, MainProduct} from '../'
import {PlanshetMenuInfo} from '../service/menu-product-info'
import { PlanshetMenuInfo1 } from '../service/product-info';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './planshetlar.css'

const Planshetlar = ({setSaveItem}) => {

  const eslatma = () => toast.success("Mahsulot Savatchaga qo'shildi!");

  return (
    <div className='planshetlar'>
      <MainProduct setSaveItem={setSaveItem} product={PlanshetMenuInfo1} title={'Yangi Planshetlar'} eslatma={eslatma} urlImage={process.env.PUBLIC_URL+"/Images/PlanshetMenu/"}/>
      <MenuProduct setSaveItem={setSaveItem} product={PlanshetMenuInfo} title={'Planshetlar'} eslatma={eslatma} urlImage={process.env.PUBLIC_URL+"/Images/PlanshetMenu/"}/>
      <ToastContainer />
    </div>
  )
}

export default Planshetlar