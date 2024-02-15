import React from 'react'
import styles from './Form.module.scss';
import { useForm } from 'react-hook-form'; // react-hook-form 호출

const Form = ({ title }) => { // title을 prop으로 받아옴. 버튼의 텍스트로도 쓰임
    // useForm hook 사용 => useForm으로 register, handleSubmit, formState 등 필요함수에 접근, 관리 
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({ mode: 'onBlur'}); // 인풋에 포커스 벗어날 때 양식의 유효성 검사
    

    const onSubmit = ({ email, password}) => {
        getDataForm(email, password);
        reset(); // 양식 초기화
    }

    // 입력 유효성 검사 규칙
    const userEmail = {
        required: '필수 필드입니다.',
        pattern: {
            value: /^([A-Z|a-z|0-9](\.|_){0,1})+[A-Z|a-z|0-9]\@([A-Z|a-z|0-9])+((\.){0,1}[A-Z|a-z|0-9]){2}\.[a-z]{2,3}$/gm,
            message: '입력하신 이메일 주소가 올바르지 않습니다.',
        },
    };
    const userPassword = {
        required: '필수 필드입니다.',
        minLength: {
            value: 4,
            message: '최소 4자입니다.'
        },
        maxLength: {
            value: 13,
            message: '최대 13자입니다.',
        },
        pattern: {
            value: /^(?=,*[A-Za-z])(?=.*\d)[A-Zaz\d]{8,}$/gm,
            message: '최소 8자, 영문 1자, 숫자 1자',
        },
    };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div>
            <input 
                type='email'
                placeholder='E-mail'
                {...register('email', userEmail)} // register 함수로 userEmail 연결
            />
            {errors?.email && ( // errors 객체 내 email이 true일 경우(email error 존재) && 우측 Jsx 렌더링됨
            <div>
                <span className={styles.form_error}>{errors?.email?.message}</span>
            </div>
            )}
        </div>

        <div>
            <input 
                type='password'
                placeholder='Password'
                {...register('password', userPassword)} // register 함수로 userPassword 연결
            />
            {errors?.password && (
            <div>
                <span className={styles.form_error}>{errors?.password?.message}</span>
            </div>
            )}
        </div>

        <button type='submit'>{title}</button>
        {firebaseError && (
        <span className={styles.form_error}>{firebaseError}</span> 
        )}
    </form>
  )
}

export default Form
