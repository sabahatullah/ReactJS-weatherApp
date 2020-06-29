import React from 'react'

function Result(props) {
    console.log(props)
    return (
        <div className="result">
          {props.locationList.map((x)=>(
            <div key={x.id} className={x.value ? 'weather-info' : 'hidden'}>
                <div className="place">{x.value}, {x.country} </div> 
                <div className="weather">{x.weather}</div>
                <div className="temp">{x.temp}°</div>
                <div className="icon"><img className="image-icon" src={x.icon} width="60" /></div> </div>
          ))}
        </div>
    )
}

export default Result
