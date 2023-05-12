import "../styles/admin.style.css";
import AdminSidebar from "../components/admin_sidebar";
import ExcusesTable from "../components/excuses_table";

const Admin = () => {
  return (
    <div className="admin-container p-2">
      <h1>Admin page</h1>
      <div className="d-flex p-5">
        <AdminSidebar />
        <ExcusesTable />
      </div>
    </div>
  );
};

export default Admin;
