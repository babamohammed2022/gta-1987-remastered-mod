import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";

const ModFeedbackSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false); // hidden by default
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
    <>
      {/* Toggle button to show/hide the section */}
      <button onClick={() => setIsVisible(!isVisible)} style={{ margin: "1rem", padding: "0.5rem 1rem" }}>
        {isVisible ? "" : ""}
      </button>

      {isVisible && (
        <section className="feedback-section" aria-label="Mod Review & Bug Report Section">
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

          {/* Embedded CSS styles */}
          <style>{`
            .feedback-section {
              font-family: Arial, sans-serif;
              background: #121212;
              color: #eee;
              display: flex;
              justify-content: center;
              padding: 2rem;
              min-height: 100vh;
              box-sizing: border-box;
            }
            .feedback-card {
              background: #1e1e1e;
              padding: 2rem;
              border-radius: 8px;
              width: 100%;
              max-width: 480px;
              box-shadow: 0 0 12px #00ccff;
              box-sizing: border-box;
            }
            .feedback-card h2 {
              margin-bottom: 0.25rem;
              text-align: center;
              color: #00ccff;
            }
            .feedback-description {
              font-size: 0.9rem;
              margin-bottom: 1.5rem;
              color: #bbb;
              text-align: center;
            }
            form label {
              display: block;
              margin-top: 1rem;
              font-weight: bold;
            }
            .radio-group {
              display: flex;
              gap: 1rem;
              margin-top: 0.5rem;
              justify-content: center;
            }
            .radio-group label {
              margin: 0;
              font-weight: normal;
              cursor: pointer;
              user-select: none;
            }
            .radio-group input[type="radio"] {
              margin-right: 0.25rem;
              cursor: pointer;
            }
            #usernameContainer input[type="text"],
            select,
            textarea {
              width: 100%;
              padding: 0.5rem;
              border: none;
              border-radius: 4px;
              background: #2c2c2c;
              color: #eee;
              font-size: 1rem;
              margin-top: 0.25rem;
              margin-bottom: 1rem;
              box-sizing: border-box;
            }
            #usernameContainer input[type="text"] {
              margin-bottom: 1rem;
            }
            select {
              appearance: none;
              -webkit-appearance: none;
              -moz-appearance: none;
            }
            textarea {
              min-height: 100px;
              resize: vertical;
            }
            button[type="submit"] {
              background: #00ccff;
              border: none;
              padding: 0.75rem 1.5rem;
              border-radius: 4px;
              color: #121212;
              font-weight: bold;
              font-size: 1.1rem;
              cursor: pointer;
              width: 100%;
              transition: background-color 0.3s ease;
              margin-top: 1rem;
            }
            button[type="submit"]:hover {
              background-color: #0099cc;
            }
            .feedback-message {
              margin-top: 1rem;
              padding: 0.75rem;
              border-radius: 4px;
              font-weight: bold;
              text-align: center;
              color: white;
              display: block;
              box-sizing: border-box;
            }
            .feedback-message.success {
              background-color: #28a745;
            }
            .feedback-message.error {
              background-color: #dc3545;
            }
          `}</style>
        </section>
      )}
    </>
  );
};

export default ModFeedbackSection;
