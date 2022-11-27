import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthProvider";
import useAdmin from "../hooks/useAdmin";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  return (
    <div>
      <Navbar></Navbar>
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content ml-16 my-10">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-blue-800 text-white">
            <li>
              <Link className="text-xl font-semibold" to="/dashboard/myorders">
                My Orders
              </Link>
            </li>
            {isAdmin && (
              <>
                <li>
                  <Link
                    className="text-xl font-semibold"
                    to="/dashboard/sellers"
                  >
                    All Sellers
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-xl font-semibold"
                    to="/dashboard/buyers"
                  >
                    All Buyers
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-xl font-semibold"
                    to="/dashboard/reportedItems"
                  >
                    Reported Items
                  </Link>
                </li>
              </>
            )}

            {/* {isAdmin && (
              <>
                <li>
                  <Link to="/dashboard/users">All users</Link>
                  <Link to="/dashboard/adddoctor">Add A Doctor</Link>
                  <Link to="/dashboard/managedoctors">Manage Doctors</Link>
                </li>
              </>
            )} */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
