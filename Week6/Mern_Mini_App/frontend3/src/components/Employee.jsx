import { useLocation, useNavigate } from "react-router";

function Employee() {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) {
    return (
      <div className="text-center mt-10">
        <p className="text-xl">No employee data found</p>

        <button
          onClick={() => navigate("/employees")}
          className="mt-4 p-2 bg-gray-600 text-white rounded"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl p-10 text-center w-[350px]">

        <h2 className="text-2xl font-bold mb-6 text-gray-700">
          Employee Details
        </h2>

        <p className="mb-2"><span className="font-semibold">Name:</span> {state.name}</p>
        <p className="mb-2"><span className="font-semibold">Email:</span> {state.email}</p>
        <p className="mb-2"><span className="font-semibold">Mobile:</span> {state.mobile}</p>
        <p className="mb-2"><span className="font-semibold">Designation:</span> {state.designation}</p>
        <p className="mb-2"><span className="font-semibold">Company:</span> {state.companyName}</p>

        <button
          onClick={() => navigate("/employees")}
          className="mt-6 bg-gray-700 text-white px-4 py-2 rounded"
        >
          Back
        </button>

      </div>
    </div>
  );
}

export default Employee;