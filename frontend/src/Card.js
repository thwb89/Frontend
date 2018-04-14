import React from 'react';

const Card = ({info}) => {
    
    let bg = info.favorite === 0 ? 'none' : 'red';
    //info의 favorite이 0이면 none 아니면 red
    
    return(
    <div key={info.id} className="card">
        <div className="item">
            <div className="photo">
            {info.name}
            </div>
            <div className="info">
                <h3>{info.recruit}</h3>
                <div className="name">{info.name}</div>
                <p>채용보상금 {info.rebate}원</p>
            </div>
            <div className="opt">
                <div className="recom">
                    {info.recommendation > 0 &&
                        <span>{info.recommendation}명 추천</span> }
                </div>
                <div className="favorite" 
                    style = {{background : bg}}></div>
            </div>
        </div>
    </div>
    )
}

export default Card;