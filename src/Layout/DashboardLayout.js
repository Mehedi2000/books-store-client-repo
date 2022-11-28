import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthProvider";
import useAdmin from "../hooks/useAdmin";
import useBuyer from "../hooks/useBuyer";
import useSeller from "../hooks/useSeller";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  const [isSeller] = useSeller(user?.email);
  const [isBuyer] = useBuyer(user?.email);
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
            {isBuyer && (
              <li>
                <Link
                  className="text-xl font-semibold"
                  to="/dashboard/myorders"
                >
                  My Orders
                </Link>
              </li>
            )}
            {isSeller && (
              <>
                <li>
                  <Link
                    className="text-xl font-semibold"
                    to="/dashboard/addProduct"
                  >
                    Add A Product
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-xl font-semibold"
                    to="/dashboard/myProducts"
                  >
                    My Products
                  </Link>
                </li>
              </>
            )}
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
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
