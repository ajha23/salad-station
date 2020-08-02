import React, { useState } from "react";

import "./user-details.scss";

export const UserDetails = ({ handelSubmit }) => {
  const initialstate = {
    name: "",
    email: "",
    notes: "",
  };

  const [state, setState] = useState(initialstate);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handelSubmit(state);
  };

  return (
    <div className="user-details">
      <h2 className="title">User Details</h2>
      <form className="user-details" onSubmit={handleSubmit}>
        <div className="group">
          <label className="form-input-label">
            Name:
            <input
              className="form-input"
              type="text"
              name="name"
              value={state.displayName}
              onChange={handleChange}
              required
            />
          </label>
        </div>

        <div className="group">
          <label className="form-input-label">
            Email:
            <input
              className="form-input"
              type="email"
              name="email"
              value={state.email}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div className="group">
        <label className="form-input-label">
            Additional Notes:
            <textarea
              className="form-input"
              name="notes"
              value={state.notes}
              onChange={handleChange}
            />
          </label>
          </div>
        <button type="submit">Order</button>
      </form>
    </div>
  );
};
