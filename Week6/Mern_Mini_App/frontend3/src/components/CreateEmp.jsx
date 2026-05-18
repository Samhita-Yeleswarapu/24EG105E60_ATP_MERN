import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router";

function CreateEmp() {

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();


  // submit form
  const onFormSubmit = async (newEmpObj) => {

    try {

      setLoading(true);

      setError("");

      console.log(newEmpObj);

      const response = await fetch(
        "https://two4eg105e60-atp-mern.onrender.com/employee-api/employees",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json"
          },

          body: JSON.stringify(newEmpObj)
        }
      );

      const data = await response.json();

      console.log(data);

      if (!response.ok) {
        throw new Error(data.message);
      }

      navigate("/employees");

    } catch (err) {

      console.log(err);

      setError(err.message);

    } finally {

      setLoading(false);
    }
  };


  if (loading) {
    return (
      <p className="text-center text-4xl">
        Loading....
      </p>
    );
  }


  return (

    <div>

      <h1 className="text-5xl text-center text-gray-600">
        Create New Employee
      </h1>

      {error && (
        <p className="text-red-500 text-center text-2xl">
          {error}
        </p>
      )}

      <form
        className="max-w-md mx-auto mt-10"
        onSubmit={handleSubmit(onFormSubmit)}
      >

        <input
          type="text"
          placeholder="Enter name"
          {...register("name", {
            required: "Name is required"
          })}
          className="mb-3 p-3 w-full rounded-2xl"
        />

        <input
          type="email"
          placeholder="Enter email"
          {...register("email", {
            required: "Email is required"
          })}
          className="mb-3 p-3 w-full rounded-2xl"
        />

        <input
          type="text"
          placeholder="Enter mobile number"
          {...register("mobile", {
            required: "Mobile number is required"
          })}
          className="mb-3 p-3 w-full rounded-2xl"
        />

        <input
          type="text"
          placeholder="Enter designation"
          {...register("designation", {
            required: "Designation is required"
          })}
          className="mb-3 p-3 w-full rounded-2xl"
        />

        <input
          type="text"
          placeholder="Enter company name"
          {...register("companyName", {
            required: "Company name is required"
          })}
          className="mb-3 p-3 w-full rounded-2xl"
        />

        <button
          type="submit"
          className="text-2xl rounded-2xl bg-gray-600 text-white block mx-auto p-4"
        >
          Add Employee
        </button>

      </form>

    </div>
  );
}

export default CreateEmp;
