import React from 'react';
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

import './Widgets.css';

const Widgets = () => {

  const newsArticle = (heading, subtitle) => {
    return <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  }

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>

      {newsArticle("Russia has annexed Ukrainian territories", "Top News - 90099 readers")}
      {newsArticle("Coronavirus has been eradiated - Biden", "Top News - 50099 readers")}
      {newsArticle("Narendra Modi launches 5G Technology", "Top News - 70199 readers")}
      {newsArticle("Beef between Elon Musk and Twitter CEO Parag becomes public", "Top News - 20020 readers")}
    </div>
  )
}

export default Widgets