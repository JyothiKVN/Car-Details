import { Navigate, Link } from "react-router-dom";

function NavigationComponent(props: any) {
  return (
    <div className="navigationMenu">
      <h3>Logo</h3>
      <ul className="navigationMenu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/filter">Services/Filter</Link>
        </li>
        <li>
          <Link to="/gallery">Gallery</Link>
        </li>
        <li>
          <Link to="/contact">Contact us</Link>
        </li>
      </ul>
    </div>
  );
}

export default NavigationComponent;
