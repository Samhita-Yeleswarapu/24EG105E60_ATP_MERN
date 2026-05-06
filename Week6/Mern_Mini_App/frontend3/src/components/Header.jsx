import { NavLink } from "react-router";

function Header() {
  return (
    <nav className="flex justify-between items-center px-10 py-4 bg-gray-800 text-white shadow-md">

      <h1 className="text-2xl font-bold">
        Employee Manager
      </h1>

      <div className="flex gap-8 text-lg">

        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-yellow-400" : "hover:text-gray-300"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/create"
          className={({ isActive }) =>
            isActive ? "text-yellow-400" : "hover:text-gray-300"
          }
        >
          Create
        </NavLink>

        <NavLink
          to="/employees"
          className={({ isActive }) =>
            isActive ? "text-yellow-400" : "hover:text-gray-300"
          }
        >
          Employees
        </NavLink>

      </div>
    </nav>
  );
}

export default Header;