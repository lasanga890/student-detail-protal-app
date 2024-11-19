import { useState } from "react";
import "../assets/css/compo.css";
import { students } from "../assets/data/studentdb";
import Profile from "./Profile";

export default function StudentTable(props) {
    const [data,setData] = useState(props.students[0])
  return (
    <>
      <div className="outerDiv">
        <div className="leftDiv">
          <table border={1}>
            <thead>
              <tr>
                <td>First Name</td>
                <td>Last Name</td>
                <td>Course</td>
                <td>Country</td>
                <td>Profile</td>
              </tr>
            </thead>
            <tbody>
              {props.students.map((student) => (
                <tr>
                  <td>{student.firstName}</td>
                  <td>{student.lastName}</td>
                  <td>{student.course}</td>
                  <td>{student.address.country}</td>
                <td><button onClick={(()=>setData(students))}>view</button></td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="rightDiv">
            <Profile students={data} />
          </div>
        </div>
      </div>
    </>
  );
}
