const Home = () => {

  const handleClick = (e) => {
    console.log('Hello, friend.', e);
  };

  const handleClickInstead = (name, e) => {
    console.log('Hello, ' + name + '!', e.target);
  }

  return (
    <div className="home">
      <h2>Homepage</h2>
      <button onClick={handleClick}>Click me</button>
      <button onClick={(e) => {handleClickInstead('Mario', e)}}>Click me instead.</button>
    </div>
  );
}
export default Home;
