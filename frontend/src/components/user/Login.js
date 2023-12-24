import { Fragment, useEffect, useState  } from "react";
import MetaData from "../layouts/MetaData";
import { clearAuthError, login } from "../../actions/userActions";
import {useDispatch, useSelector} from 'react-redux'
import {toast} from 'react-toastify';
import {useLocation, useNavigate} from 'react-router-dom'
import { Link } from "react-router-dom";
import styled from "styled-components";
export default function Login(){
  const [email,setEmail] = useState('');
  const [password,setPassword]= useState('')
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const {loading,error,isAuthenticated}= useSelector(state=>state.authState)
  const redirect  = location.search?'/'+location.search.split('=')[1]:'/';
  const submitHandler = (e)=>{
    e.preventDefault();
     dispatch(login(email,password))
  }
  useEffect(()=>{
    if(isAuthenticated){
       navigate(redirect)
    }
if(error){
  toast(error,
    {position:toast.POSITION.BOTTOM_CENTER,
      type:'error',
      onOpen:()=>{dispatch(clearAuthError)
  }})
  return
}
  },[error,isAuthenticated,navigate,dispatch,redirect])
  const adminTestLogin =()=>{
    alert("Username: sadhababy21@gmail.com\nPassword: 12345678");
  }
  const userTestLogin = ()=>{
    alert("Username:sadhababy21@gmail.com.\nPassword: 12345678");
  }
    return(
        <Fragment>
            <MetaData title={`Login`}/>
            <div className="row wrapper"> 
	         	<div className="col-10 col-lg-5">
             <form onSubmit={submitHandler} className="shadow-lg">
            <h1 className="mb-3">Login</h1>
            <div className="form-group">
              <label htmlFor="email_field">Email</label>
              <input
                type="email"
                id="email_field"
                className="form-control"
                value={email}
                onChange={e=> setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password_field">Password</label>
              <input
                type="password"
                id="password_field"
                className="form-control"
                value={password}
                onChange={e=>setPassword(e.target.value)}
              />
            </div>
            <Link to="/password/forgot" className="float-right mb-4">Forgot Password?</Link> 
            <Test>
            <ul>
              <li> <button className="btn-1" onClick={(e)=>adminTestLogin()}>Admin-TestLogin</button></li>
              <li> <button className="btn-2"onClick={(e)=>userTestLogin()}>User-TestLogin</button></li>
            </ul>
            </Test>
            <button
              id="login_button"
              type="submit"
              className="btn btn-block py-3"
              disabled={loading}
            >
              LOGIN
            </button>
            <Link to='/register' className="float-right mt-3">New User?</Link>
          </form>
		  </div>
    </div>
        </Fragment>
        
    )
}
const Test = styled.div`

ul{
  display:flex;
  flex-direction:row;
  justify-contend:center;
  text-decoration:none;
  margin-top:5rem;
  gap:0.5rem;
  list-style:none;
  color:white;
  margin-left:-2rem;
}
.btn-1{
  height:2rem;
  width:10rem;
  background:none;
  color:white;
}
.btn-2{
  height:2rem;
  width:10rem;
  background:none;
  color:white;
}


`;
