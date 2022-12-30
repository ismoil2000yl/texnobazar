import logo from '../../logo/logo.png'
import accauntAvatar from '../../icons/accaunt-avatar.png'
import basket from '../../icons/basket.png'
import { NavLink } from 'react-router-dom'
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import { useState } from 'react'
import './logo.css'

const LogoComponent = ({savat}) => {

    const [loginModal, setLoginModal] = useState(false)
    const [signModal, setSignModal] = useState(false)

    function alreadyAccaunt(){
        setLoginModal(true)
        setSignModal(false)
    }

    function loginModalVisible(){
        setLoginModal(prev=>!prev)
    }
    function signModalVisible(){
        setSignModal(prev=>!prev)
    }

  return (
    <div className="logo-component">
      <div className='navbar-div'>
        <div className='logo-left'>
          <img alt='' src={logo} className={'logotip'}/>
        </div>
        <div className='logo-right'>
            <div className='login-box'>
                <img alt='' src={accauntAvatar} className={'accaunt-avatar'}/><br/>
                <a onClick={loginModalVisible}><b>Kirish</b></a><br/>
                <a onClick={signModalVisible}><b>Ro'yhatdan o'tish</b></a>
            </div>
            <NavLink to={'/savatcha'} className='basket-box'>
            <div >
                <img alt='' src={basket} className={'basket'}/><br/>
                <a><b>Savatcha <span className='red'>{savat}</span></b></a><br/>
            </div>
            </NavLink>
        </div>
      </div>

            {/*  LOGIN MODAL  */}
            <Modal isOpen={loginModal} toggle={loginModalVisible} className='modal-login'>
                <ModalHeader className='modalHeader'>
                    <h1 style={{color:'white'}}>Sign In</h1>
                </ModalHeader>
                <ModalBody className='modalBody'>
                    <form className='form-group'>
                        <label htmlFor='login'>Login</label>
                        <input type={'text'} className='form-control input mt-1' id='login' placeholder='Login'/>
                        <label htmlFor='password' className='mt-3'>Password</label>
                        <input type={'password'} className='form-control input mt-1' id='password' placeholder='password'/>
                    </form>
                </ModalBody>
                <ModalFooter  className='modalFooter'>
                    <a href='#' className='me-5 p-u'>Forgot your password?</a>
                    <button className='btn btn-success mx-3'>Sign-In</button>
                    <button className='btn btn-danger' onClick={loginModalVisible}>Cancel</button>
                </ModalFooter>
            </Modal>

            {/*  SIGN MODAL  */}
            <Modal isOpen={signModal} toggle={signModalVisible} className='modal-login'>
                <ModalHeader className='modalHeader'>
                    <h1 style={{color:'white'}}>Login In</h1>
                </ModalHeader>
                <ModalBody className='modalBody'>
                    <form className='form-group'>
                        <label htmlFor='login'>Login</label>
                        <input type={'text'} className='form-control input mt-1' id='login' placeholder='Login'/>
                        <label htmlFor='password' className='mt-3'>Password</label>
                        <input type={'password'} className='form-control input mt-1' id='password' placeholder='password'/>
                        <label htmlFor='phone' className='mt-3'>Phone number</label>
                        <input type={'number'} className='form-control input mt-1' id='phone' placeholder='Phone number'/>
                    </form>
                </ModalBody>
                <ModalFooter  className='modalFooter'>
                    <a href='#' className='p-u' onClick={alreadyAccaunt}>Already do you have an accaunt?</a>
                    <button className='btn btn-success mx-1'>Sign-Up</button>
                    <button className='btn btn-danger' onClick={signModalVisible}>Cancel</button>
                </ModalFooter>
            </Modal>

    </div>
  )
}

export default LogoComponent