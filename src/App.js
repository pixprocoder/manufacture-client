import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Navbar from "./Pages/Shared/Navbar";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Login/Signup";
import Contact from "./Pages/Contact/Contact";
import About from "./Pages/About/About";
import Purchase from "./Pages/Home/Sections/Parts/Purchase";
import RequireAuth from "./Pages/Login/RequireAuth";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyProfile from "./Pages/Dashboard/MyProfile";
import AddReview from "./Pages/Dashboard/AddReview";
import MyOrder from "./Pages/Dashboard/MyOrder";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ErrorPage from "./Pages/Shared/ErrorPage";
import Blog from "./Blog/Blog";
import Users from "./Pages/Dashboard/Users";
import RequireAdmin from "./Pages/Login/RequireAdmin";
import Payment from "./Pages/Dashboard/Payment";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route
          path="/purchase/:purchaseId"
          element={
            <RequireAuth>
              <Purchase />
            </RequireAuth>
          }
        />
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<MyProfile />}></Route>
          <Route path="myOrder" element={<MyOrder />}></Route>
          <Route path="addReview" element={<AddReview />}></Route>
          <Route path="payment/:id" element={<Payment />}></Route>
          <Route
            path="allUser"
            element={
              <RequireAdmin>
                <Users />
              </RequireAdmin>
            }
          ></Route>
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <ToastContainer></ToastContainer>
    </>
  );
}

export default App;
