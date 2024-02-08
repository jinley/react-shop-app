import React from 'react'
import styles from './Form.module.scss';
import { useForm } from 'react-hook-form';

const Form = ({ title }) => {

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({ mode: 'onBlur'}); // 여기까지 완료

  return (
    <form className={styles.form}>
        <div>
            <input 
                type='email'
                placeholder='E-mail'
            />
            <div>
                <span className={styles.form_error}></span>
            </div>
        </div>

        <div>
            <input 
                type='password'
                placeholder='Password'
            />
            <div>
                <span className={styles.form_error}></span>
            </div>
        </div>
        <button type='submit'>{title}</button>
        <span className={styles.form_error}></span>
    </form>
  )
}

export default Form
