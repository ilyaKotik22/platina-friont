import React from 'react';
import fot1 from '../../../../public/new_building.png'
import fot2 from '../../../../public/secondary_real_estate.png'
import fot3 from '../../../../public/rental_real_estate.png'
import style from './HomeBlock2.module.scss'

export const HomeBlock2: React.FC = () => {
return (
    <section className={style.HomeBlock2}>
        <section className={style.sec1}>
            <article className={style.modArt}>
                <p>Новостройки</p>
                <img src={fot1} alt="" />
            </article>
            <article>
                <p>Новостройки</p>
                <img src={fot2} alt="" />
            </article>
            <article>
                <p>Новостройки</p>
                <img src={fot3} alt="" />
            </article>
        </section>

        <section className={style.sec2}>
            <article>
                <p>Новостройки</p>
                <img src={fot1} alt="" />
            </article>
            <article>
                <p>Новостройки</p>
                <img src={fot1} alt="" />
            </article>
            <article className={style.modArt}>
                <p>Новостройки</p>
                <img src={fot1} alt="" />
            </article>
        </section>

        <section className={style.sec3}>
            <article className={style.modArt}>
                <p>Новостройки</p>
                <img src={fot1} alt="" />
            </article>
            <article>
                <p>Новостройки</p>
                <img src={fot1} alt="" />
            </article>
        </section>
    </section>
);
};