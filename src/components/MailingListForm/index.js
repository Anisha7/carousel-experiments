import React, { useState } from "react";
import "./styles.css";

const MailingListForm = () => {
  const [email, setEmail] = useState(null);
  const [error, setError] = useState(null);

  return (
    <div>
      <div className="flex">
        <input
          ref="email"
          name="email"
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <div>
          <button
            onClick={() => {
                try {
                    console.log(email)
                    // validate email
                    // else: send email to backend
                    setError(null)
                    setEmail(null)
                }
                catch (err) {
                    setError(err.message)
                }
            }}
          >
            JOIN
          </button>
          {error ? <p className="error">{error}</p> : null}
        </div>
      </div>
    </div>
  );
};

export default MailingListForm;
