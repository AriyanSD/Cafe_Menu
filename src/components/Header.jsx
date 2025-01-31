import logo from "/assets/Header_Logo.png";
export default function Header() {
  return (
    <header id="header_banner">
      <div>
        <a
          href="https://www.instagram.com/coffee_hebe/"
          target="_blank"
          className="fa fa-instagram"
        >
          <img src="/assets/instagram.svg" alt="" />
        </a>
        <a href="https://wa.me/+989199167673" target="_blank" className="fa fa-instagram">
          <img src="/assets/whatsapp.svg" alt="" />
        </a>
      </div>
        <h1 >Hebe Cafe</h1>
      <img src={logo} alt="logo" id="logo" />
    </header>
  );
}
