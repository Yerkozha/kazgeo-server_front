import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ReactComponent as CaretDown } from '../../../assets/image/icon/caret_down.svg'
import { ReactComponent as SearchIcon } from '../../../assets/image/icon/search.svg'
import { ReactComponent as Settings } from '../../../assets/image/icon/settings_black.svg'
import '../../../page/Main.scss'
import { sendMailGeneral, setMailIdAndClear } from '../../../redux/mail-reducer'
import './Search.scss'
import { attachLabel, getLabels } from '../../../redux/label-reducer'
import { Select } from 'antd';
import { AppStateType } from '../../../redux/redux'
// type SearchPropsType = {
//     sendMail: string
//     formData: FormData
//     cancelMail: string
// }

const Search: React.FC<any> = (props) => {
    const dispatch = useDispatch()
    const selectedMailId = useSelector((state: AppStateType) => state.mail.selectedMailId)
    const [openModal, setOpenModal] = useState(false)

    useEffect(() => {
        dispatch(getLabels())
    }, [])

    const LabelModal = () => {
        const selectLabel = (e: any): void => {
            dispatch(attachLabel({
                "mail_ids": selectedMailId,
                "label_id": e
            }))
        }
        const { Option } = Select
        return <div className="labels__modal">
            <Select className="labels__modal-inner" onChange={selectLabel} placeholder={'ПРИСВОИТЬ ЯРЛЫК'} dropdownStyle={{
                position: 'absolute',
            }} >
                {props.pickLabels && props.pickLabels.map((label: any) => <Option key={label.id} value={label.id}>{label.name}</Option>)}
            </Select>
        </div>
    }

    const selectAllMails = (target: any) => {
        if (target.target.checked === true) {
            const selectAllMailData = props.data.map((el: any) => el.id)
            dispatch(setMailIdAndClear('', '', selectAllMailData))
            const len = document.querySelectorAll("[id='selected_users_checkbox']");
            debugger
            for (let i = 0; i < len.length; i++) {
                //@ts-ignore
                len[i].checked = true
            }
        }
    }

    return (
        <div className='search'>
            <div className='search__label'>
                <input id='search__label-checkbox' className="search__label-checkbox" type='checkbox' onClick={selectAllMails} />
                {props.sendMail ? <button className="search__label-btn" onClick={() => {
                    dispatch(sendMailGeneral(props.formData))
                }}><h5 className="search__label-title">{props.sendMail}</h5></button>
                    : <button className="search__label-btn" onClick={() => { setOpenModal(!openModal) }}><h5 className="search__label-title">ОТМЕНИТЬ</h5>
                        <ReadMessage open={openModal} />
                        <CaretDown /></button>}
                {props.cancelMail ? <button className="search__label-btn">
                    <h5 className="search__label-title">{props.cancelMail}</h5>
                </button> :
                    <LabelModal />}
                {/* // <button className="search__label-btn">
                //     
                //     <h5 className="search__label-title"></h5>
                //     <CaretDown />
                // </button> */}


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

const ReadMessage = (props: any) => {

    return <div className="read">
        <ReadMessageItem open={props.open}>
            <ReadMessageDropDown />
        </ReadMessageItem>
    </div>
}
const ReadMessageItem = (props: any) => {
    return <div className="read__message-item">
        {props.open && props.children}
    </div>
}
const ReadMessageDropDown = (props: any) => {
    const DropDownItem = (props: any) => {
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
