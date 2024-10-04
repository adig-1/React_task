


import React from "react";

const Result = ({ generatedDates, savedData }) => {
  return (<div className="container">
    <table className="table table-striped mt-10">
      <thead>
        <tr>
          <th scope="col">S.No</th>
          <th scope="col">Session Date</th>
          <th scope="col">Start Time</th>
          <th scope="col">End Time</th>
          <th scope="col">Duration</th>
        </tr>
      </thead>
      <tbody>
        {generatedDates.map((item, ind) => (
          <tr key={ind}>
            <th scope="row">{ind + 1}</th>
            <td>{item.toISOString().split("T")[0]}</td>
            <td>{savedData.startTime}</td>
            <td>{savedData.endTime}</td>
            <td>{`${savedData.duration} Mins`}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default Result;
