import React from 'react';
import style from './Login.module.css';
import {Field, reduxForm} from "redux-form";

//оборачиваем Хоком REDUX-FORM!!! (LoginReduxForm)
const LoginForm = (props) => {
    const { handleSubmit, pristine, reset, submitting } = props

    return (
        <div className={style.loginContainer}>
            <section className={style.login} id="login">
                <header>
                    <h2>Заполните форму регистрации</h2>
                </header>
                <form onSubmit={handleSubmit} className={style.loginForm} action="#" method="post">

                    <Field type="text" className={style.loginInput} name={'login'} component="input"
                           placeholder="придумайте имя" required autoFocus/>

                    <Field type="password" className={style.loginInput} name={'password'} component="input"
                           placeholder="Пароль" required/>

                    <Field type={'checkbox'} name={'rememberMe'} component="input"/> Запомнить меня

                    <div className={style.submitContainer}>
                        <button type="submit" disabled={pristine || submitting} className={style.loginButton}>Войти</button>
                    </div>
                </form>
            </section>
        </div>
    )
};

/*
 *reduxForm - обёртка над всеми формами, можно сказать что это - (HOC)
 */
const LoginReduxForm = reduxForm({

    form: 'loginForm'//loginForm - ниже уникальное имя для формы!!!
})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
    }
    return (
        <div className={style.loginPage}>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

export default Login;


