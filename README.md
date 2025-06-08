# Password Validation App

A simple React-based password validation app that provides real-time feedback to users as they type their password. It checks for strength, character requirements, and provides visual cues for a better user experience.

## 🚀 Features

- Real-time password strength validation
- Progressive strength indicator (Weak to Very Strong)
- Password visibility toggle (Show/Hide)
- Visual progress bar showing strength percentage
- Clean and modern UI with card-based design
- Built with React, HTML, and CSS

## 📊 Password Strength Criteria

- Minimum 8 characters required
- Contains numbers (1-9)
- Contains special characters (!@#$%^&*()_+ etc.)
- Contains uppercase letters (A-Z)

The password strength is calculated based on these criteria and displayed with a progress bar and strength indicator.

## 📸 Preview
![Screenshot 2025-06-07 132710](https://github.com/user-attachments/assets/01606f7f-21e9-42b4-bbab-0658430e3d1f)
![Screenshot 2025-06-07 132752](https://github.com/user-attachments/assets/1c17e575-b73d-41b0-9a54-975d0cf8c948)
![Screenshot 2025-06-07 132806](https://github.com/user-attachments/assets/22670ec1-685d-4a13-b59a-b60b7dd5667e)
![Screenshot 2025-06-07 132824](https://github.com/user-attachments/assets/deaa3bb5-d580-4307-b0f3-d19745ce0769)
![Screenshot 2025-06-07 132842](https://github.com/user-attachments/assets/e6efa714-d6c2-4ef9-83aa-811efe08dd31)

## 🛠️ Technologies Used

- React.js
- JavaScript (ES6+)
- HTML5
- CSS3
- Create React App

## 📁 Project Structure

```
password_validation/
├── public/
├── src/
│   ├── App.js
│   ├── App.css
│   ├── index.css
│   └── index.js
├── package.json
├── package-lock.json
└── README.md
```

## ⚙️ Setup Instructions

1. Ensure Node.js is installed on your system (version 14 or higher)

2. Install project dependencies
```bash
npm install
```

3. Start the development server
```bash
npm start
```

The app will start in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will automatically reload when you make changes to the source files.

4. Build for production
```bash
npm run build
```

The build will create a `build` folder with optimized files ready for production deployment.

5. Run tests
```bash
npm test
```

Runs the test suite with Jest.

The app will start in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

4. Build for production
```bash
npm run build
```

The build will create a `build` folder with optimized files ready for production deployment.

## ✅ Validation Criteria (Example)

- At least 8 characters
- At least 1 uppercase letter
- At least 1 number
- At least 1 special character (!@#$%^&*)
- No spaces allowed

You can customize these rules in the `PasswordValidator.js` file located in the `src/components` directory.

Made with ❤️ by Tania

