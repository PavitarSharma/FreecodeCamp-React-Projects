import React from 'react'

const Qestions = ({ title, info }) => {
  const [showInfo, setShowInfo] = React.useState(false)

  return (
    <div className="question">
      <nav className='question__header'>
        <h4>{title}</h4>
        <div>
          <button className="btn" onClick={() => setShowInfo(!showInfo)}>
            {showInfo ? "-" : "+"}
          </button>
        </div>
      </nav>

      {showInfo && <p className="question__info">{info}</p>}
    </div>
  )
}

export default Qestions