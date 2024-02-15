import React from 'react'
import Form from '../../../components/form/Form'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import app from '../../../firebase';
import { useDispatch } from 'react-redux';
// import { setUser } from '../../../store/user/user.slice';
// import { setUserId } from '../../../store/cart/cart.slice';
// 이거 하면 안된다고 뜸. 일단 주석처리 해놓겠음

// firebase 인증 서비스로 email, id 등록
// 등록된 사용자 정보를 리덕스 스토어에 상태 관리로 전달, 저장
// 홈 페이지로 네비게이트

const SignUp = () => {
  const navigate = useNavigate(); // 특정 이벤트 발생 시 해당 링크로 이동
  const [firebaseError, setFirebaseError] = useState(''); // 에러메시지를 위한 상태관리

  // 폼 제출 시 호출
  const handleSignupAndLogin = (email, pass) => {
    // firebase auth API
    const auth = getAuth(); // firebase app 초기화
    createUserWithEmailAndPassword(auth, email, pass) 
    // createUser~ api method로 계정 생성 => Promise 성공 => then 콜백 반환
      .then((userCredential) => { // 사용자 계정 생성 성공
        // setUser로 리덕스에 유저 데이터 담는 로직
        dispatch(
          setUser({ 
            email: userCredential.user.email,
            token: userCredential.user.refreshToken,
            id: userCredential.user.uid,
          })
        );
        navigate('/'); // 홈 경로로 리다이렉트
      })
      .catch((error) => { // 계정 생성 중 에러 발생 시 catch 실행
        return error && setFirebaseError('이메일 또는 비밀번호가 잘못되었습니다.');
      });
  };

  return (
    <Form 
      title={'가입하기'}
      getDataForm={handleSignupAndLogin} // 폼으로부터 데이터 받을 수 있도록 설정
      firebaseError={firebaseError} // error 상태를 폼에 전달하여 어떤 에러인지 나타냄
    />
  );
};

export default SignUp
