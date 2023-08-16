import './nav.css';


 const  Nav = ()=> {
  return (
    <div>
    <nav class="navbar navbar-expand-lg bg-body-tertiary ">
      <div class="container-fluid">
        <a class="navbar-brand ms-5 text-white" href="!#">
          Git Folks
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse me-5 " id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0 ">
            <li class="nav-item ">
              <a class="nav-link active text-white" aria-current="page" href="!#">
                Link1
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="!#">
                Link2
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link text-white" href="!#">
                Link3
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link text-white"   href="!#">
                Link4
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
  );
}


export default Nav;
