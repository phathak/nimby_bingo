import { SubjectContext } from "../contexts/subject";
import { useContext } from "react";
import { getSubjectItems } from "../data";

const ExcusesTable = () => {
  const tableStyle = {
    color: "rgb(209, 211, 228)",
  };
  const { currentSubject } = useContext(SubjectContext);
  const items = getSubjectItems(currentSubject);

  return (
    <>
      <table style={tableStyle} className="table">
        <thead>
          <tr>
            <th>Category</th>
            <th>French</th>
            <th>English</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td key={index + 100000}>Bicycle</td>
              <td key={item}>{item}</td>
              {/* <td key={item}>{item}</td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ExcusesTable;
