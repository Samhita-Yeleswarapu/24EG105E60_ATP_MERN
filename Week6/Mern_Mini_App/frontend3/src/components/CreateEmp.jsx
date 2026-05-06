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
    formState: { errors },
  } = useForm();

  // form submit
  const onFormSubmit = async (newEmpObj) => {
    try {
      setLoading(true);

      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/employees`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newEmpObj),
        }
      );

      if (res.status === 201) {
        navigate("/employees");
      } else {
        const errorRes = await res.json();
        throw new Error(errorRes.message);
      }

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <p className="text-center text-4xl">Loading....</p>;
  }

  return (
    <div>
      <h1 className="text-5xl text-center text-gray-600">
        Create New Employee
      </h1>

      {error && (
        <p className="text-red-500 text-center text-2xl">{error}</p>
      )}

      <form
        className="max-w-md mx-auto mt-10"
        onSubmit={handleSubmit(onFormSubmit)}
      >
        <input
          type="text"
          placeholder="Enter name"
          {...register("name", { required: true })}
          className="mb-3 p-3 w-full rounded-2xl"
        />

        <input
          type="email"
          placeholder="Enter Email"
          {...register("email", { required: true })}
          className="mb-3 p-3 w-full rounded-2xl"
        />

        <input
          type="text"
          placeholder="Enter mobile number"
          {...register("mobile", { required: true })}
          className="mb-3 p-3 w-full rounded-2xl"
        />

        <input
          type="text"
          placeholder="Enter designation"
          {...register("designation", { required: true })}
          className="mb-3 p-3 w-full rounded-2xl"
        />

        <input
          type="text"
          placeholder="Enter company name"
          {...register("companyName", { required: true })}
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