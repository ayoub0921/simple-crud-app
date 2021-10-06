import React from 'react';
import './AddCourses.css'

export default function AddCourses(props) {
  return (
    <div>
        <form onSubmit={props.handlsubmit}>
            <input  className="course-input" value={props.current}  type="text" onChange={props.updatCourse} required/>
            <input type="submit" value="Add Courses" />
        </form>
    </div>
  );
}

