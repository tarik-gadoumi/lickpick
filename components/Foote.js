import React from "react";
import { useState } from "react";
import Grid from "@mui/material";
import { Button, Typography, Item, Box } from "@mui/material/";

// import { FiMenu, FiX } from "react-icons/fi";

export default function Foote() {
  const [open, setOpen] = useState(false);

  return (
    <div className="testa">
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 1,
          gridTemplateRows: "auto",
          gridTemplateAreas: `"header header header header"
  "main main . sidebar"
  "footer footer footer footer"`,
        }}
      >
        <Box sx={{ gridArea: "footer" }}>
          <div className="footer">
            <div className="footer-detail-border">
              <div className="footer-detail">
                <div className="footer-detail-primary">
                  {" "}
                  <img src="/Logo.png" alt="linkpick" className="img" />
                  <br></br>
                  <br></br>
                  <div>
                    <Typography
                      sx={{
                        fontSize: "0.7rem",
                        fontFamily: "Roboto",

                        color: "primary.dark",
                      }}
                    >
                      <span className="primary-description-footer">
                        Linkpick simplifie et automatise les processus de paie
                        <br></br>
                        et de RH pour les petites et moyennes entreprises. Notre
                        <br></br>
                        mission est de soutenir la transformation numérique de
                        <br></br>
                        la gestion des ressources humaines grâce à une gamme
                        <br></br>
                        croissante de caractéristiques et de services.<br></br>
                      </span>
                    </Typography>
                  </div>
                  <br></br>
                  <br></br>
                  <div className="footer-social">
                    <img src="/Linkedin.png" alt="linkpick" className="" />
                    <img src="/Facebook.png" alt="linkpick" className="" />
                    <img src="/Instagram.png" alt="linkpick" className="" />
                  </div>
                  <br></br>
                  <div className="footer-upload">
                    <br></br>
                    <Typography
                      sx={{
                        fontSize: "0.7rem",
                        fontFamily: "Roboto",

                        color: "primary.dark",
                      }}
                    >
                      <span className="primary-description-color">
                        Bientôt disponible sur
                      </span>
                    </Typography>
                    <br></br>
                    <div className="footer-upload-primary">
                      <img
                        src="/apple.png"
                        alt="linkpick"
                        className="img-social"
                      />
                      <img
                        src="/google.png"
                        alt="linkpick"
                        className="img-social"
                      />
                    </div>
                  </div>
                  <br></br>
                </div>
                <div className="footer-detail-element">
                  <div className="footer-upload-element">
                    <Typography
                      sx={{
                        fontFamily: "Montserrat",
                        color: "primary.dark",
                      }}
                    >
                      <span className="title-element">Recherche</span>
                    </Typography>
                    <br></br>

                    <div className="title-element-right">
                      <br></br>{" "}
                      <Typography
                        sx={{
                          fontSize: "0.7rem",
                          fontFamily: "Roboto",

                          color: "primary.dark",
                        }}
                      >
                        <a href="">Trouver une entreprise</a>
                      </Typography>
                    </div>
                    <br></br>

                    <div className="title-element-left">
                      {" "}
                      <Typography
                        sx={{
                          fontSize: "0.7rem",
                          fontFamily: "Roboto",

                          color: "primary.dark",
                        }}
                      >
                        <a href="">Trouver un établissement scolaire</a>
                      </Typography>
                    </div>
                  </div>

                  <div className="footer-upload-element">
                    <Typography
                      sx={{
                        fontFamily: "Montserrat",
                        color: "primary.dark",
                      }}
                    >
                      <span className="title-element">Espace Organisme</span>
                    </Typography>
                    <br></br>

                    <div className="title-element-right">
                      <br></br>
                      <Typography
                        sx={{
                          fontSize: "0.7rem",
                          fontFamily: "Roboto",

                          color: "primary.dark",
                        }}
                      >
                        <a href="">Solution entreprise</a>
                      </Typography>
                    </div>
                    <br></br>

                    <div className="title-element-left">
                      {" "}
                      <Typography
                        sx={{
                          fontSize: "0.7rem",
                          fontFamily: "Roboto",

                          color: "primary.dark",
                        }}
                      >
                        <a href="">Solution établissement scolaire</a>
                      </Typography>
                    </div>
                  </div>

                  <div className="footer-upload-element">
                    <Typography
                      sx={{
                        fontFamily: "Montserrat",
                        color: "primary.dark",
                      }}
                    >
                      {" "}
                      <span className="title-element">Contact</span>
                    </Typography>
                    <br></br>

                    <div className="title-element-right">
                      <br></br>
                      <Typography
                        sx={{
                          fontSize: "0.7rem",
                          fontFamily: "Roboto",

                          color: "primary.dark",
                        }}
                      >
                        <a href="/contact">Contactez-nous</a>
                      </Typography>
                    </div>
                  </div>

                  <div className="footer-upload-element">
                    <Typography
                      sx={{
                        fontFamily: "Montserrat",
                        color: "primary.dark",
                      }}
                    >
                      {" "}
                      <span className="title-element">Societé</span>
                    </Typography>
                    <br></br>
                    <Typography
                      sx={{
                        fontSize: "0.7rem",
                        fontFamily: "Roboto",

                        color: "primary.dark",
                      }}
                    >
                      <div className="title-element-right-linkpick">
                        <br></br>
                        <a href="">Pourquoi Linkpick</a>
                      </div>
                    </Typography>
                    <br></br>{" "}
                    <div className="title-element-left-history">
                      {" "}
                      <Typography
                        sx={{
                          fontSize: "0.7rem",
                          fontFamily: "Roboto",
                          color: "primary.dark",
                        }}
                      >
                        <a href="/apropos">Notre histoire</a>
                      </Typography>
                    </div>
                    <br></br>
                    <Typography
                      sx={{
                        fontSize: "0.7rem",
                        fontFamily: "Roboto",

                        color: "primary.dark",
                      }}
                    >
                      <div className="title-element-left">
                        {" "}
                        <a href="">Nous embauchons !</a>
                      </div>
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
            <br></br>
            <br></br>
            <br></br>

            <div className="condition-generale">
              <Typography
                sx={{
                  fontSize: "0.7rem",
                  fontFamily: "Roboto",

                  color: "primary.dark",
                }}
              >
                {" "}
                <div className="primary-description-color right-condition">
                  Copyright © 2021 Linkpick, tous droits réservés.
                </div>
              </Typography>

              <div className="condition-generale-right">
                <div className="condition-generale-element">
                  <Typography
                    sx={{
                      fontSize: "0.7rem",
                      fontFamily: "Roboto",

                      color: "primary.dark",
                    }}
                  >
                    {" "}
                    <div>Conditions générales d'utilisations</div>
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "0.7rem",
                      fontFamily: "Roboto",

                      color: "primary.dark",
                    }}
                  >
                    {" "}
                    <div>Cookies</div>
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "0.7rem",
                      fontFamily: "Roboto",

                      color: "primary.dark",
                    }}
                  >
                    {" "}
                    <div>Mentions légales</div>
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "0.7rem",
                      fontFamily: "Roboto",

                      color: "primary.dark",
                    }}
                  >
                    {" "}
                    <div>
                      {" "}
                      <a href="/rgpd">RGPD </a>
                    </div>
                  </Typography>

                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                </div>
              </div>
            </div>
          </div>
        </Box>
      </Box>
      {/* <div onClick={() => setOpen(!open)} className="nav-icon">
        {open ? <FiX /> : <FiMenu />}
      </div> */}

      <style jsx>{`

       
          @media only screen and (max-width: 1000px) {
            .footer{
                text-align: center;
    
            }
            a {
                color: inherit;
                text-decoration: none;
              }
              br{
                  display:none;
              }
              .footer-detail-element{
                  display:flex;
                  flex-direction: column;
                  justify-content:space-between

              }
              .title-element {
                font-size: 0.8rem;
                font-weight: bold;
              }
              .primary-description-footer{
                  display:flex;
                  flex-direction:column;
                  width:70%;
                  text-align:justify;
                  margin-left:5rem;
              }
              .primary-description-footer{
                color: #4e71ba;
              }
              primary-description-color{
                text-align:center;
                color: #4e71ba;

              }
              .footer-social{
                  display:flex;
                  flex-direction:row;
                  column-gap: 1rem;
                  align-items:center;
                  justify-content:center;
              }
          }

         @media only screen and (min-width: 1000px) {
            .primary-description-footer{
                color: #4e71ba;
              }
              primary-description-color{
                color: #4e71ba;

              }
                .footer-social {
                  display: flex;
                  flex-direction: row;
                  column-gap: 0.8rem;
                }
                .footer-detail-element {
                  display: flex;
                  flex-direction: row;
                  column-gap: 2rem;
                }
                .img {
                  height: 38px;
                  width: 165px;
                }
        
                .img-social {
                  height: 40px;
                  width: 130px;
                }
                .footer-upload a {
                  text-align: right;
                }
                .footer-detail-primary {
                  display: flex;
                  flex-direction: column;
                  justify-content: space-around;
                }
                .footer-detail {
                  display: flex;
                  flex-direction: row;
                  justify-content: space-between;
                  margin-top: 2.5rem;
                }
                .footer-detail-border {
                  border-top: 0.7px solid #e0e0e0;
                  border-bottom: 0.7px solid #e0e0e0;
                  height: 350px;
                  margin-left: 14rem;
                  margin-right: 14rem;
                }
                .footer-upload-element {
                  margin-top: 0.9rem;
                }
                .title-element-right a {
                  margin-right: 4rem;
                }
                .title-element-left a {
                  margin-left: -0.4rem;
                }
                .title-element-right-linkpick a {
                  margin-right: 1rem;
                }
                .title-element-left-history a {
                  margin-left: -2.5rem;
                }
                .title-element {
                  font-size: 1rem;
                  font-weight: bold;
                }
                .footer {
                  width: 100%;
                  height: 100px;
        
                  font-size: 0.7rem;
                }
        
                .footer a {
                  display: flex;
                  justify-content: center;
                  align-items: center;
                }
        
                a {
                  color: inherit;
                  text-decoration: none;
                }
                .footer-upload {
                  display: flex;
                  flex-direction: column;
                }
                .footer-upload-primary {
                  display: flex;
                  flex-direction: row;
                  column-gap: 0.7rem;, 
                                
                }
                .condition-generale {
                  display: flex;
                  flex-direction: row;
                  justify-content: space-between;
                  margin-left: 14rem;
                  margin-right: 12rem;
                }
                .condition-generale-element {
                  display: flex;
                  flex-direction: row;
                  column-gap: 2rem;
                }}
      `}</style>
    </div>
  );
}
