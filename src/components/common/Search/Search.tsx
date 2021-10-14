import React from 'react'
import { ReactComponent as CaretDown } from '../../../assets/image/icon/caret_down.svg'
import { ReactComponent as SearchIcon } from '../../../assets/image/icon/search.svg'
import { ReactComponent as Settings } from '../../../assets/image/icon/settings_black.svg'
import '../../../page/Main.scss'

function Search() {
    return (
        <div className='search'>
            <div className='search__label'>
                <input className="search__label-checkbox" type='checkbox'></input>
                <button className="search__label-btn">
                    <h5 className="search__label-title">ОТМЕНИТЬ</h5>
                    <CaretDown />
                </button>
                <button className="search__label-btn">
                    <h5 className="search__label-title">ПРИСВОИТЬ ЯРЛЫК</h5>
                    <CaretDown />
                </button>
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

export default Search
