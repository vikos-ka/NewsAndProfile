import React from 'react';

const News = (props) => {
    const date = new Date(props.publishedAt);
    const publishDate = date.toLocaleDateString()
    return (
        <div className ="row">
            <div className="col s12 m5">
                <div className="card">
                    <div className="card-image">
                        <img src={props.urlToImage}  alt="news"/>
                        
                    </div>
                    <div className="card-action">
                        <a href={props.url}>View page source</a>
                    </div>
                </div>
            </div>
            <div className="col s12 m7 card__content">
                <h4 className="card-title grey-text text-darken-3">{props.title}</h4>
                <p>{props.description}</p>

                <div className="news__footer">
                    <span>{publishDate}</span>
                    <span>{props.author}</span>
                </div>
            </div>
      </div>
    )
}

export default News