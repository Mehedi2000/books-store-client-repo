import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../Contexts/AuthProvider";

const BookingModal = ({ product, setProduct }) => {
  const { title, resalePrice, img } = product;

  const { user } = useContext(AuthContext);

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const title = form.title.value;
    const price = form.price.value;
    const location = form.location.value;
    const phone = form.phone.value;
    const img = form.img.value;

    const booking = {
      name,
      email,
      title,
      price,
      phone,
      location,
      img,
    };

    fetch("http://localhost:8000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          setProduct(null);
          toast.success("Booking Confirmed");
        } else {
          toast.error(data.message);
          setProduct(null);
        }
      });
  };
  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 gap-3 mt-8"
          >
            <input
              name="name"
              type="text"
              defaultValue={user?.displayName}
              disabled
              placeholder="Your Name"
              className="input w-full input-bordered"
            />
            <input
              name="email"
              type="email"
              defaultValue={user?.email}
              disabled
              placeholder="Email address"
              className="input w-full input-bordered"
            />
            <input
              name="title"
              type="text"
              defaultValue={title}
              disabled
              placeholder="Your Name"
              className="input w-full input-bordered"
            />
            <input
              name="price"
              type="text"
              defaultValue={resalePrice}
              disabled
              placeholder="Your Name"
              className="input w-full input-bordered"
            />
            <input
              name="phone"
              type="text"
              placeholder="Phone Number"
              className="input w-full input-bordered"
            />
            <input
              name="location"
              type="text"
              placeholder="Location"
              className="input w-full input-bordered"
            />
            <input
              name="img"
              type="text"
              defaultValue={img}
              disabled
              placeholder="img"
              className="input w-full input-bordered"
            />
            <br />
            <input
              type="submit"
              className="w-full btn btn-primary"
              value="SUBMIT"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
