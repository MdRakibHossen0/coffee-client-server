import React from "react";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const {_id,name, quantity, price, photo, taste, details, supplier } =
    useLoaderData();
  const handleUpdateCoffee = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const updatedCoffee = Object.fromEntries(formData.entries());
    console.log(updatedCoffee);


    //send updated coffee to the db
    fetch(`http://localhost:3000/coffees/${_id}`,{
        method: 'PUT',
        headers: {
            'content-type':'application/json'
        },
        body:JSON.stringify(updatedCoffee)
    
    })
      .then((res) => res.json())
      .then((data) => {

        if (data.modifiedCount) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "coffee updated successfully",
              showConfirmButton: false,
              timer: 1500,
            });

        }
        // console.log(data);
      });
  };
  return (
    <div>
      <div className="p-24">
        <div className="p-12 text-center space-y-4">
          <h1 className="text-6xl">Update Coffee</h1>
        </div>
        <form onSubmit={handleUpdateCoffee}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
              <label className="label">Name</label>
              <input
                type="text"
                defaultValue={name}
                name="name"
                className="input w-full"
                placeholder="Coffee Name"
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
              <label className="label">Quantity</label>
              <input
                type="text"
                defaultValue={quantity}
                name="quantity"
                className="input w-full"
                placeholder="Quantity Name"
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
              <label className="label">Supplier</label>
              <input
                type="text"
                defaultValue={supplier}
                name="supplier"
                className="input w-full"
                placeholder="Supplier Name"
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
              <label className="label">Taste</label>
              <input
                type="text"
                defaultValue={taste}
                name="taste"
                className="input w-full"
                placeholder="Taste Name"
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
              <label className="label">Price</label>
              <input
                type="text"
                defaultValue={price}
                name="price"
                className="input w-full"
                placeholder="Price per Cup"
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
              <label className="label">Details</label>
              <input
                type="text"
                defaultValue={details}
                name="details"
                className="input w-full"
                placeholder="Details Name"
              />
            </fieldset>
          </div>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4 my-6">
            <label className="label">Photo</label>
            <input
              type="text"
              defaultValue={photo}
              name="photo"
              className="input w-full"
              placeholder="Photo URL"
            />
          </fieldset>
          <input type="submit" className=" btn w-full" value="Add Coffee" />
        </form>
      </div>
    </div>
  );
};

export default UpdateCoffee;
