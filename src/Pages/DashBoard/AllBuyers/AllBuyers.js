import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import toast from "react-hot-toast";
import ConfirmationModal from "../../Shared/ConfirmationModal/ConfirmationModal";
import Loading from "../../Shared/Loading/Loading";

const AllBuyers = () => {
  const [deletingBuyer, setDeletingBuyer] = useState(null);

  const closeModal = () => {
    setDeletingBuyer(null);
  };

  const url = `https://books-store-server-delta.vercel.app/buyers?role=${"Buyer"}`;

  const {
    data: buyers = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["buyers", "Buyer"],
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

  const handleDeleteBuyer = (buyer) => {
    fetch(`https://books-store-server-delta.vercel.app/buyer/${buyer._id}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success(`Buyer deleted successfully`);
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
        All <span className="text-primary">Buyers</span> Are Here
      </h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Admin</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {buyers.map((buyer, i) => (
              <tr key={buyer._id}>
                <th>{i + 1}</th>
                <td>{buyer.name}</td>
                <td>{buyer.email}</td>
                <td>
                  {buyer?.role !== "admin" && (
                    <button
                      onClick={() => handleMakeAdmin(buyer._id)}
                      className=" btn btn-xs btn-primary"
                    >
                      Make Admin
                    </button>
                  )}
                </td>
                <td>
                  <label
                    onClick={() => setDeletingBuyer(buyer)}
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
      {deletingBuyer && (
        <ConfirmationModal
          title={`Are You Sure You Want To Delete`}
          closeModal={closeModal}
          successAction={handleDeleteBuyer}
          modalData={deletingBuyer}
          message={`If You Delete ${deletingBuyer.name} . It Cannot Be Undone`}
        ></ConfirmationModal>
      )}
    </div>
  );
};

export default AllBuyers;
