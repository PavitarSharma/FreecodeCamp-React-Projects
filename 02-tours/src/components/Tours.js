import React, { useState } from 'react'

const Tours = ({ tour, removeTour }) => {
    const [readMore, setReadMore] = useState(false);
    return (
        <>
            <article className="single-tour">
                <img src={tour.image} alt={tour.name} />

                <div className="tour-info">
                    <div className="tour-info-header">
                        <h4>{tour.name}</h4>
                        <h4 className="tour-price">${tour.price}</h4>
                    </div>

                    <p>
                        {readMore ? tour.info : `${tour.info.substring(0, 200)}...`}
                        <button onClick={() => setReadMore(!readMore)} style={{ border: "0", background: "#999", color: "#fff", cursor: "pointer", borderRadius: "4px" }}>
                            {readMore ? ' show less' : '  read more'}
                        </button>
                    </p>
                    <button className="delete-btn" onClick={() => removeTour(tour.id)}>
                        not interested
                    </button>
                </div>
            </article>
        </>
    )
}

export default Tours