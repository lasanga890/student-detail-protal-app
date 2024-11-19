
import './App.css';
import {students} from '../src/assets/data/studentdb.js'
import StudentTable from './components/StudentTable';

function App() {
  return (
    <>
    <h1>Students Information Portal</h1>

    <table>
      <tbody>
      <tr>
        <td><StudentTable students={students} /></td>

      </tr>
      </tbody>
    </table>
    </>
  );
}

export default App;
