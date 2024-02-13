import React from 'react'
import styles from './Form.module.scss';
import { useForm } from 'react-hook-form'; // react-hook-form 호출

const Form = ({ title }) => {

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({ mode: 'onBlur'}); // register, handleSubmit, formState 등 필요함수를 호출하여 useForm 으로 관리

    const onSubmit = ({ email, password}) => {
        getDataForm(email, password);
        reset();
    }

    const userEmail = {
        required: '필수 필드입니다.',
        pattern: {
            value:'',
            message: '입력하신 이메일 주소가 올바르지 않습니다.',
        },
    };

    const userPassword = {
        required: '필수 필드입니다.',
        minLength: {
            value: 6,
            message: '최소 6자입니다.'
        }
    }

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div>
            <input 
                type='email'
                placeholder='E-mail'
                {...register('email', userEmail)}
            />
            {errors?.email && (
            <div>
                <span className={styles.form_error}>{errors?.email?.message}</span>
            </div>
            )}
        </div>

        <div>
            <input 
                type='password'
                placeholder='Password'
                {...register('password', userPassword)}
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
