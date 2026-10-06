# 📅 React Date Counter

A modern and responsive **Date Counter Application built with React.js**.

This project allows users to increase or decrease the number of days from the current date using customizable step values. Users can control the step size through a range slider, navigate forward or backward by the selected number of days, and reset the application to its initial state.

The project was created as a React practice project to understand important React concepts such as **useState, controlled inputs, event handling, functional state updates, conditional rendering, JavaScript Date objects, and dynamic UI rendering**.

---

## 🚀 Live Demo

🔗 **Live Demo:**  
`Add your Netlify / Vercel live project link here`

---

## 📂 GitHub Repository

🔗 **GitHub Repository:**  
https://github.com/yaqoobbantwa123-code/Date-Counter-Project-With-Range-Selector-in-React.git

---

# 📸 Project Preview

Add your project screenshot here:

```text
Add your project screenshot / GIF here.

✨ Features
📅 Calculate future and past dates dynamically
➕ Increase the date counter
➖ Decrease the date counter
🎚️ Custom step selection using a range slider
🔢 Display the currently selected step value
🔄 Reset the application to its initial state
⚡ Real-time UI updates with React state
📱 Fully responsive design
🎨 Modern and clean user interface
✨ Smooth hover and active button effects
🧮 Dynamic date calculation using JavaScript Date
🔀 Supports both positive and negative date values
🧠 Conditional rendering for different date messages
🛠️ Technologies Used
Frontend
React.js
JavaScript (ES6+)
HTML5
CSS3
React Concepts
useState
Components
JSX
Event Handling
Controlled Inputs
Functional State Updates
Conditional Rendering
Dynamic Rendering
JavaScript Concepts
Date Object
getDate()
setDate()
toDateString()
Math.abs()
Arrow Functions
Template Literals
Ternary Operator
🧠 How the Project Works

The application mainly works with two pieces of React state:

const [step, setStep] = useState(1);
const [count, setCount] = useState(0);
Step

The step state determines how many days should be added or removed when the user clicks the + or - buttons.

For example:

step = 5

means every button click will change the counter by 5 days.

Count

The count state stores the number of days added to or subtracted from the current date.

For example:

count = 15

means the application will calculate the date 15 days from today.

If:

count = -5

the application calculates the date 5 days before today.

🎚️ Step Slider

The range slider controls the value of step.

<input
  type="range"
  min="1"
  max="10"
  value={step}
  onChange={(e) => setStep(Number(e.target.value))}
/>

The slider allows the user to select a value between:

1 → 10

For example:

Step = 1

A button click changes the counter by 1.

Step = 5

A button click changes the counter by 5.

Step = 10

A button click changes the counter by 10.

➕ Plus Button Logic

The + button uses the following function:

function handleNext() {
  setCount((count) => count + step);
}

Suppose:

count = 10
step = 5

After clicking the + button:

10 + 5 = 15

The new count becomes:

15
➖ Minus Button Logic

The - button uses:

function handlePrevious() {
  setCount((count) => count - step);
}

Suppose:

count = 15
step = 5

After clicking the - button:

15 - 5 = 10

The new count becomes:

10

The application also supports negative values.

For example:

count = -5

means five days before today.

📅 Date Calculation

The application uses JavaScript's built-in Date object.

const date = new Date();

This creates a date based on the current date and time.

Then:

date.setDate(date.getDate() + count);

calculates the required date.

Example

Suppose today is:

October 6, 2026

and:

count = 15

The application calculates:

October 6 + 15 days

and displays the resulting date.

🔢 Understanding getDate() and setDate()
getDate()
date.getDate()

returns the day of the month.

For example:

October 6 → 6
setDate()
date.setDate(...)

changes the day of the month.

So:

date.setDate(date.getDate() + count);

means:

Current Day + Count

This allows the application to calculate both future and past dates.

🔀 Conditional Rendering

The application uses a ternary operator to display different messages.

{count === 0
  ? "Today is "
  : `${Math.abs(count)} days ${
      count > 0 ? "from" : "ago"
    } today is `}
When count is 0

The application displays:

Today is ...
When count is positive

For example:

count = 15

The application displays:

15 days from today is ...
When count is negative

For example:

count = -5

The application displays:

5 days ago today is ...
🧮 Why Math.abs() Is Used

When the count is negative:

count = -5

we don't want to display:

-5 days ago

Instead, we want:

5 days ago

That's why the application uses:

Math.abs(count)

For example:

Math.abs(-5)

returns:

5
🔄 Reset Functionality

The Reset button returns the application to its initial state.

function handleReset() {
  setStep(1);
  setCount(0);
}

After clicking Reset:

step → 1
count → 0

The application returns to:

Today is ...
⚛️ React State Management

This project uses React's useState hook.

const [step, setStep] = useState(1);
const [count, setCount] = useState(0);

The first value stores the current state.

The second value is the function used to update that state.

For example:

step

stores the current step.

setStep()

updates the step.

Similarly:

count

stores the current count.

setCount()

updates the count.

🎯 Functional State Updates

The project uses functional state updates:

setCount((count) => count + step);

and:

setCount((count) => count - step);

This allows the update function to work with the latest state value.

It is especially useful when the new state depends on the previous state.

🎛️ Controlled Input

The range slider is a controlled input because its value is connected to React state.

<input
  type="range"
  value={step}
  onChange={(e) => setStep(Number(e.target.value))}
/>

The flow is:

User moves slider
       ↓
onChange runs
       ↓
e.target.value
       ↓
Number()
       ↓
setStep()
       ↓
React state updates
       ↓
UI updates
🖥️ Application Flow

The overall application flow is:

        Range Slider
             ↓
           step
             ↓
       +-----------+
       ↓           ↓
      +             -
       ↓           ↓
 count + step   count - step
       ↓           ↓
       +-----+-----+
             ↓
           count
             ↓
    Current Date + count
             ↓
        Calculated Date
             ↓
          UI Update
📁 Project Structure
date-counter/
│
├── public/
│
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
└── README.md
📄 File Responsibilities
App.jsx

Contains the main React component and application logic.

It handles:

React state
Slider
Counter
Date calculation
Plus button
Minus button
Reset button
Conditional rendering
App.css

Contains the main application styling.

It handles:

Layout
Slider styling
Buttons
Counter
Typography
Shadows
Borders
Hover effects
Responsive design
index.css

Contains global CSS rules such as:

CSS reset
Box sizing
Body styling
Global spacing
main.jsx

This file is responsible for rendering the React application into the DOM.

⚙️ Installation & Setup

Follow these steps to run the project locally.

1. Clone the Repository
git clone YOUR_GITHUB_REPOSITORY_URL
2. Navigate to the Project
cd date-counter
3. Install Dependencies
npm install
4. Start the Development Server
npm run dev

The project will then run on the local development server provided by Vite.

🚀 Create the Project from Scratch

If you want to create the project yourself using Vite:

npm create vite@latest date-counter -- --template react

Then:

cd date-counter

Install dependencies:

npm install

Start the project:

npm run dev
📱 Responsive Design

The application is designed to work across different screen sizes.

Desktop

The application provides:

Wide slider
Large counter
Comfortable spacing
Centered layout
Mobile

The layout automatically adjusts using CSS media queries.

The responsive design ensures:

Buttons remain accessible
Slider fits smaller screens
Text scales properly
Counter remains usable
Content stays centered
🎨 UI & Design

The interface uses a modern minimal design approach.

Design Features
Soft gradient background
Clean white cards
Rounded corners
Subtle shadows
Modern purple accent
Interactive buttons
Smooth hover effects
Responsive typography

The goal is to keep the interface simple while maintaining a professional appearance.

🧠 Key Learning Outcomes

By building this project, I practiced and strengthened my understanding of:

React functional components
useState
State management
State updates
Functional state updates
JSX
JavaScript expressions inside JSX
Event handling
onClick
onChange
Controlled inputs
Range inputs
Ternary operators
Template literals
JavaScript Date
Dynamic date calculations
Math.abs()
Conditional rendering
Responsive CSS
Component-based development
💡 Example Scenarios
Example 1
Step: 1
Count: 0

Result:

Today is ...
Example 2
Step: 5
Count: 15

Result:

15 days from today is ...
Example 3
Step: 5
Count: -10

Result:

10 days ago today is ...
🔮 Future Improvements

Possible improvements for future versions include:

🌙 Dark mode
📅 Custom date selection
📆 Calendar integration
⏰ Time selection
💾 Save previous calculations
📋 Calculation history
🗑️ Clear history option
🎨 Multiple themes
🔔 Notifications
🌍 Multiple date formats
🌐 Internationalization
📱 Progressive Web App support
🧪 Possible Enhancements

The project can also be extended into a more advanced date utility application with features such as:

Date Difference Calculator
        +
Date Counter
        +
Calendar
        +
Date History
        +
Custom Date Picker

This could turn the project into a complete Date Management Utility.

📚 What I Learned

While building this project, I learned how React state can control an application's UI dynamically.

Instead of manually changing HTML elements, React updates the interface whenever the state changes.

For example:

setCount((count) => count + step);

updates the state, and React automatically updates the displayed counter and calculated date.

This helped me understand the core concept of state-driven UI development in React.

🏆 Project Highlights
⚛️ Built with React
🎚️ Interactive Step Slider
➕ Dynamic Counter
➖ Negative Date Support
📅 Dynamic Date Calculation
🔄 Reset Functionality
📱 Responsive UI
🎨 Modern CSS Design
🧠 React State Management Practice
📌 Important React Concepts Used
Concept	Usage
useState	Managing step and count
JSX	Building the UI
onClick	Handling button clicks
onChange	Handling slider changes
Controlled Input	Connecting slider with state
Functional Update	Updating count from previous state
Ternary Operator	Conditional messages
Template Literals	Dynamic text
Date Object	Date calculation
Math.abs()	Formatting negative values
CSS Media Queries	Responsive design
🔐 No Backend Required

This project is a frontend-only React application.

It does not require:

Node.js backend
Express.js
MongoDB
Database
API
Authentication

All calculations are performed directly in the browser using JavaScript and React.

📦 Dependencies

The project uses React and the standard Vite React setup.

Install dependencies with:

npm install

Run the project with:

npm run dev
🚀 Deployment

This project can be deployed using platforms such as:

Netlify
Vercel
GitHub Pages

After creating a production build:

npm run build

The generated production files can then be deployed to your preferred hosting platform.

🧹 Production Build

To create an optimized production build:

npm run build

To preview the production build locally:

npm run preview
🤝 Contributing

Contributions, suggestions, and improvements are welcome.

If you would like to contribute:

Fork the repository
Create a new branch
Make your changes
Commit your changes
Push the branch
Open a Pull Request

Example:

git checkout -b feature/new-feature
git add .
git commit -m "Add new feature"
git push origin feature/new-feature
🐛 Issues

If you find a bug or have a suggestion, feel free to open an issue in the GitHub repository.

When reporting an issue, try to include:

Description of the problem
Steps to reproduce it
Expected behavior
Actual behavior
Screenshot if applicable
📈 Project Status

🟢 Completed

The current version includes the core date counter functionality, responsive design, step control, date calculation, and reset functionality.

Future features may be added as I continue improving my React development skills.

👨‍💻 Author

Shamir Yaqoob

MERN Stack Developer

Aspiring MERN Stack Developer focused on building modern, responsive, and user-friendly web applications while continuously improving my React and full-stack development skills.

🔗 Connect With Me
GitHub

Add your GitHub profile link here

LinkedIn

Add your LinkedIn profile link here

Portfolio

Add your portfolio link here

⭐ Show Your Support

If you found this project useful or interesting, consider giving the repository a ⭐ on GitHub.

Your support is appreciated and motivates me to continue learning and building more projects.

📜 License

This project is created for learning and educational purposes.

You are free to use, modify, and improve the project for your own learning and development.

❤️ Final Note

This React Date Counter project is part of my journey toward becoming a professional MERN Stack Developer.

The main goal of this project was not only to build a working date counter, but also to strengthen my understanding of React fundamentals, especially:

React State
     ↓
Event Handling
     ↓
State Updates
     ↓
Dynamic Rendering
     ↓
Date Calculation
     ↓
Responsive UI

I will continue improving this project and applying the concepts learned here to more advanced React applications.

⭐ Built with React.js

Made with ❤️ while learning and building with React.