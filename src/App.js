import React, { Component } from 'react';
import Coursers from './Components/Coursers';
import 'font-awesome/css/font-awesome.min.css'
import AddCourses from './Components/AddCourses';
import './App.css'
import swal from 'sweetalert';
import "animate.css"



class App extends Component {
  state = {
    courses : [
      {name: 'reactjs'},
      {name: 'angular'},
      {name: 'laravel'},

      
    ],

    current: ''
    
  }


  // update courses 
  updatCourse = (event)=>{
    this.setState({
      current:event.target.value
    })
  }

  // add course

  handlsubmit = (event) =>{
    event.preventDefault();
    let current = this.state.current;
    let courses = this.state.courses;
    courses.push({name:current});
    this.setState({
      courses,
      current: ''
    })
    swal("Good job!" , "your course is added with succes" , "success")
  }

  // delet courses

  handlDelet = (index) =>{
    let courses = [...this.state.courses];
    courses.splice(index,1);
    this.setState({courses})
  }

  // edit course

  editCourse = (index,value) =>{
    const courses = this.state.courses;
    let course = courses[index];
    course["name"] = value;
    this.setState({course})
  }

  
  

  render() {
    const {courses} = this.state;
    const courseList = courses.map((course,index)=>{
      return <Coursers editCourse={this.editCourse} data={course} index={index} handlDelet={this.handlDelet}  key={index}/>
    })
    return (
      <div className="App">
        <h1 className="animate__animated animate__flip">crud app</h1>
        <AddCourses current={this.state.current} handlsubmit={this.handlsubmit} updatCourse ={this.updatCourse}/>
        {courseList}
      </div>
    );
  }
}

export default App;

