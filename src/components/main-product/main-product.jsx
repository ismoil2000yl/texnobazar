import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './main-product.css'
import Save from '../../icons/basket2.png'
import { useNavigate } from "react-router-dom";


const MainProduct = ({product, title, eslatma, urlImage, setSaveItem}) => {



  const getItem =(item)=>{
    eslatma()
    setSaveItem(item)
  }

  const navigate = useNavigate()

    const getItemInfo=(item)=>{
        navigate(`/product-info`, {state:item})
    }

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  return (
    <div className="main-product">
        <h3 className="title-name"><b>{title}</b></h3>
        <Carousel responsive={responsive} >
            {
                product.map(item=>{
                    return(
                        <div key={item.id} className={'product-item'} >
                            <div className="product-image-div" onClick={()=>getItemInfo(item)}>
                                <img className="product-image" alt='' src={urlImage+item.id+".jpeg"}/>
                            </div>
                            <h5 className="product-item-name" onClick={()=>getItemInfo(item)}>{item.name}</h5>
                            <div className="product-item-price-div">
                                <button onClick={()=>getItemInfo(item)} className="btn btn-outline-primary product-item-price">{item.price} сум</button>
                                <img alt="" src={Save} className={'save-icon'} onClick={()=> getItem(item)}/>
                            </div>
                        </div>
                    )
                })
            }
        </Carousel>
    </div>
  )
}

export default MainProduct