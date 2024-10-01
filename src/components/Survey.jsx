import { useState } from "react";

function Survey() {
  const [open, setOpen] = useState(false); // Ignore this state
  const [formData, setFormData] = useState({
    colour: "",
    timeSpent: [],
    review: "",
    username: "",
    email: ""
  });

  const handleChange = (change) => {
    const { name, value, type, checked } = change.target;
    if (type === "checkbox") {
      setFormData((prevData) => ({
        ...prevData,
        [name]: checked
          ? [...prevData[name], value]
          : prevData[name].filter((item) => item !== value)
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value
      }));
    }

    console.log(formData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {/* answers should go here */}
      </section>
      <section className="survey__form">
        <form className="form" onSubmit={handleSubmit}>
          <h2>Tell us what you think about your rubber duck!</h2>
          <div className="form__group radio">
            <h3>How do you rate your rubber duck colour?</h3>
            {/* Radio inputs go here */}
            <label>
              <input
                type="radio"
                name="colour"
                value="1"
                checked={formData.colour === "1"}
                onChange={handleChange}
              />{" "}
              1
            </label>
            <label>
              <input
                type="radio"
                name="colour"
                value="2"
                checked={formData.colour === "2"}
                onChange={handleChange}
              />{" "}
              2
            </label>
            <label>
              <input
                type="radio"
                name="colour"
                value="3"
                checked={formData.colour === "3"}
                onChange={handleChange}
              />{" "}
              3
            </label>
            <label>
              <input
                type="radio"
                name="colour"
                value="4"
                checked={formData.colour === "4"}
                onChange={handleChange}
              />{" "}
              4
            </label>
          </div>
          <div className="form__group">
            <h3>How do you like to spend time with your rubber duck</h3>
            {/* Checkboxes go here */}
            <label>
              <input
                type="checkbox"
                name="timeSpent"
                value="swimming"
                checked={formData.timeSpent.includes("swimming")}
                onChange={handleChange}
              />{" "}
              Swimming
            </label>
            <label>
              <input
                type="checkbox"
                name="timeSpent"
                value="bathing"
                checked={formData.timeSpent.includes("bathing")}
                onChange={handleChange}
              />{" "}
              Bathing
            </label>
            <label>
              <input
                type="checkbox"
                name="timeSpent"
                value="chatting"
                checked={formData.timeSpent.includes("chatting")}
                onChange={handleChange}
              />{" "}
              Chatting
            </label>
            <label>
              <input
                type="checkbox"
                name="timeSpent"
                value="noTime"
                checked={formData.timeSpent.includes("noTime")}
                onChange={handleChange}
              />{" "}
              I don't like to spend time with it
            </label>
          </div>
          <label>
            What else have you got to say about your rubber duck?
            <textarea
              name="review"
              cols="30"
              rows="10"
              value={formData.review}
              onChange={handleChange}
            ></textarea>
          </label>
          <label>
            Put your name here (if you feel like it):
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
          </label>
          <label>
            Leave us your email pretty please??
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          <input className="form__submit" type="submit" value="Submit Survey!" />
        </form>
      </section>
    </main>
  );
}

export default Survey;