import { useNavigate } from "react-router";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">

      {/* Title */}
      <h1 className="text-5xl font-bold text-gray-700 mb-6">
        Employee Management App
      </h1>

      {/* Description */}
      <p className="text-xl text-gray-500 mb-10 text-center max-w-xl">
        Manage your employees easily. Add new employees, view employee details,
        and keep everything organized in one place.
      </p>

      {/* Buttons */}
      <div className="flex gap-6">
        <button
          onClick={() => navigate("/create")}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl text-lg shadow-md"
        >
        Create Employee
        </button>

        <button
          onClick={() => navigate("/employees")}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl text-lg shadow-md"
        > View Employees
        </button>
      </div>
    </div>
  );
}
export default Home;