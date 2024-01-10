import styled from "styled-components";

export default styled.div`
  .navbar-nav {
    align-items: center;
  }

  .navbar-brand {
    margin-right: 0;
    margin-bottom: 0.5em;
  }

  .navbar {
    background-color: black;
  }

  .navbar .navbar-nav .nav-link {
    color: var(--color1);
    font-size: 1.4em;
    padding: 1.5em 1.5em;
    font-family: "Caprasimo", cursive;
  }

  .navbar .navbar-nav .nav-link:hover {
    color: var(--color2);
  }

  .dropdown-menu {
    background-color: black;
  }

  .dropdown-menu a {
    font-family: "Caprasimo", cursive;
    color: var(--color1);
    text-align: center;
  }
  .dropdown-menu p {
    font-family: "Caprasimo", cursive;
    color: var(--color1);
    text-align: center;
  }

  @media screen and (max-width: 992px) and (orientation: landscape) {
    /* Target iPad landscape orientation */
    .navbar-brand img {
      width: 60px;
      height: 60px; /* Smaller logo size for iPad landscape */
    }
  }

  @media screen and (max-width: 768px) and (orientation: portrait) {
    /* Target iPad portrait orientation */
    .navbar-brand img {
      width: 60px;
      height: 60px; /* Smaller logo size for iPad portrait */
    }
  }
`;