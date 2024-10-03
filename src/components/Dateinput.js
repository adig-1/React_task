import React from 'react'

const Dateinput = (props) => {
  return (
    <div className="form-group">
          
          <input
            type="date"
            name={props.name}
            value={props.Date}
            onChange={props.handleChange}
            className="form-control"
            placeholder="DD/MM/YYYY"
            readOnly={props.readOnly}
            min="2023-01-01"
          />
        </div>
  )
}

export default Dateinput