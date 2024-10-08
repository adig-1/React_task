import React, { useState, useEffect } from "react";
import Dateinput from "./Dateinput";
import Time from "./Time";
import Inputs from "./Inputs";
import Result from "./Result";

const SessionForm = () => {
  const [formData, setFormData] = useState({
    startDate: "",
    endDate: "",
    startTime: "06:00",
    endTime: "",
    duration: "60", // Duration in minutes
    sessionInterval: "01",
    totalSessions: "",
  });
  
 
 const [generatedDates, setGeneratedDates] = useState([]);


 const generateDates = () => {
   let dates = [];
   let currentDate = new Date(formData.startDate);
   
   for (let i = 0; i < parseInt(formData.totalSessions); i++) {
     dates.push(new Date(currentDate)); 
     currentDate.setDate(currentDate.getDate() + parseInt(formData.sessionInterval) + 1);
   }
   setGeneratedDates(dates);
 };

  const [savedData, setSavedData] = useState(null); 

  const calculateEndDate = (startDate, totalSessions, sessionInterval) => {
    if (!startDate || !totalSessions || !sessionInterval) return "";

    const start = new Date(startDate);
    const intervalDays = parseInt(sessionInterval);
    const total = parseInt(totalSessions);

    start.setDate(start.getDate() + ((total-1) * intervalDays)+total-1);
    return start.toISOString().split("T")[0]; 
  };

  
  const calculateEndTime = (startTime, duration) => {
    if (!startTime || !duration) return "";

    
    const [hours, minutes] = startTime.split(":").map(Number);
    const totalMinutes = hours * 60 + minutes + parseInt(duration);

    
    const newHours = Math.floor(totalMinutes / 60) % 24; 
    const newMinutes = totalMinutes % 60;

    return `${newHours.toString().padStart(2, "0")}:${newMinutes
      .toString()
      .padStart(2, "0")}`;
  };

  useEffect(() => {
    
    if (
      formData.startDate &&
      formData.totalSessions &&
      formData.sessionInterval
    ) {
      const endDate = calculateEndDate(
        formData.startDate,
        formData.totalSessions,
        formData.sessionInterval
      );
      setFormData({
        ...formData,
        endDate: endDate,
      });
    }
  }, [formData.startDate, formData.totalSessions, formData.sessionInterval]);

  useEffect(() => {

    if (formData.startTime && formData.duration) {
      const endTime = calculateEndTime(formData.startTime, formData.duration);
      setFormData({
        ...formData,
        endTime: endTime,
      });
    }
  }, [formData.startTime, formData.duration]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    generateDates();
    setSavedData(formData);
  };
   
  console.log(generatedDates)
  console.log(typeof(generatedDates))

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <label>Session Start Date</label>
        <Dateinput
          Date={formData.startDate}
          handleChange={handleChange}
          name="startDate"
        />

        <label>Total Number of Sessions</label>
        <Inputs
          value={formData.totalSessions}
          handleChange={handleChange}
          name="totalSessions"
          placeholder="Enter Number of Sessions"
        />

        <label>Session Interval (Days)</label>
        <Inputs
          value={formData.sessionInterval}
          handleChange={handleChange}
          name="sessionInterval"
        />

        <label>Tentative Last Session Date</label>
        <Dateinput
          Date={formData.endDate}
          handleChange={handleChange}
          name="endDate"
          readOnly={true}
        />

        <label>Session Start Time</label>
        <Time
          time={formData.startTime}
          handleChange={handleChange}
          name="startTime"
        />

        <label>Session Duration (Minutes)</label>
        <Inputs
          value={formData.duration}
          handleChange={handleChange}
          name="duration"
        />

        <label>Session End Time</label>
        <Time
          time={formData.endTime}
          handleChange={handleChange}
          name="endTime"
          readOnly={true}
        />

        <button type="submit" className="btn btn-primary mt-3">
          Save
        </button>
      </form>

      {savedData && (
        <Result generatedDates={generatedDates} savedData={savedData} />
      )}
    </div>
  );
};

export default SessionForm;
