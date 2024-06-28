import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const { user, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">
            <h1>Air Rêve</h1>
          </span>
        </Link>

        <div className="userIconContainer">
          <FontAwesomeIcon
            icon={faUser}
            className="userIcon"
            onClick={toggleMenu}
          />
          {menuOpen && (
            <div className="dropdownMenu">
              <Link to="/register">
                <button className="navButton">S'inscrire</button>
              </Link>
              <Link to="/login">
                <button className="navButton">Connexion</button>
              </Link>
              {user && ( // Affiche le bouton Déconnexion si l'utilisateur est connecté
                <button className="navButton" onClick={handleLogout}>
                  Déconnexion
                </button>
              )}
              <Link to="/reservations">
                <button className="navButton">Liste des réservations</button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
