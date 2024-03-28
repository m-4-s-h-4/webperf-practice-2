import Link from "next/link";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-lg">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <Link href="/">
          <div className="navbar-brand">Crispy Kitchen</div>
        </Link>

        <div className="d-lg-none">
          <button
            type="button"
            className="custom-btn btn btn-danger"
            data-bs-toggle="modal"
            data-bs-target="#BookingModal"
          >
            Reservation
          </button>
        </div>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link href="/">
                <div className="nav-link active">Home</div>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/cocktails">
                <div className="nav-link active">Cocktails</div>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/story">
                <div className="nav-link">Story</div>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/menu">
                <div className="nav-link">Menu</div>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/updates">
                <div className="nav-link">Our Updates</div>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/contact">
                <div className="nav-link">Contact</div>
              </Link>
            </li>
          </ul>
        </div>

        <div className="d-none d-lg-block">
          <button
            type="button"
            className="custom-btn btn btn-danger"
            data-bs-toggle="modal"
            data-bs-target="#BookingModal"
          >
            Reservation
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
