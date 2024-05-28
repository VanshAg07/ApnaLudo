import React from "react";
import './Footer.css'

function Footer() {
  return (
    <div 
      style={{
        display: "flex",
        float: "left",
        alignContent: "left",
        flexDirection: "column",
        margin:20
      }}
    >
      <div>
        <h3 className="footer-text-bold">About Us</h3>
        <div className="footer-text" style={{marginTop:10}}>
          Apna Ludo is a real-money gaming product owned and operated by
          LudoWiner ("Apna Ludo" or "We" or "Us" or "Our").
        </div>
      </div>
      <div>
        <h3 className="footer-text-bold" style={{marginTop:20}}>Our Business & Products</h3>
        <div className="footer-text" style={{marginTop:10}}>
          We are an HTML5 game-publishing company and our mission is to make
          accessing games fast and easy by removing the friction of
          app-installs. Apna Ludo is a skill-based real-money gaming platform
          accessible only for our users in India. It is accessible on
          https://apnaludo.in . On Apna Ludo, users can compete for real cash in
          Tournaments and Battles. They can encash their winnings via popular
          options such as Paytm Wallet, Amazon Pay, Bank Transfer, Mobile
          Recharges etc.
        </div>
      </div>
      <div>
        <h3 className="footer-text-bold" style={{marginTop:20}}>Our Games</h3>
<div className="footer-text" style={{marginTop:10}} >
          Apna Ludo has a wide-variety of high-quality, premium HTML5 games. Our
          games are especially compressed and optimised to work on low-end
          devices, uncommon browsers, and patchy internet speeds. We have games
          across several popular categories: Arcade, Action, Adventure, Sports &
          Racing, Strategy, Puzzle & Logic. We also have a strong portfolio of
          multiplayer games such as Ludo, Chess, 8 Ball Pool, Carrom, Tic Tac
          Toe, Archery, Quiz, Chinese Checkers and more! Some of our popular
          titles are: Escape Run, Bubble Wipeout, Tower Twist, Cricket Gunda,
          Ludo With Friends. If you have any suggestions around new games that
          we should add or if you are a game developer yourself and want to work
          with us, don't hesitate to drop in a line at info@apnaludo.in!
        </div>
      </div>
    </div>
  );
}

export default Footer;
