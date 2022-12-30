import './main.css'
import {LogoComponent, MainProduct, MainFooterText, MainFooter} from '../'
import {laptopMenuInfo1, AirpodsMenuInfo1, PlanshetMenuInfo1, SmartfonMenuInfo1, smartwatchMenuInfo1} from '../service/product-info'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Main = ({setSaveItem, savat}) => {

  const eslatma = () => toast.success("Mahsulot Savatchaga qo'shildi!");

  return (
    <div className='main'>
        <LogoComponent savat={savat}/>
        <MainProduct product={laptopMenuInfo1} setSaveItem={setSaveItem} title={'Noutbuklar'} eslatma={eslatma} urlImage={process.env.PUBLIC_URL+"/Images/LaptopMenu/"}/>
        <MainProduct product={AirpodsMenuInfo1} setSaveItem={setSaveItem} title={'AirPodslar'} eslatma={eslatma} urlImage={process.env.PUBLIC_URL+"/Images/AirpodsMenu/"}/>
        <MainProduct product={PlanshetMenuInfo1} setSaveItem={setSaveItem} title={'Planshetlar'} eslatma={eslatma} urlImage={process.env.PUBLIC_URL+"/Images/PlanshetMenu/"}/>
        <MainProduct product={SmartfonMenuInfo1} setSaveItem={setSaveItem} title={'Smartfonlar'} eslatma={eslatma} urlImage={process.env.PUBLIC_URL+"/Images/SmartfonMenu/"}/>
        <MainProduct product={smartwatchMenuInfo1} setSaveItem={setSaveItem} title={'SmartWatchlar'} eslatma={eslatma} urlImage={process.env.PUBLIC_URL+"/Images/SmartwatchMenu/"}/>
        <MainFooterText/>
        <MainFooter/>
        <ToastContainer />
    </div>
  )
}

export default Main