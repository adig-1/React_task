import React from 'react'

const Result = (props) => {
  return (
    <div className="card saved-data m-4">
      <h3>Session Information:</h3>
      <p>
        <strong>Start Date:</strong> {props.startDate}
      </p>
      <p>
        <strong>Total Sessions:</strong> {props.totalSessions}
      </p>
      <p>
        <strong>Session Interval (Days):</strong> {props.sessionInterval}
      </p>
      <p>
        <strong>Last Session Date:</strong> {props.endDate}
      </p>
      <p>
        <strong>Start Time:</strong> {props.startTime}
      </p>
      <p>
        <strong>Duration (Minutes):</strong> {props.duration}
      </p>
      <p>
        <strong>End Time:</strong> {props.endTime}
      </p>
    </div>
  );
}

export default Result