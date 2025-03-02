import React from 'react'
import { allCountriesDataType, WorldPagePropsType } from '../types'

const Card = ({allCountriesData} : WorldPagePropsType) => {
  return (
    <div className='card-container'>
      {allCountriesData.map((singleData, index) =>
        <div key={index} className='card'>
          <div>
            <h2>{singleData.Country.toLocaleString()}</h2>
            <p>新規感染者:<span>{singleData.NewConfirmed.toLocaleString()}</span></p>
            <p>感染者総数:<span>{singleData.TotalConfirmed.toLocaleString()}</span></p>
          </div>
        </div>)}
    </div>
  )
}

export default Card