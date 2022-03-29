import React from "react";
import { useState } from "react";

import { Button } from "@mui/material/";
import Dropdown from "./Dropdown";
import { FiMenu, FiX } from "react-icons/fi";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="">
      <nav>
        <div>
          <div className="nav-display">
            <div className="logo-primary-display">
              <img src="/Logo.png" alt="linkpick" className="img" />

              <a href="/test">Trouver mon entreprise</a>
              <a href="/test">Trouver mon école</a>
              <Dropdown />
            </div>
            <div className="logo-secondary-display">
              <a href="/test">Se connecter</a>
              <div className="sign-up">
                <a href="/test">S'inscrire</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {/* <div onClick={() => setOpen(!open)} className="nav-icon">
        {open ? <FiX /> : <FiMenu />}
      </div> */}

      <style jsx>{`
        .img {
          max-width: 30%;
        }
        .nav-display {
          display: flex;
          flex-direction: row;
          justify-content: space-around;
          align-items: center;
          font-size: 0.9rem;
          font-weight: bold;
          -moz-box-shadow: 0 4px 4px #f8f8f8;
          -webkit-box-shadow: 0 4px 4px #f8f8f8;
          box-shadow: 0 4px 4px #f8f8f8;
          padding: 2rem;
        }
        .nav-display a {
          text-decoration: none;
          color: black;
        }
        .logo-secondary-display {
          display: flex;
          flex-direction: row;
          column-gap: 2rem;
          align-items: center;
        }
        .logo-primary-display {
          display: flex;
          flex-direction: row;
          column-gap: 2rem;
          align-items: center;
        }
        .sign-up {
          background-color: #0360f9;
          padding: 1rem;
          padding-left: 3rem;
          padding-right: 3rem;
          border-radius: 50px;
        }
        .sign-up a {
          color: white;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
        }
        @media screen and (min-width: 1000px) {
          .nav-icon {
            display: none;
          }
          @media only screen and (max-width: 1000px) {
            .navbar-display {
              display: none;
            }
            .nav-links {
              display: flex;
              flex-direction: column;
              justify-content: space-around;
              align-items: center;
              font-size: 0.9rem;
              font-weight: bold;
              -moz-box-shadow: 0 4px 4px #f8f8f8;
              -webkit-box-shadow: 0 4px 4px #f8f8f8;
              box-shadow: 0 4px 4px #f8f8f8;
              padding: 2rem;
            }
          }
          .nav-links.active {
            left: 0;
          }
          .nav-item {
            padding: 10px 0;
            border-top: 1px solid red;
            border-bottom: 1px olid red;
          }
          .nav-icon {
            display: flex;
          }

          .nav-display {
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            align-items: center;
            font-size: 0.9rem;
            font-weight: bold;
            -moz-box-shadow: 0 4px 4px #f8f8f8;
            -webkit-box-shadow: 0 4px 4px #f8f8f8;
            box-shadow: 0 4px 4px #f8f8f8;
            padding: 2rem;
          }
          .nav-display a {
            text-decoration: none;
            color: black;
          }
          .logo-secondary-display {
            display: flex;
            flex-direction: column;
            column-gap: 2rem;
            align-items: center;
          }
          .logo-primary-display {
            display: flex;
            flex-direction: column;
            column-gap: 2rem;
            align-items: center;
          }
          .sign-up {
            background-color: #0360f9;
            padding: 1rem;
            padding-left: 3rem;
            padding-right: 3rem;
            border-radius: 50px;
          }
          .sign-up a {
            color: white;
          }
        }
      `}</style>
    </div>
  );
}
