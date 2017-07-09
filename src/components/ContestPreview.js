import React from 'react';

const ContestPreview =(props) =>{
    return(
        <div className="ContestPreview">
            <div className="category-name">
                {props.categoryName}
            </div>
            <div className="contest-name">
                {props.contestName}
            </div>
        </div>
    )
}

export default ContestPreview;