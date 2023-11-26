import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div class="navbar">
        <ul><Link to="/">Home</Link></ul>
        <ul><Link to="/news">News</Link></ul>
        <ul><Link to="/rank">Ranks</Link></ul>
        <ul><Link to="/events">Events</Link></ul>
        <ul><Link to="/matches">Matches</Link></ul>
        <ul><Link to="/profile">Profile</Link></ul>
      </div>
      <Outlet />
    </>
  )
};

export default Layout;