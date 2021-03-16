import React from 'react'

const Pagination = (props) => {
    const{onLeftclick, onRightClick, page, totalPages} = props;

    return (
        <div className="pagination">
            <button onClick={onLeftclick}><i className="fas fa-angle-left"></i></button>
            <div>{page}-{totalPages}</div>
            <button onClick={onRightClick}><i className="fas fa-angle-right"></i></button>
        </div>
    )
}

export default Pagination;
