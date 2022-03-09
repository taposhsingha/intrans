import Article from "./components/article/Article";
import EditArticle from "./pages/editarticle/EditArticle";
import Home from "./pages/home/Home";
import JobsPage from "./pages/jobspage/JobsPage";
import Login from "./pages/login/Login";
import Register from "./pages/Register/Register";
import Singlejob from "./components/jobpage/Singlejob";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Topbar from "./components/topbar/TopBar";
import { useContext } from "react";
import { Context } from "./context/Context";
import UserProfile from "./pages/userProfile/UserProfile";
import WriteJobPost from "./pages/writeJobPost/WriteJobPost";
import Adminpanel from "./pages/adminpanel/Adminpanel";
import UsersList from "./pages/adminpanel/UsersList";
import TestFile from "./pages/testfile/TestFile";
import ApplyNow from "./components/applynow/ApplyNow";

function App() {
  const { user } = useContext(Context);
  return (
    <Router>
      <Topbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/register" element={user ? <Home /> : <Register />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/jobspage" element={<JobsPage />} />
        <Route path="/admin" element={<Adminpanel />} />
        <Route path="/admin/list_users" element={<UsersList />} />
        <Route path="/write" element={<EditArticle />} />
        <Route path="/writejobpost" element={<WriteJobPost />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/test/:testId" element={<TestFile />} />
        <Route path="/jobpost/:jobId" element={<Singlejob />} />
        <Route path="/jobpost/:jobId/applynow" element={<ApplyNow />} />
        <Route path="/post/:articleId" element={<Article />} />
        <Route
          path="/editarticle"
          element={user ? <EditArticle /> : <Register />}
        />
      </Routes>
    </Router>
  );
}

export default App;
