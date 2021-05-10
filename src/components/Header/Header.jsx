import React from 'react';
import style from './Header.module.css';
import userAva from './../../assets/img/logoza.ru.png'

const Header = () => {
    return <header className={style.header}>
        <img src={userAva} alt=""/>
        {/*<img src={require('./logoza.ru.png')} alt="logo" className={style.brandLogo}/>*/}
            </header>


}

export default Header;