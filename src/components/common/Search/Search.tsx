import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { ReactComponent as CaretDown } from '../../../assets/image/icon/caret_down.svg'
import { ReactComponent as SearchIcon } from '../../../assets/image/icon/search.svg'
import { ReactComponent as Settings } from '../../../assets/image/icon/settings_black.svg'
import '../../../page/Main.scss'
import { sendMailGeneral } from '../../../redux/mail-reducer'
import './Search.scss'

type SearchPropsType = {
    sendMail: string
    formData: FormData
    cancelMail: string
}

const Search: React.FC<SearchPropsType> = (props) => {
    const dispatch = useDispatch()
    const [openModal,setOpenModal] = useState(false)
    
    return (
        <div className='search'>
            <div className='search__label'>
                <input className="search__label-checkbox" type='checkbox' />
                {props.sendMail ? <button className="search__label-btn" onClick={() => {
                     dispatch(sendMailGeneral(props.formData))
                }}><h5 className="search__label-title">{props.sendMail}</h5></button>
                    :<button className="search__label-btn" onClick={() => {setOpenModal(!openModal)}}><h5 className="search__label-title">ОТМЕНИТЬ</h5>
                    <ReadMessage open={openModal} />
                    <CaretDown /></button>}
                {props.cancelMail ? <button className="search__label-btn">
                    <h5 className="search__label-title">{props.cancelMail}</h5>
                </button> : 
                <button className="search__label-btn">
                    <h5 className="search__label-title">ПРИСВОИТЬ ЯРЛЫК</h5>
                    <CaretDown />
                </button>}
                
            </div>
            <div className="search__tool">
                <div className="search__tool-input">
                    <button className="search__tool-btn">
                        <SearchIcon className='search__tool-image' />
                    </button>
                    <input placeholder='Найти' type="text" className='search__tool-find' />
                </div>
                <div className="search__tool-settings">
                    <button className="search__tool-btn">
                        <Settings className='search__tool-image' />
                    </button>
                </div>
            </div>
        </div>
    )
}

const ReadMessage = (props:any) => {
    
    return <div className="read">
        <ReadMessageItem open={props.open}>
        <ReadMessageDropDown />
        </ReadMessageItem>
    </div>
}
const ReadMessageItem = (props:any) =>{
    return <div className="read__message-item">
        {props.open && props.children}
    </div>
}
const ReadMessageDropDown = (props:any) => {
    const DropDownItem = (props:any) => {
        return <button className="drop__down-item">
            {props.children}
        </button>
    }

    return <div className="read__message-drop">
        <DropDownItem>КАК ПРОЧИТАННОЕ</DropDownItem>
        <DropDownItem>КАК НЕПРОЧИТАННОЕ</DropDownItem>
    </div>
}

export default Search
