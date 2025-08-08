import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import "./ModFeedbackSection.css"; // ✅ New stylesheet for styling

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
    <section className="feedback-section">
      <div className="feedback-card">
        <h2>Mod Review & Bug Report</h2>
        <p className="feedback-description">
          Use this form to share your review of the mod, provide suggestions for improvements, or report any bugs you encounter.
          You can choose to submit your feedback anonymously or include your username.
        </p>

        <form id="feedbackForm" onSubmit={handleSubmit} noValidate>
          <label>Do you want to provide your username?</label>
          <div className="radio-group">
            <label htmlFor="username-yes">
              <input
                type="radio"
                id="username-yes"
                name="provideUsername"
                value="yes"
                checked={provideUsername === "yes"}
                onChange={() => setProvideUsername("yes")}
              />
              Yes
            </label>
            <label htmlFor="username-no">
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
          />

          <button type="submit">Send Feedback</button>
        </form>

        {formMessage.text && (
          <div
            className={`feedback-message ${formMessage.type}`}
            role="alert"
            aria-live="assertive"
          >
            {formMessage.text}
          </div>
        )}
      </div>
    </section>
  );
};

export default ModFeedbackSection;
