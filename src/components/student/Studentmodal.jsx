import React from "react";
import "./modal.css";
const Studentmodal = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <form>
            <label>Name:</label>
            <input type="text" id="name" name="name" required />

            <label>Email:</label>
            <input type="email" id="email" name="email" required />

            <label>Roll:</label>
            <input type="text" id="roll" name="roll" required />

            <label>Photo:</label>
            <input type="file" id="photo" name="photo" accept="image/*" />

            <button type="submit">Submit</button>
          </form>
          <form action=""></form>
        </div>
      </div>
    </div>
  );
};

export default Studentmodal;
