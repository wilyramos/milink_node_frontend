# **My Links FrontEnd**

**My Links** is a full-stack application that allows you to manage users, authenticate via JWT, and upload images to the cloud with Cloudinary. It is built with a Node.js (Express) backend and a React (TypeScript) frontend, with MongoDB as the database.

- **Frontend**:
- Web application built with React and TypeScript.
- User registration and authentication forms.
- Use of React Query for data management.
- Modern user interface with TailwindCSS.
- Success and error notifications with Sonner.

## **Project Structure**

### **Frontend**
- **src/**: Source code for the React application.
- **App.tsx**: Main component of the application.
- **/src/components**: Reusable components.
- **/src/pages**: Main pages (Login, Register, Profile, etc.).
- **/src/hooks**: Custom hooks (React Query, Axios).
- **tailwind.config.js**: TailwindCSS configuration.

## usage

Frontend
1. Clone the repository:
`git clone <repository-url>`
`cd frontend`

2. Install the dependencies:
`npm install`

3. Configure the .env file with your backend URL:
`VITE_BACKEND_URL: URL of your backend server.`

4. Run:
`npm run dev`
