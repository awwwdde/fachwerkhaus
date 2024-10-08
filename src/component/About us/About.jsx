import React from 'react';
import Footer from '../special/footer/Footer';
import './about.scss'


const About = () => {
    return (
        <div>
            <div className="about">
                <div className="about_top">
                    <h2 className="about_top_text">Немного информации о нас</h2>
                    <div className="about_top_desrc">
                        <h2 className="about_top_desrc_text">Наша компания занимается строительством домов в стиле fachwerk, который является традиционным для некоторых регионов Германии. Наша команда состоит из опытных строителей и дизайнеров, которые специализируются на создании уникальных домов в этом стиле.
                        Мы используем только высококачественные материалы и современные технологии для создания домов, которые сочетают в себе классический стиль и современный комфорт. Мы также предлагаем нашим клиентам индивидуальный подход к проектированию и строительству, чтобы удовлетворить все их потребности и желания.
                        Мы строим дома разных размеров и конфигураций, включая одноэтажные и многоэтажные дома, коттеджи и загородные дома. Мы гарантируем высокое качество работ и быстрое выполнение проектов. Если вы хотите создать уникальный дом в стиле fachwerk, наша компания готова помочь вам воплотить ваши мечты в реальность.
                        </h2>
                    </div>
                </div>
                <Footer/>
            </div>
            
        </div>
    );
};

export default About;