import React, { useState } from 'react';
import style from './Header.module.scss'
import logo from '../../../public/BezfonaLogo.svg'
import watsLogo from '../../../public/whatsappLogo.svg'
import telegLogo from '../../../public/telegramLogo.svg'
export const Header: React.FC = () => {
    const [dropDownActive,setDropDown] = useState<boolean>(false)


    return (
        <div className='container'>
            <header className={style.header}>
                <section className={style.leftHalf}>
                    <nav>
                        <a href="">
                            <img src={logo} alt="logo" />
                        </a>
                        <a href="">Новостроки</a>
                        <a href="">Готовые кварирвы</a>
                        <a href="">Арендаквартир</a>
                        <a href="">Загодная</a>
                        <a href="">Коммерческая</a>
                        <a href="">Агенство</a>
                    </nav>
                </section>
                <section className={style.rightHalf} >
                    <nav>
                        <a href="">
                            <img src={watsLogo} alt="" />
                        </a>
                        <a href="">
                            <img src={telegLogo} alt="" />
                        </a>
                        <a href="">+7 (495) 255-01-61</a>
                    </nav>
                </section>
                <section className={style.onMobile}>
                    <div>
                        <img src={logo} alt="logo" />
                    </div>
                    <div style={{display: dropDownActive ? 'block' : 'none'}} className={style.dropdownMenu}>
                        <div className={style.header}>
                            <div className="">+7 (495) 255-01-61</div>
                            <div className="">
                                <div className="">
                                <img src={watsLogo} alt="watsap" />
                                </div>
                                <div className="">
                                <img src={telegLogo} alt="tg" />
                                </div>    
                            </div>
                            
                        </div>
                        <div className="">
                            <a href="">Новостроки</a>
                        </div>
                        <div className="">
                            <a href="">Готовые кварирвы</a>
                        </div>
                        <div className="">
                            <a href="">Арендаквартир</a>
                        </div>
                        <div className="">
                            <a href="">Загодная</a>
                        </div>
                        <div className="">
                            <a href="">Коммерческая</a>
                        </div>
                        <div className="">
                            <a href="">Агенство</a>
                        </div>

                    </div>
                    <div onClick={()=> setDropDown((el)=> !el)} className={style.burgerMenu}>
                        <div>.</div>
                        <div>.</div>
                        <div>.</div>
                    </div>
                </section>
            </header>

        </div>

    );
};