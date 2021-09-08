export const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <a className="navbar-brand" href="index.html">
          Dolphin Admin
        </a>
        <button
          className="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="about.html">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="services.html">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="contact.html">
                Contact
              </a>
            </li>
            <li className="nav-item active dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownPages"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Other Pages
              </a>
              <div
                className="dropdown-menu dropdown-menu-right"
                aria-labelledby="navbarDropdownPages"
              >
                <a className="dropdown-item" href="full-width.html">
                  Full Width Page
                </a>
                <a className="dropdown-item active" href="sidebar.html">
                  Sidebar Page
                </a>
                <a className="dropdown-item" href="faq.html">
                  FAQ
                </a>
                <a className="dropdown-item" href="404.html">
                  404
                </a>
                <a className="dropdown-item" href="pricing.html">
                  Pricing Table
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
