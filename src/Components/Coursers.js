import './Courses.css'
import React, { Component , Fragment } from 'react';
import swal from 'sweetalert';


export default class Coursers extends Component {
  constructor(props){
    super(props);
    this.state = {
      edit:true

    }

  }

  ToggleState = () =>{
    this.setState({edit:!this.state.edit})
  }


  submitEdit = (e) =>{
    e.preventDefault();
    if(this.input.value === ""){
      alert('input vide')
    }else{
      this.props.editCourse(this.props.index,this.input.value)
      this.ToggleState();
      swal('Good Job' , 'your course is updated with success' , 'success')
    }
    

  }

  UpdateVlaue = ()=>{
        return(
          <form >
            <input required ref={(v)=>{this.input = v}} defaultValue={this.props.data.name} className="course-udated" type="text"/>
            <input onClick={this.submitEdit} type='submit' className="btn-update" value="update"/>
          </form>
    
        )
  }

  showCourses = () =>{
    return(
      <ul>
          <li className="course-name" ><h3>{this.props.data.name}</h3></li>
          <li><i onClick={this.ToggleState} className="edit fa fa-edit"></i></li>
          <li><i onClick={()=>{this.props.handlDelet(this.props.index)}} className="delet fa fa-times"></i></li>
      </ul>
    )
  }

  render() {
    return (
      <Fragment>
        {this.state.edit?this.showCourses():this.UpdateVlaue()}
      </Fragment>
    );
  }
}


// import React, {Fragment,useState} from 'react';

// export default function Coursers(props) {
//   const submitEdit = (e) =>{
//     e.preventDefault();
//     props.editCourse(props.index)
//     ToggleState();

//   }

 

//   const ToggleState=()=>{
//     setIdit(!edit)
//   }

//   const [edit,setIdit] =useState(true)
//   const UpdateVlaue = ()=>{
//     return(
//       <form onClick={submitEdit}>
//         <input defaultValue={props.data.name} className="course-udated" type="text"/>
//         <input type='submit' className="btn-update" value="update"/>
//       </form>

//     )
//   }

//   let showCourses = () =>{
//     return(
//       <ul>
//           <li className="course-name" ><h3>{props.data.name}</h3></li>
//           <li><i onClick={ToggleState} className="edit fa fa-edit"></i></li>
//           <li><i onClick={()=>{props.handlDelet(props.index)}} className="delet fa fa-times"></i></li>
//       </ul>
//     )
//   }
  
//   return (
//       <Fragment>

//         {edit?showCourses():UpdateVlaue()}
        
//       </Fragment>
//   );
// }




