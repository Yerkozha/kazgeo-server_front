import React from 'react'
import '../Main.scss'

function Label() {
    return (
        <div className='label'>
            <div className="label__form">
                <div className="label__section">
                    <div className="label__section-container">
                    <h5 className="label__section-title">Ярлыки</h5>
                    <button className="label__section-btn">Добавить ярлык</button>
                    </div>
                    <h5 className="label__section-subtitle">Параметры ярлыка</h5>
                </div>
                <div className="label__textarea">
                    <textarea name="" id="" cols={30} rows={10} ></textarea>
                </div>
                <div className="label__line" />
                <div className="label__bottom-btn">
                <button className="label__save">СОХРАНИТЬ</button>
                <button className="label__cancel">ОТМЕНИТЬ</button>
                </div>
                <p className="label__bottom-text">ВНИМАНИЕ: Ярлыки и изменения будут применены только для вновь поступивших сообщений</p>
            </div>
        </div>
    )
}

export default Label
