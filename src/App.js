import React, { useState } from 'react';
import './App.css'; // Import the CSS

const App = () => {
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [progress, setProgress] = useState(0);
  const [hidePassword, setHidePassword] = useState(true);

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    const strength = calculatePasswordStrength(newPassword);
    setMessage(strength.message);
    setProgress(strength.progress);
  };

  const calculatePasswordStrength = (password) => {
    let strength = 0;
    let message = "";
    if (password.length < 8) {
      message = "Password is too short";
    } else {
      strength += 1;
      if (/\d/.test(password)) strength += 1;
      if (/[!@#$%^&*()_+\-=\]{};':"\\|,.<>?]/.test(password)) strength += 1;
      if (/[A-Z]/.test(password)) strength += 1;

      if (strength === 1) message = "Weak";
      else if (strength === 2) message = "Medium";
      else if (strength === 3) message = "Strong";
      else message = "Very Strong";
    }

    return { message, progress: (strength / 4) * 100 };
  };

  const togglePasswordVisibility = () => {
    setHidePassword(!hidePassword);
  };

  return (
    <div className="app-container">
      <div className="card">
        <h2>Password Strength Checker 🔐</h2>
        <div className="input-group">
          <input
            type={hidePassword ? "password" : "text"}
            value={password}
            onChange={handlePasswordChange}
            placeholder="Enter your password"
          />
          <button className="toggle-btn" onClick={togglePasswordVisibility}>
            {hidePassword ? "Show" : "Hide"}
          </button>
        </div>
        <progress value={progress} max="100" className="progress-bar"></progress>
        <p className={`strength-msg ${message.toLowerCase().replace(" ", "-")}`}>
          {message}
        </p>
      </div>
    </div>
  );
};

export default App;
