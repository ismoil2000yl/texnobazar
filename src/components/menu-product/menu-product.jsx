import './menu-product.css'
import Save from '../../icons/basket2.png'
import { useNavigate } from "react-router-dom";

const MenuProduct = ({product, title, eslatma, urlImage, setSaveItem}) => {

    const getItem =(item)=>{
        eslatma()
        setSaveItem(item)
    }

    const navigate = useNavigate()

    const getItemInfo=(item)=>{
        navigate(`/product-info`, {state:item})
    }

  return (
    <div className="menu-product">
        <h3 className="menu-product-title-name"><b>{title}</b></h3>
        <div className='menu-box'>
            {
                product.map(item=>{
                    return(
                        <div key={item.id} className={'menu-product-item'} >
                            <div className="menu-product-image-div" onClick={()=>getItemInfo(item)}>
                                <img className="menu-product-image" alt='' src={urlImage+item.id+".jpeg"}/>
                            </div>
                            <h5 className="menu-product-item-name" onClick={()=>getItemInfo(item)}>{item.name}</h5>
                            <div className="menu-product-item-price-div">
                                <button onClick={()=>getItemInfo(item)} className="btn btn-outline-primary menu-product-item-price">{item.price} сум</button>
                                <img alt="" src={Save} className={'menu-save-icon'} onClick={()=> getItem(item)}/>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default MenuProduct