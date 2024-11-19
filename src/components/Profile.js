import "../assets/css/compo.css";

export default function Profile(props) {
  return (
    <>
      <table>
        <tr rowSpan={7}>
          <img
            className="profile"
            src={require("../assets/img/1.jpg" )}
            alt="Profile"
          />
          <td>{props.students.studentId}</td>
        </tr>
      </table>
    </>
  );
}
