// import React from "react";
// import { Button, Typography, Color } from "@mui/material/";
// import Container from "@mui/material/Container";
// import { spacing, Link } from "@mui/material/";

// export default function Footer() {
//   return (
//     <div className="">
//       <div className="footer">
//         <div className="footer-detail-border">
//           <div className="footer-detail">
//             <div className="footer-detail-primary">
//               {" "}
//               <img src="/Logo.png" alt="linkpick" className="img" />
//               <br></br>
//               <br></br>
//               <div>
//                 <Typography
//                   sx={{
//                     fontSize: "0.7rem",
//                     fontFamily: "Roboto",

//                     color: "primary.dark",
//                   }}
//                 >
//                   <span className="primary-description-footer">
//                     Linkpick simplifie et automatise les processus de paie et de
//                     RH <br />
//                     pour les petites et moyennes entreprises. Notre mission est
//                     de <br />
//                     soutenir la transformation numérique de la gestion des{" "}
//                     <br />
//                     ressources humaines grâce à une gamme croissante de <br />
//                     caractéristiques et de services. <br />
//                   </span>
//                 </Typography>
//               </div>
//               <br></br>
//               <br></br>
//               <div className="footer-social">
//                 <img src="/Linkedin.png" alt="linkpick" className="" />
//                 <img src="/Facebook.png" alt="linkpick" className="" />
//                 <img src="/Instagram.png" alt="linkpick" className="" />
//               </div>
//               <br></br>
//               <div className="footer-upload">
//                 <br></br>
//                 <Typography
//                   sx={{
//                     fontSize: "0.7rem",
//                     fontFamily: "Roboto",

//                     color: "primary.dark",
//                   }}
//                 >
//                   <span className="primary-description-footer">
//                     Bientôt disponible sur
//                   </span>
//                 </Typography>
//                 <br></br>
//                 <div className="footer-upload-primary">
//                   <img src="/apple.png" alt="linkpick" className="img-social" />
//                   <img
//                     src="/google.png"
//                     alt="linkpick"
//                     className="img-social"
//                   />
//                 </div>
//               </div>
//               <br></br>
//             </div>
//             <div className="footer-detail-element">
//               <div className="footer-upload-element">
//                 <Typography
//                   sx={{
//                     fontFamily: "Montserrat",
//                     color: "primary.dark",
//                     fontSize: "0.7rem",
//                   }}
//                 >
//                   <span className="title-element">Recherche</span>
//                 </Typography>
//                 <br></br>

//                 <div className="title-element-right">
//                   <br></br>{" "}
//                   <Typography
//                     sx={{
//                       fontSize: "0.7rem",
//                       fontFamily: "Roboto",

//                       color: "primary.dark",
//                     }}
//                   >
//                     <a href="">Trouver une entreprise</a>
//                   </Typography>
//                 </div>
//                 <br></br>

//                 <div className="title-element-left">
//                   {" "}
//                   <Typography
//                     sx={{
//                       fontSize: "0.7rem",
//                       fontFamily: "Roboto",

//                       color: "primary.dark",
//                     }}
//                   >
//                     <a href="">Trouver un établissement scolaire</a>
//                   </Typography>
//                 </div>
//               </div>

//               <div className="footer-upload-element">
//                 <Typography
//                   sx={{
//                     fontFamily: "Montserrat",
//                     color: "primary.dark",
//                   }}
//                 >
//                   <span className="title-element">Espace Organisme</span>
//                 </Typography>
//                 <br></br>

//                 <div className="title-element-right">
//                   <br></br>
//                   <Typography
//                     sx={{
//                       fontSize: "0.7rem",
//                       fontFamily: "Roboto",

//                       color: "primary.dark",
//                     }}
//                   >
//                     <a href="">Solution entreprise</a>
//                   </Typography>
//                 </div>
//                 <br></br>

//                 <div className="title-element-left">
//                   {" "}
//                   <Typography
//                     sx={{
//                       fontSize: "0.7rem",
//                       fontFamily: "Roboto",

//                       color: "primary.dark",
//                     }}
//                   >
//                     <a href="">Solution établissement scolaire</a>
//                   </Typography>
//                 </div>
//               </div>

//               <div className="footer-upload-element">
//                 <Typography
//                   sx={{
//                     fontFamily: "Montserrat",
//                     color: "primary.dark",
//                   }}
//                 >
//                   {" "}
//                   <span className="title-element">Contact</span>
//                 </Typography>
//                 <br></br>

//                 <div className="title-element-right">
//                   <br></br>
//                   <Typography
//                     sx={{
//                       fontSize: "0.7rem",
//                       fontFamily: "Roboto",

//                       color: "primary.dark",
//                     }}
//                   >
//                     <a href="">Contactez-nous</a>
//                   </Typography>
//                 </div>
//               </div>

//               <div className="footer-upload-element">
//                 <Typography
//                   sx={{
//                     fontFamily: "Montserrat",
//                     color: "primary.dark",
//                   }}
//                 >
//                   {" "}
//                   <span className="title-element">Societé</span>
//                 </Typography>

//                 <br></br>

//                 <Typography
//                   sx={{
//                     fontSize: "0.7rem",
//                     fontFamily: "Roboto",

//                     color: "primary.dark",
//                   }}
//                 >
//                   <div className="title-element-right-linkpick">
//                     <br></br>
//                     <a href="">Pourquoi Linkpick</a>
//                   </div>
//                 </Typography>

