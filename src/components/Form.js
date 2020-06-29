import React from 'react'

function Form(props) {
  console.log(props)
    return (
        <form onSubmit={props.handleSubmit}>
            <h1>
              Awesome Weather App
            </h1>
            <input
              value={props.location}
              placeholder={props.location ? props.location : 'Type here'}
              type="text"
              onChange={props.handleChange}
            />
        </form>
    )
}

export default Form
