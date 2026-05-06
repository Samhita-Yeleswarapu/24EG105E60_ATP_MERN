import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

function ListOfEmps() {
  const [emps, setEmps] = useState([]);
  const navigate = useNavigate();

  const API = import.meta.env.VITE_API_URL;

  // VIEW
  const gotoEmployee = (empObj) => {
    navigate("/employee", { state: empObj });
  };

  // EDIT
  const gotoEditEmployee = (empObj) => {
    navigate("/edit-emp", { state: empObj });
  };

  // DELETE
  const deleteEmployee = async (email) => {
    try {
      const res = await fetch(
        `${API}/employees/${email}`,
        {
          method: "DELETE",
        }
      );

      if (res.status === 200) {
        setEmps((prev) => prev.filter((emp) => emp.email !== email));
      }

    } catch (err) {
      console.log("Error deleting:", err);
    }
  };

  // FETCH DATA
  useEffect(() => {
    async function getEmps() {
      let res = await fetch(`${API}/employees`);

      if (res.status === 200) {
        let resObj = await res.json();
        setEmps(resObj.payload);
      }
    }

    getEmps();
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">

      <h1 className="text-4xl text-center mb-8 text-gray-700">
        Employee List
      </h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

        {emps.map((empObj) => (
          <div
            key={empObj._id}
            className="bg-white p-5 text-center text-lg rounded-2xl shadow-lg"
          >
            <p className="font-semibold">{empObj.name}</p>
            <p className="text-gray-500">{empObj.email}</p>
            <p className="text-sm text-gray-400 mb-4">
              {empObj.companyName}
            </p>

            {/* Buttons */}
            <div className="flex justify-between gap-2">

              <button
                onClick={() => gotoEmployee(empObj)}
                className="bg-green-600 px-3 py-1 rounded-xl text-white"
              >
                View
              </button>

              <button
                onClick={() => gotoEditEmployee(empObj)}
                className="bg-yellow-500 px-3 py-1 rounded-xl text-white"
              >
                Edit
              </button>

              <button
                onClick={() => deleteEmployee(empObj.email)}
                className="bg-red-600 px-3 py-1 rounded-xl text-white"
              >
                Delete
              </button>

            </div>
          </div>
        ))}

      </div>
    </div>
  );
}

export default ListOfEmps;