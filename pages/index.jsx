import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { notification } from 'antd';
import jwtDecode from "jwt-decode";

import { loginSuccess } from '../store/auth/action';
import AuthRepository from '../repositories/AuthRepository';

const SignIn = (props) => {

  const dispatch = useDispatch();

  const { auth, token } = useSelector(({ auth }) => auth);

  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [type, setType] = useState('');
  const [isShowPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const typeOnChange = (e) => {
    setType(e.target.value);
    let errorObj = { ...errors };
    errorObj['type'] = '';
    setErrors(errorObj);
  };

  const userOnChange = (user) => {
    setUser(user);
    let errorObj = { ...errors };
    errorObj['user'] = '';
    setErrors(errorObj);
  }

  const passwordOnChange = (password) => {
    setPassword(password);
    let errorObj = { ...errors };
    errorObj['password'] = '';
    setErrors(errorObj);
  }

  const loginOnClick = async () => {
    let errorObj = {};
    if (user && password && type) {
      let result = await AuthRepository.adminLogin({ user, password, type, logintype: "G" });
      if (result && result.statusCode === 200) {
        let user = jwtDecode(result.token);
        await localStorage.setItem('usertoken', result.token);
        dispatch(loginSuccess({ user: user.user, token: result }));
        notification.success({
          message: "Welcome Back!"
        });
        window.location.href = "/home";
      } else if (result && result.statusCode === 404) {
        notification.error({
          message: result.message
        });
      } else {
        notification.error({
          message: 'Something Wrong'
        });
      }
    } else {
      if (!user) errorObj['user'] = 'Please Enter User';
      if (!password) errorObj['password'] = 'Please Enter Password';
      if (!type) errorObj['type'] = 'Please Select Type';
      setErrors(errorObj);
    }
  }

  useEffect(() => {
    let local = JSON.parse(localStorage.getItem('persist:QuestionCloudAdmin'));
    let localAuth = local && local.auth ? JSON.parse(local.auth) : {};
    if (localAuth && localAuth.isLoggedIn) {
      window.location.href = "/home";
    }
  }, [auth, token, dispatch]);

  return (
    <>
      <div className="top-container">
        <div className="loginscreen">
          <div className="row justify-content-center">
            <div className="col-md-8" style={{ background: "#fff", boxShadow: '0 1px 4px 0 rgb(0 0 0 / 25%)' }}>
              <div className="row">
                <div className="col-md-5" style={{ background: '#e7e7e7' }}>
                </div>
                <div className="col-md-7">
                  <div className=" text-center my-4">
                    <img src={"/img/logo.png"} alt="newapollo" className="text-center" title="newapollo" />
                  </div>
                  <div className='form-name'>
                    <div className="row mb-4">
                      <div className="col-md-5">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name='exampleRadios1'
                            value={'S'}
                            onClick={(e) => typeOnChange(e)}
                          />
                          <label className="form-check-label" for="exampleRadios1">
                            Thiruppathur
                          </label>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name='exampleRadios1'
                            value={'A'}
                            onClick={(e) => typeOnChange(e)}
                          />
                          <label className="form-check-label" for="exampleRadios1">
                            Singampunari
                          </label>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name='exampleRadios1'
                            value={'F'}
                            onClick={(e) => typeOnChange(e)}
                          />
                          <label className="form-check-label" for="exampleRadios1">
                            Other
                          </label>
                        </div>
                      </div>
                      <div style={{ marginLeft : 20 }}><h6 style={{ color: 'red', paddingTop: '1%' }}>{errors['type']}</h6></div>
                    </div>
                    <div className="form-group">
                      <input
                        onChange={(event) => userOnChange(event.target.value)}
                        margin="normal"
                        className="form-control"
                        placeholder="User Name"
                      />
                      <i className="fa fa-user icon"></i>
                      <div><h6 style={{ color: 'red', paddingTop: '1%' }}>{errors['user']}</h6></div>
                    </div>
                    <div className="form-group">
                      <input
                        type={isShowPassword ? "text" : "password"}
                        onChange={(event) => passwordOnChange(event.target.value)}
                        margin="normal" className="form-control"
                        placeholder='Password'
                      />
                      {isShowPassword ?
                        <i className="fa fa-eye icon1" onClick={() => setShowPassword(false)} style={{ cursor: 'pointer' }} /> :
                        <i className="fa fa-eye-slash icon1" onClick={() => setShowPassword(true)} style={{ cursor: 'pointer' }} />
                      }
                      <div><h6 style={{ color: 'red', paddingTop: '1%' }}>{errors['password']}</h6></div>
                    </div>
                    <div className='row'>
                      <div className="col-md-6">
                        <button variant="contained" className="btn-signin" onClick={loginOnClick}>
                          Sign In
                        </button>
                      </div>
                      <div className="col-md-6 text-right">
                        <button variant="contained" className="btn-signin" >
                          School Login
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


export default SignIn;
