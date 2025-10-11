import '../styles/App.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <h1 className="logo">
          <span className="logo-g">G</span>
          <span className="logo-iphy">IPHY</span>
          <span className="logo-clone"> Clone</span>
        </h1>
        <p className="tagline">Find the perfect GIF for every moment</p>
      </div>
    </header>
  );
};

export default Header;