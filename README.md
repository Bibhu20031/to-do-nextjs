Todo List Application
Overview
This project is a simple Todo List application built with Next.js 14 and TypeScript. It allows users to add, update, mark as done, search, and delete tasks. The tasks are displayed in an expandable list format, showing a description and a timestamp of the last update when expanded. The application uses a dummy JSON file as a data repository and leverages Next.js' features for server-side rendering (SSR) and URL parameters for handling search functionality.

System Design
Frontend Framework: Next.js 14 with TypeScript
Components:
TaskForm: For adding new tasks
TaskList: For displaying a list of tasks
TaskItem: For individual task operations (edit, delete, mark as done)
Data Storage: Dummy JSON file (data.json)
State Management: React useState and useEffect hooks
Routing: Next.js app directory with useSearchParams for query parameters

Setup and Run Instructions
Clone the Repository:

sh
Copy code
git clone https://github.com/Bibhu20031/todo-do-nextjs.git


cd todo-list-app


Install Dependencies:
npm install

Run the Application:
npm run dev

Open the Application:
Navigate to http://localhost:3000 to see the application.