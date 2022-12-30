import { useState } from "react"
import { useLocation } from "react-router-dom"
import './product-info.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductInfo = ({setSaveItem}) => {

    const location = useLocation() 
    const [data, setData] = useState([location.state])

    const eslatma = () => toast.success("Mahsulot Savatchaga qo'shildi!");

    const getItem =(item)=>{
        eslatma()
        setSaveItem(item)
      }

  return (
    <div className="product-info">
        {data.map(item=>{
            return(
                <div className="container">
                    <div className="product-box">
                        <div className="product-inbox">
                            <img className="product-info-img" alt="" src={process.env.PUBLIC_URL+item.img+item.id+'.jpeg'}/>
                        </div>
                        <div className="product-inbox product-info-info">
                            <p>{item.info}</p>
                        </div>
                        <div className="product-inbox product-info-name">
                            <h3>{item.name}</h3>
                            <h5>Narxi: <span className="red my-3">{item.price}</span> so'm</h5>
                            <button onClick={()=>getItem(item)} className="btn btn-outline-success product-info-button">Savatchaga qo'shish</button>
                        </div>
                    </div>
                        <ToastContainer />
                </div>
            )
        })}  
    </div>
  )
}

export default ProductInfo