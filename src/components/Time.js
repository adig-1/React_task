import React from 'react'

const Time = (props) => {
  return (
    <div className="form-group">
      <input
        type="time"
        name={props.name}
        value={props.time}
        onChange={props.handleChange}
        className="form-control"
      />
    </div>
  );
}

export default Time