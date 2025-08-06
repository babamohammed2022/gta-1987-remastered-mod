import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";

const ModFeedbackSection: React.FC = () => {
  const [provideUsername, setProvideUsername] = useState<"yes" | "no">("no");
  const [username, setUsername] = useState("");
  const [feedbackType, setFeedbackType] = useState("");
  const [message, setMessage] = useState("");
  const [formMessage, setFormMessage] = useState<{ text: string; type: "success" | "error" | "" }>({ text: "", type: "" });

  useEffect(() => {
    emailjs.init("uUP7wxV3Ou46tH0Xj");
  }, []);

  const resetForm = () => {
    setProvideUsername("no");
    setUsername("");
    setFeedbackType("");
    setMessage("");
  };

  const showMessage = (text: string, type: "success" | "error") => {
    setFormMessage({ text, type });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormMessage({ text: "", type: "" });

    if (!feedbackType) {
      showMessage("Please select the type of feedback.", "error");
      return;
    }
    if (!message.trim()) {
      showMessage("Please enter your message.", "error");
      return;
    }
    if (provideUsername === "yes" && !username.trim()) {
      showMessage("Please enter your username or choose not to provide it.", "error");
      return;
    }

    const templateParams = {
      username: provideUsername === "yes" && username.trim() !== "" ? username.trim() : "Anonymous",
      feedbackType,
      message: message.trim(),
      time: new Date().toLocaleString(),
    };

    try {
      await emailjs.send("service_4gcm2dk", "template_y9b2l6a", templateParams);
      showMessage("Thank you! Your feedback has been sent successfully.", "success");
      resetForm();
    } catch (error) {
      showMessage("Sorry, there was an error sending your feedback. Please try again later.", "error");
    }
  };

  return (
    <section
      style={{
        fontFamily: "Arial, sans-serif",
        background: "#121212",
        color: "#eee",
        display: "flex",
        justifyContent: "center",
        padding: "2rem",
      }}
      aria-label="Mod Review & Bug Report Section"
    >
      <div
        style={{
          background: "#1e1e1e",
          padding: "2rem",
          borderRadius: 8,
          width: "100%",
          maxWidth: 480,
          boxShadow: "0 0 12px #00ccff",
        }}
      >
        <h2
          style={{
            marginBottom: "0.25rem",
            textAlign: "center",
            color: "#00ccff",
          }}
        >
          Mod Review & Bug Report
        </h2>
        <p
          className="description"
          style={{
            fontSize: "0.9rem",
            marginBottom: "1.5rem",
            color: "#bbb",
            textAlign: "center",
          }}
        >
          Use this form to share your review of the mod, provide suggestions for improvements, or report any bugs you encounter.
          You can choose to submit your feedback anonymously or include your username.
        </p>

        <form id="feedbackForm" onSubmit={handleSubmit} noValidate>
          <label>Do you want to provide your username?</label>
          <div
            className="radio-group"
            style={{
              display: "flex",
              gap: "1rem",
              marginBottom: "1rem",
              justifyContent: "center",
            }}
          >
            <label
              style={{ margin: 0, fontWeight: "normal", cursor: "pointer", userSelect: "none" }}
              htmlFor="username-yes"
            >
              <input
                type="radio"
                id="username-yes"
                name="provideUsername"
                value="yes"
                checked={provideUsername === "yes"}
                onChange={() => setProvideUsername("yes")}
                style={{ marginRight: "0.25rem", cursor: "pointer" }}
              />
              Yes
            </label>
            <label
              style={{ margin: 0, fontWeight: "normal", cursor: "pointer", userSelect: "none" }}
              htmlFor="username-no"
            >
              <input
                type="radio"
                id="username-no"
                name="provideUsername"
                value="no"
                checked={provideUsername === "no"}
                onChange={() => {
                  setProvideUsername("no");
                  setUsername("");
                }}
                style={{ marginRight: "0.25rem", cursor: "pointer" }}
              />
              No
            </label>
          </div>

          {provideUsername === "yes" && (
            <div id="usernameContainer">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                style={{
                  width: "100%",
                  padding: "0.5rem",
                  border: "none",
                  borderRadius: 4,
                  background: "#2c2c2c",
                  color: "#eee",
                  fontSize: "1rem",
                  marginTop: "0.25rem",
                  marginBottom: "1rem",
                }}
              />
            </div>
          )}

          <label htmlFor="feedbackType">Type of feedback</label>
          <select
            id="feedbackType"
            name="feedbackType"
            required
            value={feedbackType}
            onChange={(e) => setFeedbackType(e.target.value)}
            style={{
              width: "100%",
              padding: "0.5rem",
              border: "none",
              borderRadius: 4,
              background: "#2c2c2c",
              color: "#eee",
              fontSize: "1rem",
              marginTop: "0.25rem",
              marginBottom: "1rem",
            }}
          >
            <option value="" disabled>
              Select feedback type
            </option>
            <option value="Mod Review">Mod Review</option>
            <option value="Suggestion">Suggestion</option>
            <option value="Bug Report">Bug Report</option>
          </select>

          <label htmlFor="message">Your message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Write your feedback here..."
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            style={{
              width: "100%",
              padding: "0.5rem",
              border: "none",
              borderRadius: 4,
              background: "#2c2c2c",
              color: "#eee",
              fontSize: "1rem",
              marginTop: "0.25rem",
              marginBottom: "1rem",
              minHeight: 100,
              resize: "vertical",
            }}
          />

          <button
            type="submit"
            style={{
              background: "#00ccff",
              border: "none",
              padding: "0.75rem 1.5rem",
              borderRadius: 4,
              color: "#121212",
              fontWeight: "bold",
              fontSize: "1.1rem",
              cursor: "pointer",
              width: "100%",
              transition: "background-color 0.3s ease",
            }}
            onMouseEnter={(e) => ((e.currentTarget.style.backgroundColor = "#0099cc"))}
            onMouseLeave={(e) => ((e.currentTarget.style.backgroundColor = "#00ccff"))}
          >
            Send Feedback
          </button>
        </form>

        {formMessage.text && (
          <div
            role="alert"
            aria-live="assertive"
            style={{
              marginTop: "1rem",
              padding: "0.75rem",
              borderRadius: 4,
              fontWeight: "bold",
              textAlign: "center",
              backgroundColor: formMessage.type === "success" ? "#28a745" : "#dc3545",
              color: "white",
              display: "block",
            }}
          >
            {formMessage.text}
          </div>
        )}
      </div>
    </section>
  );
};

export default ModFeedbackSection;

