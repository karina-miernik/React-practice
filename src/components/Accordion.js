import React, { useState } from 'react'

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null)

  const handleOnTitleClick = (index) => {
    setActiveIndex(index)
  }
  const renderItems = items.map((item, index) => {
    return (
      <React.Fragment key={item.title}>
        <div onClick={() => handleOnTitleClick(index)} className="title active">
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className="content active">
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    )
  })

  return (
    <div className="ui styled accordion">
      {renderItems}
      <h1>{activeIndex}</h1>
    </div>
  )
}

export default Accordion
