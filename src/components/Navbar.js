import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { useTranslation } from "react-i18next";
import { auth } from "../firebase.config";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Navbar = ({ onCartClick }) => {
  const { t, i18n } = useTranslation();
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); // Set user when auth state changes
    });


    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    alert("You have been logged out");
    navigate("/");
  }

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "fr" : "en");
  };

  return (
    <nav>
      <div className="logo">
        <a href="/">
          {" "}
          <img src={`${process.env.PUBLIC_URL}/Logo.png`} alt="Logo" />{" "}
        </a>
      </div>
      <ul className="nav-links">
        <li>
          <a href="#men-fragrances">{t("navbar.men")}</a>
        </li>
        <li>
          <a href="#women-fragrances">{t("navbar.women")}</a>
        </li>
        <li>
          <a href="#customize-section">{t("navbar.customize")}</a>
        </li>
        <li>
          <a href="#our-story">{t("navbar.ourStory")}</a>
        </li>
      </ul>
      <div className="shopping-cart">
        <a href="#checkout-section" onClick={onCartClick}>
          {" "}
          <img
            src={`${process.env.PUBLIC_URL}/shop.png`}
            alt="Shopping Cart"
          />{" "}
        </a>
      </div>
      <div className="language-toggle" onClick={toggleLanguage}>
        {i18n.language === "en" ? "FR" : "EN"}
      </div>
      <div className="auth-link">
        { user ? (
          <button className="logout-button" onClick={handleLogout}>Logout</button>
        ) : (
          <a className="login-link" href="/login">Login</a>
        )
        }
      </div>
      <div className="auth-link">
        { user ? (
                <a className="login-link" href="/profile">Profile</a>

        ) : (
          <></>
        )
        }
      </div>
    </nav>
  );
};

export default Navbar;
