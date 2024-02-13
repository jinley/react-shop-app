import React from 'react'
import Form from '../../../components/form/Form'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const SignIn = () => {
    const navigate = useNavigate();
    const [firebaseError, setFirebaseError] = useState('');

    const handleLogin = (email, pass) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, pass)
        .then((userCredential) => {
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

