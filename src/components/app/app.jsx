import { Routes, Route } from "react-router-dom"
import {Navbar, Main, Smartfonlar, ProductInfo, Smartwatchlar, Airpodslar, Planshetlar, Noutbuklar, Savatcha} from '../'
import { useEffect, useState } from "react";
import '../app/app.css'

const App = () => {

  const [saveItem, setSaveItem] = useState(null)
  const [saveData, setSaveData] = useState([])
  const [deletedItem, setDeletedItem] = useState(null)


  useEffect(()=>{
    const item = [...saveData]
    item.push(saveItem?saveItem:'')
    setSaveData(item)
    // setSaveItem(null)
  },[saveItem])

  useEffect(()=>{
    const deleted = [...saveData]
    deleted.splice(deletedItem,1)
    setSaveData(deleted)
    // setDeletedItem(null)
  },[deletedItem])

  return (
    <div className="container-fluid">
        <div className="app">
            <Navbar/>
            <Routes>
                <Route path="/" element={<Main setSaveItem={setSaveItem} savat={saveData.length}/>}/>
                <Route path="/smartfonlar" element={<Smartfonlar setSaveItem={setSaveItem}/>}/>
                <Route path="/noutbuklar" element={<Noutbuklar setSaveItem={setSaveItem}/>}/>
                <Route path="/planshetlar" element={<Planshetlar setSaveItem={setSaveItem}/>}/>
                <Route path="/airpodslar" element={<Airpodslar setSaveItem={setSaveItem}/>}/>
                <Route path="/smartwatchlar" element={<Smartwatchlar setSaveItem={setSaveItem}/>}/>
                <Route path="/savatcha" element={<Savatcha saveData={saveData} setDeletedItem={setDeletedItem}/>}/>
                <Route path="/product-info" element={<ProductInfo setSaveItem={setSaveItem}/>}/>
            </Routes>
        </div>
    </div>
  )
}

export default App