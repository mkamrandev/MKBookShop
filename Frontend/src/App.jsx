import React from 'react';
import Home from './Home/Home';
import { Navigate, Route, Routes} from "react-router-dom";
import Courses from './Courses/Courses';
import Signup from './components/Signup';
import Contact from './components/Contact';
import { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider';


function App() {
  const [authuser, SetAuthUser] = useAuth()
  console.log(authuser)
  return (
    <>
    <div className="dark:bg-slate-900 dark:text-white">
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={authuser?<Courses />:<Navigate to="/signup"/> } />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Toaster />
    </div>
    </>
  )
}

export default App
