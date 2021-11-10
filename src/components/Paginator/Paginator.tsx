import React, { useState } from 'react'

export const Paginator = ({totalMail = 100,pageSize = 5, currentPage = 1,portionSize = 3,onPageChanged}:any) => {
    let totalPage = Math.round(totalMail / pageSize)
    const pages = []

    for(let i = 0;i <= totalPage; i++){

        pages.push(i);

    }

    const totalPortionCount = totalPage / portionSize

    const [portionNumber,setPortionNumber] = useState(1)

    let leftPortionBorder = (portionNumber - 1) * portionSize + 1
    let rightPortionBorder = portionNumber * portionSize
    
    return (
        <div className='paginator'>
            {portionNumber > 1 && <button onClick={()=>{setPortionNumber(portionNumber-1)}}>PREV</button>}
            {pages.filter(p => leftPortionBorder < p && rightPortionBorder > p)
            .map((p)=> {
                return <span className="paginator__pages"
                onClick={()=>{onPageChanged(p)}}
                >
                    {p}
                </span>
            })}
            {portionNumber <= totalPortionCount && <button onClick={() => {setPortionNumber(portionNumber+1)}}>NEXT</button>}
        </div>
    )
}

export default Paginator
