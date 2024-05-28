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
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto, quos cupiditate, expedita accusamus aut nisi labore fugiat quaerat reprehenderit minima vero, amet qui quam animi eos ea consectetur nulla corrupti?
        </div>
      </div>
      <div>
        <h3 className="footer-text-bold" style={{marginTop:20}}>Our Business & Products</h3>
        <div className="footer-text" style={{marginTop:10}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem repellendus porro consequatur ex repudiandae culpa possimus, ad at corrupti deserunt nihil quaerat accusantium ut, sapiente maxime architecto debitis dolorem nemo quibusdam? Non ratione, dicta tempora dolores laborum doloribus quibusdam exercitationem quod enim nam cupiditate magni veniam error laudantium ullam. Et!
        </div>
      </div>
      <div>
        <h3 className="footer-text-bold" style={{marginTop:20}}>Our Games</h3>
<div className="footer-text" style={{marginTop:10}} >
          Satta Matka has a wide-variety of high-quality, premium HTML5 games. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat quas tenetur et sed accusamus. Quam, deserunt nostrum quibusdam sed eligendi, distinctio nemo quo suscipit, molestiae odio cumque voluptates quaerat quasi!
        </div>
      </div>
    </div>
  );
}

export default Footer;
