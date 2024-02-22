import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "@firebase/auth";
import { useContext, useState, ChangeEvent, FormEvent } from "react";
import { NavLink } from 'react-router-dom';
import { FaUser, FaLock } from "react-icons/fa";
import './App.scss'
import { auth } from "./firebase";
import { AuthContext } from "./context/authContext";

function App() {
  const userInfo = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [isCreate, setIsCreate] = useState(false);
  const [emailError, setEmailError] = useState(false); 
  const [rememberMe, setRememberMe] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false); // State to track login status

  const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setEmailError(false);
  };

  const handlePwd = (e: ChangeEvent<HTMLInputElement>) => {
    setPwd(e.target.value);
  };

  const handleClickCreate = () => {
    setIsCreate((prev) => !prev);
  };

  const handleSubit = (e: FormEvent) => {
    e.preventDefault();

    if (!email) {
      setEmailError(true);
      return; 
    }

    // 회원 가입일때
    if (isCreate) {
      createUserWithEmailAndPassword(auth, email, pwd)
        .then(() => {
          alert("회원가입 성공");
          setLoggedIn(true); // Set login status to true after successful signup
        })
        .catch((error) => {
          alert(error.message);
        });
    } else {
      signInWithEmailAndPassword(auth, email, pwd)
        .then(() => {
          alert("로그인 성공");
          setLoggedIn(true); // Set login status to true after successful login
        })
        .catch((error) => {
          alert(error.message);
        });
    }
  };

  // 로그아웃 기능
  const handleLogout = () => {
    signOut(auth);
    setLoggedIn(false); // Set login status to false after logout
  };

  return (
    <div className="App">
      {loggedIn ? ( // Display login status if logged in
        <div>
          로그인 상태입니다
          <button onClick={handleLogout}> LogOut </button>
        </div>
      ) : (
        <form onSubmit={handleSubit}>
          <h1>{isCreate ? "Register" : "Login"}</h1>
          <div className="input-box">
          <input
            id="email"
            type="email"
            placeholder="E-mail"
            onChange={handleEmail}
            value={email}
          />
          <FaUser className="icon" />

          {emailError && <small style={{ color: "red" }}>이메일을 입력해주세요.</small>}
          </div>

          <div className="input-box">
          <input
            id="pwd"
            type="password"
            name="pwd"
            placeholder="Password"
            value={pwd}
            onChange={handlePwd}
          />
          <FaLock className="icon" />

          {emailError && <small style={{ color: "red" }}>비밀번호를 입력해주세요.</small>}
          </div>
          <div className="remember-forgot">
            
          <label>
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
            />
            Remember me
          </label>
          <a href="#">Forgot Password?</a>
        </div>

          <button type="submit">{isCreate ? "create account" : "Login"}</button>
          <button type="button" onClick={handleClickCreate}>
            {isCreate ? "cancel" : "Register"}
          </button>
        </form>
      )}
    </div>
  );
}

export default App;
