import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// css
import "./index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

// components
import App from "./App.tsx";
import FAQ from "./pages/faq/FAQ.tsx";
import Contact from "./pages/contatct/Contact.tsx";
import Index from "./pages/index/Index.tsx";
import NotFound from "./components/notFound.tsx";
import VerificationLayout from "./pages/verificationLayout/VerificationLayout.tsx";
import Login from "./pages/login/Login.tsx";
import SignUp from "./pages/signUp/SignUp.tsx";
import EditUser from "./pages/editUser/EditUser.tsx";
import RequireAuth from "./utils/RequireAuth.tsx";

// Routing
const routes = createBrowserRouter([
  // inner-layout
  {
    path: "/",
    element: (
      <RequireAuth>
        <App />
      </RequireAuth>
    ),
    errorElement: <NotFound />,

    children: [
      { index: true, element: <Index /> },
      {
        path: "faq",
        element: <FAQ />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },

  // outer-layout
  {
    path: "/user",
    element: <VerificationLayout />,
    children: [
      { index: true, element: <h1>welocome to user</h1> },
      { path: "login", element: <Login /> },
      { path: "sign-up", element: <SignUp /> },
      {
        path: ":userId/edit",
        element: <EditUser />,
        loader: () => {
          console.log("loader");
          return { data: "some data" };
        },
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={routes}></RouterProvider>
  </React.StrictMode>
);
