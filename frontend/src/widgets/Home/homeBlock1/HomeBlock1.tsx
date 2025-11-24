import React from 'react';
import fon from '../../../../public/team_bg.png'
import style from './HomeBlock1.module.scss'
export const HomeBlock1: React.FC = () => {
return (
    <section className={style.HomeBlock1}>
            <section>
                <h1>Строительная компания PLATINA STROY</h1>
                <p>Помогаем людям купить квартиру и апартаменты в новых жилых комплексах центра <br /> Москвы, коммерческую недвижимость и особняки, а также дома в элитных посёлках Подмосковья.</p>
            </section>
            <img src={fon} alt="" />
            
        
    </section>
);
};