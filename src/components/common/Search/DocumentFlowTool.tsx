import React from 'react'

export const DocumentFlowTool = (props:any) => {
    
    return (<div className="tools__document">
                <div className="tools__edit">
                    <button className="tools__edit-btn">
                        СОХРАНИТЬ
                    </button>
                    <button className="tools__edit-btn">
                        ОТМЕНИТЬ
                    </button>
                </div>
                <div className="tools__container-input">
                    <input type="text" className="tools__search" placeholder='Найти' />
                </div>
            </div>
    )
}

