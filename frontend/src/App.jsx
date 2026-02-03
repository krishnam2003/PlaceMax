// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Register from '../src/components/Registration/Register.jsx';
// import Login from '../src/components/Login/Login.jsx';
// import Home from '../src/components/Home/Home.jsx';
// import Faqpage from '../src/components/Home/FAQs/FaqPage.jsx';
// import CompanyListing from '../src/components/Home/CompanyPages/CompanyListing.jsx';
// import CompanyPage from "../src/components/Home/CompanyPages/CompanyPage.jsx";
// import WelcomePage from "./WelcomePage.jsx";
// import ScheduledInterview from '../src/components/Home/CompanyPages/ScheduledInterview.jsx'
// import AddExperience from "./components/Home/InterviewExperiencePage/AddExperience.jsx";
// import InterviewExperience from "./components/Home/InterviewExperiencePage/InterviewExperience.jsx";
// import Admin from '../src/components/Admin/Admin.jsx';
// import AdminDashboard from "./components/Admin/AdminReports/AdminDashboard.jsx";
// import CompanyCrud from '../src/components/Admin/Company-CRUD/Companycrud.jsx'
// import AddCompanies from "./components/Admin/Company-CRUD/AddCompanies.jsx";
// import UpdateCompany from '../src/components/Admin/Company-CRUD/UpdateCompany.jsx';
// import ScheduledInterviewData from "../src/components/Admin/AdminReports/ScheduledInterviewData.jsx"
// import InterviewExperienceDelete from "./components/Admin/AdminReports/InterviewExperienceDelete.jsx";
// import ForgetPassword from "./components/ForgotPassword/ForgetPassword.jsx";
// import ResetPassword from "./components/ForgotPassword/ResetPassword.jsx";
// import MockInterview from "./components/MockInterview.jsx";


// function App() {
//   return (
//     <Router>
//       <Routes>
        
//         <Route path="/" element={<WelcomePage />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/admin" element={<Admin />} />
//         <Route path="/admindashboard" element={<AdminDashboard />} />
//         <Route path="/add-companies" element={<AddCompanies />} />
//         <Route path="/companies" element={<CompanyCrud/>} />
//         <Route path="/home" element={<Home />} />
//         <Route path="/faq" element={<Faqpage />} /> 
//         <Route path="/companylisting" element={<CompanyListing />} />
//         <Route path="/companypage/:id" element={<CompanyPage />} />
//         <Route path="/scheduledInterview" element={<ScheduledInterview />} />
//         <Route path="/updatecompany/:id" element={<UpdateCompany />} />
//         <Route path="/interviewexperience" element={<InterviewExperience />} />
//         <Route path="/addexperience" element={<AddExperience />} />
//         <Route path="/interviewexperiencedelete" element={<InterviewExperienceDelete />} />
//         <Route
//           path="/scheduledInterviewdata"
//           element={<ScheduledInterviewData />}
//         />
//         <Route path="/forgotpassword" element={<ForgetPassword />} />
//         <Route path="/resetPassword/:token" element={<ResetPassword />} />
//         <Route path="/mock-interview" element={<MockInterview/>} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;




import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Register from "../src/components/Registration/Register.jsx";
import Login from "../src/components/Login/Login.jsx";
import WelcomePage from "./WelcomePage.jsx";
import ForgetPassword from "./components/ForgotPassword/ForgetPassword.jsx";
import ResetPassword from "./components/ForgotPassword/ResetPassword.jsx";

import Home from "../src/components/Home/Home.jsx";
import Faqpage from "../src/components/Home/FAQs/FaqPage.jsx";
import CompanyListing from "../src/components/Home/CompanyPages/CompanyListing.jsx";
import CompanyPage from "../src/components/Home/CompanyPages/CompanyPage.jsx";
import ScheduledInterview from "../src/components/Home/CompanyPages/ScheduledInterview.jsx";
import AddExperience from "./components/Home/InterviewExperiencePage/AddExperience.jsx";
import InterviewExperience from "./components/Home/InterviewExperiencePage/InterviewExperience.jsx";

import Admin from "../src/components/Admin/Admin.jsx";
import AdminDashboard from "./components/Admin/AdminReports/AdminDashboard.jsx";
import CompanyCrud from "../src/components/Admin/Company-CRUD/Companycrud.jsx";
import AddCompanies from "./components/Admin/Company-CRUD/AddCompanies.jsx";
import UpdateCompany from "../src/components/Admin/Company-CRUD/UpdateCompany.jsx";
import ScheduledInterviewData from "../src/components/Admin/AdminReports/ScheduledInterviewData.jsx";
import InterviewExperienceDelete from "./components/Admin/AdminReports/InterviewExperienceDelete.jsx";

import ProtectedRoute from "./ProtectedRoute/ProtectedRoute.jsx";
import MockInterview from "./components/MockInterview.jsx";

function App() {
  return (
    <Router>
      <Routes>

        {/* Public Routes */}
        <Route path="/" element={<WelcomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgotpassword" element={<ForgetPassword />} />
        <Route path="/resetPassword/:token" element={<ResetPassword />} />
        

        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>

          {/* User Routes */}
          <Route path="/home" element={<Home />} />
          <Route path="/faq" element={<Faqpage />} />
          <Route path="/companylisting" element={<CompanyListing />} />
          <Route path="/companypage/:id" element={<CompanyPage />} />
          <Route path="/scheduledInterview" element={<ScheduledInterview />} />
          <Route path="/interviewexperience" element={<InterviewExperience />} />
          <Route path="/addexperience" element={<AddExperience />} />
          <Route path="/mock-interview" element={<MockInterview/>} />

          {/* Admin Routes */}
          <Route path="/admin" element={<Admin />} />
          <Route path="/admindashboard" element={<AdminDashboard />} />
          <Route path="/companies" element={<CompanyCrud />} />
          <Route path="/add-companies" element={<AddCompanies />} />
          <Route path="/updatecompany/:id" element={<UpdateCompany />} />
          <Route
            path="/scheduledInterviewdata"
            element={<ScheduledInterviewData />}
          />
          <Route
            path="/interviewexperiencedelete"
            element={<InterviewExperienceDelete />}
          />

        </Route>

      </Routes>
    </Router>
  );
}

export default App;
