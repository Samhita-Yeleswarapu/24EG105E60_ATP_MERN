import { BrowserRouter, Routes, Route } from "react-router";

import RootLayout from "./components/RootLayout";
import Home from "./components/Home";
import CreateEmp from "./components/CreateEmp";
import ListOfEmps from "./components/ListOfEmps";
import EditEmployee from "./components/EditEmployee";
import Employee from "./components/Employee";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="create" element={<CreateEmp />} />
          <Route path="employees" element={<ListOfEmps />} />
          <Route path="edit-emp" element={<EditEmployee />} />
          <Route path="employee" element={<Employee />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;