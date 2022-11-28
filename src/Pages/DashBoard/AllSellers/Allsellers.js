import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../Contexts/AuthProvider";
import ConfirmationModal from "../../Shared/ConfirmationModal/ConfirmationModal";
import Loading from "../../Shared/Loading/Loading";

const Allsellers = () => {
  const [deletingSeller, setDeletingSeller] = useState(null);

  const closeModal = () => {
    setDeletingSeller(null);
  };

  const url = `https://books-store-server-delta.vercel.app/sellers?role=${"Seller"}`;

  const {
    data: sellers = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["sellers", "Seller"],
    queryFn: async () => {
      const res = await fetch(url, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });

  const handleDeleteSeller = (seller) => {
    console.log(seller);
    fetch(`https://books-store-server-delta.vercel.app/seller/${seller._id}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success(`Seller deleted successfully`);
          refetch();
        }
      });
  };

  const handleMakeAdmin = (id) => {
    fetch(`https://books-store-server-delta.vercel.app/users/admin/${id}`, {
      method: "PUT",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Make Admin Successfully");
          refetch();
        }
      });
  };

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <h1 className="text-center text-4xl font-bold mb-10">
        All <span className="text-primary">Sellers</span> Are Here
      </h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Admin</th>
              <th>Verify</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {sellers.map((seller, i) => (
              <tr key={seller._id}>
                <th>{i + 1}</th>
                <td>{seller.name}</td>
                <td>{seller.email}</td>
                <td>
                  {seller?.role !== "admin" && (
                    <button
                      onClick={() => handleMakeAdmin(seller._id)}
                      className=" btn btn-xs btn-primary"
                    >
                      Make Admin
                    </button>
                  )}
                </td>
                <td>
                  <button className="btn btn-xs btn-info">Verify Seller</button>
                </td>
                <td>
                  <label
                    onClick={() => setDeletingSeller(seller)}
                    htmlFor="confirmation-modal"
                    className="btn btn-sm btn-danger"
                  >
                    Delete
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {deletingSeller && (
        <ConfirmationModal
          title={`Are You Sure You Want To Delete`}
          closeModal={closeModal}
          successAction={handleDeleteSeller}
          modalData={deletingSeller}
          message={`If You Delete ${deletingSeller.name} . It Cannot Be Undone`}
        ></ConfirmationModal>
      )}
    </div>
  );
};

export default Allsellers;
