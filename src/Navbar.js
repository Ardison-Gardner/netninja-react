const Navbar = () => {
  return(
    <nav className="navbar">
      <h1>The Plicky Blog</h1>
      <div className="links">
        <a href="/">Home</a>
        <a href="/create" style={{
          color: "white",
          backgroundColor: 'rgba(50, 205, 50, 100)',
          borderRadius: '8px'
        }}>New Blog</a>
      </div>
    </nav>
  );
}

export default Navbar;
