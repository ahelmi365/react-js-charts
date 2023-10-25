import React from "react";
import ReactDOM from "react-dom/client";
import {
  RouterProvider,
  LoaderFunctionArgs,
  createBrowserRouter,
} from "react-router-dom";

// css
import "./index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

// components
import App from "./App.tsx";
import FAQ from "./pages/faq/FAQ.tsx";
import Index from "./pages/index/Index.tsx";
import Login from "./pages/login/Login.tsx";
import SignUp from "./pages/signUp/SignUp.tsx";
import NotFound from "./components/notFound.tsx";
import RequireAuth from "./utils/RequireAuth.tsx";
import Contact from "./pages/contatct/Contact.tsx";
import EditUser from "./pages/editUser/EditUser.tsx";
import Dashboard from "./pages/dashboard/Dashboard.tsx";
import VerificationLayout from "./pages/verificationLayout/VerificationLayout.tsx";

// Routing
const router = createBrowserRouter([
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
      {
        path: "dashboard",
        element: <Dashboard />,
      },
    ],
  },

  // outer-layout
  {
    path: "/user",
    element: <VerificationLayout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <h1>welocome to user</h1> },
      { path: "login", element: <Login /> },
      { path: "sign-up", element: <SignUp /> },
      {
        path: "edit/:userId",
        element: <EditUser />,
        loader: (data: LoaderFunctionArgs) => {
          console.log("loader");
          const userId = Number(data.params.userId);
          if (isNaN(userId)) {
            throw new Response(
              `"${data.params.userId}" is not a valid user-id, it should be a number`,
              { status: 400 }
            );
          }
          return { data: "some data" };
        },
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
