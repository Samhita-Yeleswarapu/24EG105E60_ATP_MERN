import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router";
import { useEffect } from "react";
import axios from "axios";

function EditEmployee() {
  const {
    register,
    handleSubmit,
    setValue,
  } = useForm();

  const navigate = useNavigate();
  const { state } = useLocation();

  useEffect(() => {
    if (state) {
      setValue("name", state.name);
      setValue("email", state.email);
      setValue("mobile", state.mobile);
      setValue("designation", state.designation);
      setValue("companyName", state.companyName);
    }
  }, [state, setValue]);

  const saveModifiedEmp = async (modifiedEmp) => {
    try {
      const res = await axios.put(
        `${import.meta.env.VITE_API_URL}/employees/${state.email}`,
        modifiedEmp
      );

      if (res.status === 200) {
        navigate("/employees");
      }

    } catch (err) {
      console.log("Error updating employee:", err);
    }
  };

  return (
    <div>
      <h1 className="text-5xl text-center text-yellow-600">
        Edit Employee
      </h1>

      <form
        className="max-w-md mx-auto mt-10"
        onSubmit={handleSubmit(saveModifiedEmp)}
      >
        <input
          type="text"
          placeholder="Enter name"
          {...register("name")}
          className="mb-3 p-3 w-full rounded-2xl"
        />

        <input
          type="email"
          placeholder="Enter Email"
          {...register("email")}
          className="mb-3 p-3 w-full rounded-2xl"
        />

        <input
          type="text"
          placeholder="Enter mobile number"
          {...register("mobile")}
          className="mb-3 p-3 w-full rounded-2xl"
        />

        <input
          type="text"
          placeholder="Enter designation"
          {...register("designation")}
          className="mb-3 p-3 w-full rounded-2xl"
        />

        <input
          type="text"
          placeholder="Enter company name"
          {...register("companyName")}
          className="mb-3 p-3 w-full rounded-2xl"
        />

        <button
          type="submit"
          className="text-2xl rounded-2xl bg-green-800 text-white block mx-auto p-4"
        >
          Save
        </button>
      </form>
    </div>
  );
}

export default EditEmployee;