import './savatcha.css'
import ignor from '../../icons/ignor.png'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import {MainFooter} from '../'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Savatcha = ({saveData, setDeletedItem}) => {

  const eslatma = () => toast.error("Mahsulot olib tashlandi...!");
  
  const deletedBtn =(item)=>{
    setDeletedItem(item)
    eslatma()
  }

  return (
    <div className="savatcha">
        <h1 className='text-center my-3'>Savatchada <span className='red'>{saveData.length}</span> ta mahsulot bor</h1>
      {
        saveData.length<=0?
        <div className="row my-5 ">
          <h1 className={'col-8 col-sm-8 col-md-8 offset-2 text-center '}>Hech qanday mahsulot harid qilmadingiz...!</h1>
        </div>:
        <div className='savatcha-box'>
          <div className="savatcha-box-left">
            {
              saveData.map((item, idx)=>{
                return(item.name?
                  <div key={idx} className='save-box my-3'>
                    <img alt='' className={'savatcha-item-icon'} src={process.env.PUBLIC_URL+item.img+item.id+'.jpeg'}/>
                    <h5 className='savatcha-item-name'>{item.name}</h5>
                    <div className='savatcha-button'>
                      <button className='btn btn-success savatcha-item-price'>{item.price} сум  </button>
                      <button className='btn btn-outline-danger savatcha-item-deleted' onClick={()=>deletedBtn(idx)}>O'chirish</button>
                    </div>
                  </div>:''
                )
              })
            }
          </div>
          <div className="savatcha-box-right">
            <input className='form-control savatcha-name-input' type={'text'} placeholder='ism va familya...'/>
            <PhoneInput country={'uz'} className={'savatcha-phone-input'}/>
            <button className='btn btn-outline-primary savatcha-buyurtma-button'>Buyurtma berish</button>
          </div>
        </div>
      }
      <MainFooter/>
      <ToastContainer />
    </div>
  )
}

export default Savatcha