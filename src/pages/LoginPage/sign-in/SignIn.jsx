import React from 'react'
import Form from '../../../components/form/Form'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import app from '../../../firebase';
// import { setUserId } from '../../../store/cart/cart.slice';
// import { setUser } from '../../../store/user/user.slice';
// 이거 하면 안된다고 뜸. 일단 주석처리 해놓겠음. 

const SignIn = () => {
    const navigate = useNavigate();
    const [firebaseError, setFirebaseError] = useState('');

    const handleLogin = (email, pass) => {
    const auth = getAuth(app);
    signInWithEmailAndPassword(auth, email, pass)
        .then((userCredential) => {
          dispatch(
            setUser({
                email: userCredential.user.email,
                token: userCredential.user.refreshToken,
                id: userCredential.user.uid,
            })
          );
        navigate('/');
        })
        .catch((error) => {
        return error && setFirebaseError('이메일 또는 비밀번호가 잘못되었습니다.');
        });
    };


  return (
    <Form 
        title={'로그인'}
        getDataForm={handleLogin}
        firebaseError={firebaseError}
    />
  )
}

export default SignIn

