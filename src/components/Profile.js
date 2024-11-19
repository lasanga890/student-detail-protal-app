import "../assets/css/compo.css";

export default function Profile(props) {
  console.log(props.students)
  return (
    <>
      <table border={1}>
        <tr >
          <td rowSpan={7}><img
            className="profile"
            src={require("../assets/img/"+props.students.profilePic )}
            alt="Profile"
          /></td>
           <td>ID : {props.students.studentId}</td>
        </tr>
       
        <tr><td>Full Name : {props.students.firstName + " " + props.students.lastName}</td></tr>
        <tr> <td>Age : {props.students.age}</td></tr>
        <tr> <td>Course : {props.students.course}</td></tr>
        <tr> <td>Gender : {props.students.gender}</td></tr>
        <tr> <td>Country : {props.students.address.city + " " + props.students.address.country}</td></tr> 
  <tr> <td>Skills : {props.students.skills.map(skill=>skill)+","}</td></tr> 
      </table>
    </>
  );
}