//                 <br></br>

//                 <Typography
//                   sx={{
//                     fontSize: "0.7rem",
//                     fontFamily: "Roboto",

//                     color: "primary.dark",
//                   }}
//                 >
//                   {" "}
//                   <div className="title-element-left-history">
//                     {" "}
//                     <a href="">Notre histoire</a>
//                   </div>
//                 </Typography>

//                 <br></br>

//                 <Typography
//                   sx={{
//                     fontSize: "0.7rem",
//                     fontFamily: "Roboto",

//                     color: "primary.dark",
//                   }}
//                 >
//                   <div className="title-element-left">
//                     {" "}
//                     <a href="">Nous embauchons !</a>
//                   </div>
//                 </Typography>
//               </div>
//             </div>
//           </div>
//         </div>
//         <br></br>
//         <br></br>
//         <br></br>

//         <div className="condition-generale">
//           <Typography
//             sx={{
//               fontSize: "0.7rem",
//               fontFamily: "Roboto",

//               color: "primary.dark",
//             }}
//           >
//             {" "}
//             <div className="primary-description-footer right-condition">
//               Copyright © 2021 Linkpick, tous droits réservés.
//             </div>
//           </Typography>

//           <div className="condition-generale-right">
//             <div className="condition-generale-element">
//               <Typography
//                 sx={{
//                   fontSize: "0.7rem",
//                   fontFamily: "Roboto",

//                   color: "primary.dark",
//                 }}
//               >
//                 {" "}
//                 <div>Conditions générales d'utilisations</div>
//               </Typography>
//               <Typography
//                 sx={{
//                   fontSize: "0.7rem",
//                   fontFamily: "Roboto",

//                   color: "primary.dark",
//                 }}
//               >
//                 {" "}
//                 <div>Cookies</div>
//               </Typography>
//               <Typography
//                 sx={{
//                   fontSize: "0.7rem",
//                   fontFamily: "Roboto",

//                   color: "primary.dark",
//                 }}
//               >
//                 {" "}
//                 <div>Mentions légales</div>
//               </Typography>
//               <Typography
//                 sx={{
//                   fontSize: "0.7rem",
//                   fontFamily: "Roboto",

//                   color: "primary.dark",
//                 }}
//               >
//                 {" "}
//                 <div>RGPD</div>
//               </Typography>

//               <br></br>
//               <br></br>
//               <br></br>
//               <br></br>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//       .primary-description-footer{
//         color: #4e71ba;
//       }

//         .footer-social {
//           display: flex;
//           flex-direction: row;
//           column-gap: 0.8rem;
//         }
//         .footer-detail-element {
//           display: flex;
//           flex-direction: row;
//           column-gap: 2rem;
//         }
//         .img {
//           height: 38px;
//           width: 165px;
//         }

//         .img-social {
//           height: 40px;
//           width: 130px;
//         }
//         .footer-upload a {
//           text-align: right;
//         }
//         .footer-detail-primary {
//           display: flex;
//           flex-direction: column;
//           justify-content: space-around;
//         }
//         .footer-detail {
//           display: flex;
//           flex-direction: row;
//           justify-content: space-between;
//           margin-top: 2.5rem;
//         }
//         .footer-detail-border {
//           border-top: 0.7px solid #e0e0e0;
//           border-bottom: 0.7px solid #e0e0e0;
//           height: 350px;
//           margin-left: 14rem;
//           margin-right: 14rem;
//         }
//         .footer-upload-element {
//           margin-top: 0.9rem;
//         }
//         .title-element-right a {
//           margin-right: 4rem;
//         }
//         .title-element-left a {
//           margin-left: -0.4rem;
//         }
//         .title-element-right-linkpick a {
//           margin-right: 1rem;
//         }
//         .title-element-left-history a {
//           margin-left: -2rem;
//         }
//         .title-element {
//           font-size: 1rem;
//           font-weight: bold;
//         }
//         .footer {
//           width: 100%;
//           height: 100px;

//           font-size: 0.7rem;
//         }

//         .footer a {
//           display: flex;
//           justify-content: center;
//           align-items: center;
//         }

//         a {
//           color: inherit;
//           text-decoration: none;
//         }
//         .footer-upload {
//           display: flex;
//           flex-direction: column;
//         }
//         .footer-upload-primary {
//           display: flex;
//           flex-direction: row;
//           column-gap: 0.7rem;,

//         }
//         .condition-generale {
//           display: flex;
//           flex-direction: row;
//           justify-content: space-between;
//           margin-left: 14rem;
//           margin-right: 12rem;
//         }
//         .condition-generale-element {
//           display: flex;
//           flex-direction: row;
//           column-gap: 2rem;
//         }

//         @media screen and (min-width: 420px) and (max-width: 1023px) {
//           .footer-detail {
//             display: flex;
//             flex-direction: column;
//             column-gap: 2rem;
//           }
//           .footer-detail-border {
//             border-top:none;
//             border-bottom: none;
//             height:0px;
//             margin-left: none;
//             margin-right: none;
//           }
//           .condition-generale {
//             display: none;
//           }
//         }
//       `}</style>

//       <style jsx global>{`
//         html,
//         body {
//           padding: 0;
//           margin: 0;
//         }
//       `}</style>
//     </div>
//   );
// }
