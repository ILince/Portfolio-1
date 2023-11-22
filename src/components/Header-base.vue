<!-- /* ------------------ HEADER/NAV BAR -----------------------------------------*/ -->
<template>
  <nav>
    <div class="main-navlinks">
      <button class="hamburger" type="button" aria-label="Toggle navigation" aria-expanded="flase">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div class="navlinks-container">
        <a class="home active" href="#home">HOME</a>
        <a class="about" href="#about">ABOUT</a>
        <a class="portfolio" href="#portfolio">PORTFOLIO</a>
        <a class="contact" href="#contact">CONTACT</a>
      </div>
    </div>
    <a href="#home" class="nav-incon"><img src="../assets/images/planet-earth.png" alt="earth incon." width="50" /></a>
  </nav>
</template>

<script>
export default {
  name: "Header-base",
};


</script>

<style scoped>
/* ------------------ NAVIGATION BAR STYLE PC ---------------------------------*/
nav {
  z-index: 4;
  bottom: -80px;
  position: absolute;
  width: 100%;
  background-color: #1b242f;
  box-shadow: inset 0px -3px 0px #04c2c9;
  font-size: 1.4em;
  display: flex;
  align-items: center;
  padding: 15px 25px;
  justify-content: space-between;
}

nav.scroll {
  bottom: inherit;
  position: fixed;
  left: 0;
  top: -100px;
  transform: translateY(100px);
  transition: all 0.3s ease-out;
}

.main-navlinks {
  display: flex;
  align-items: center;
}

.navlinks-container a {
  margin: 0 10px;
  transition: color 0.5s;
  display: inline-block;
  position: relative;
}

.navlinks-container a::after {
  content: "";
  display: block;
  position: absolute;
  bottom: -3px;
  width: 100%;
  height: 1px;
  transform: scaleX(0);
  transform-origin: left;
  background: #e31b6d;
  transition: transform 0.3s ease-out;
}

.navlinks-container a:hover {
  color: #e31b6d;
}

.navlinks-container a:hover::after {
  transform: scaleX(1);
}

.active {
  color: #e31b6d;
  border-bottom: solid #e31b6d 1px;
  transition: transform 0.3s ease-out;
}

.hamburger {
  display: none;
}

/* ------------------ NAVIGATION BAR STYLE MOBILE ---------------------------------*/


@media (max-width: 600px) {
  nav {
    padding: 15px 20px;
  }

  .hamburger {
    width: 20px;
    height: 20px;
    cursor: pointer;
    border: none;
    display: flex;
    background: #1b242f;
    align-items: center;
    position: relative;
  }

  .hamburger span {
    display: block;
    width: 100%;
    height: 2px;
    background: #d9d9d9;
    position: absolute;
    pointer-events: none;
    transition: opacity 0.3s 0.15s ease-out;
  }

  .hamburger span:nth-child(1),
  .hamburger span:nth-child(3) {
    transition: transform 0.3s ease-out;
  }

  .hamburger span:nth-child(1) {
    transform: translateY(7px);
  }

  .hamburger span:nth-child(3) {
    transform: translateY(-7px);
  }

  .hamburger.open span:nth-child(1) {
    transform: translate(0) rotate(135deg);
  }

  .hamburger.open span:nth-child(2) {
    opacity: 0;
    transition: opacity 0s ease-out;
  }

  .hamburger.open span:nth-child(3) {
    transform: translate(0) rotate(-135deg);
  }

  .navlinks-container {
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    position: absolute;
    background: #1b242f;
    top: 100%;
    left: 0;
    height: 100vh;
    padding: 15px 40px 15px 15px;
    border-right: solid #04c2c9;
    transform: translate(-100%);
  }

  .open {
    transform: translate(0%);
  }

  .navlinks-container a {
    margin: 10px 0;
  }
}
</style>