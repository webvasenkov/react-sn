import React, {useState} from 'react'
import style from "./Pagination.module.css"
import classNames from 'classnames'

const Pagination = ({itemsCountTotal, pageSize, onPageChange, currentPage, portionSize}) => {
    let countPages = Math.ceil(itemsCountTotal / pageSize)

    let pages = [] // array pages
    for (let i = 1; i <= countPages; i++) {
        pages.push(i)
    }

    let countPortion = Math.ceil(countPages / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortion = (portionNumber - 1) * portionSize + 1
    let rightPortion = portionNumber * portionSize

    return (
        <div className={style.pagination}>
            {portionNumber > 1 &&
            <button className={classNames(style.paginationBtn, style.paginationBtnLeft)} onClick={() => setPortionNumber(portionNumber - 1)}></button>
            }
            <ul className={style.paginationList}>
                {pages
                    .filter((page) => page >= leftPortion && page <= rightPortion)
                    .map((page) => {
                        return (
                            <li key={currentPage.toString()} onClick={(event) => onPageChange(page)}
                                className={classNames(style.paginationItem, {[style.paginationActive]: currentPage === page})}>{page}</li>
                        )
                    })}
            </ul>
            {countPortion !== portionNumber &&
            <button className={classNames(style.paginationBtn, style.paginationBtnRight)} onClick={() => setPortionNumber(portionNumber + 1)}></button>
            }
        </div>
    )
}

export default Pagination