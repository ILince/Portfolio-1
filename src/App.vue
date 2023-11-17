<script setup></script>

<template>
  <header>

  </header>

  <main>
    <section id="home">
      <img
        class="background-gif"
        src="https://cdn.dribbble.com/users/10958/screenshots/3427005/media/7dd44c1bca38741dc56e012072790cb3.gif"
        type="image/gif"
        alt="animated image of a mountainous forest landscape at night. there is a person who playing guitar in front of a lake. there is a blue geant planet and stars in the sky."
      />

      <div class="home-container">
        <h1 class="home-title">
          Hey, I'm <span>Lehacaut Allan</span><br />I'm a full-stack web
          developper
        </h1>
        <a class="explore-button" href="#about">Explore</a>
      </div>
    </section>

    <nav>
      <img src="./assets/images/planet-earth.png" class="logo" width="50" />
      <ul>
        <li><a href="#home">HOME</a></li>
        <li><a href="#about">ABOUT</a></li>
        <li><a href="#portfolio">PORTFOLIO</a></li>
        <li><a href="#contact">CONTACT</a></li>
      </ul>
    </nav>

    <section id="about">
      <img class="backgound-about" src="./assets/images/Space 2.png" alt="" />
      <img
        class="profile-image"
        src="./assets/images/Space profile.png"
        alt=""
        width="900px"
      />

      <div class="about-container">
        <h2>ABOUT</h2>

        <div class="hiddenBlock-label">
          <div class="hiddenBlock"></div>

          <div class="label-description">
            <p class="about-description">
              I'm Joe Dao and I use Lince as a nickname on social networks. I am
              a full-stack web developer. Passionate about our univers and
              technologies, I like to create and I'm always curious to learn
              more about new tech and creative coding. <br />Let's make
              something special.
            </p>

            <div class="flex-label">
              <div class="label-container">
                <div class="label-items">
                  <img
                    src="./assets/images/About images/main-robotique.png"
                    alt=""
                    width="150px"
                  />
                  <h3>Ituitive</h3>
                  <p>Strong preference for easy to use, intuitive UX/UI</p>
                </div>

                <div class="label-items">
                  <img
                    src="./assets/images/About images/science-fiction.png"
                    alt=""
                    width="150px"
                  />
                  <h3>Dynamic</h3>
                  <p>
                    Websites don't have to be static, I love making pages come
                    to life.
                  </p>
                </div>
              </div>

              <div class="label-container">
                <div class="label-items">
                  <img
                    src="./assets/images/About images/trou-noir.png"
                    alt=""
                    width="150px"
                  />
                  <h3>Creative</h3>
                  <p>I never run out of creative ideas.</p>
                </div>

                <div class="label-items">
                  <img
                    src="./assets/images/About images/vaisseau-spatial.png"
                    alt=""
                    width="150px"
                  />
                  <h3>Fast</h3>
                  <p>
                    Fast load times and lag free interaction, my highest
                    priority.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="portfolio">
      <img
        class="background-portfolio"
        src="./assets/images/Space 3.png"
        alt=""
      />

      <div class="portfolio-container">
        <h2>Portfolio</h2>

        <div class="projects-container">
          <div class="projects"></div>
          <div class="projects"></div>
          <div class="projects"></div>
          <div class="projects"></div>
          <div class="projects"></div>
          <div class="projects"></div>
        </div>
      </div>
    </section>

    <section id="contact">
      <img
        class="contact-background"
        src="./assets/images/Space 4.png"
        alt=""
      />
      <div class="contact-container">
        <h2>Contact</h2>

        <div class="contact-text">
          Have a question or want to work together ?
        </div>
        <form>
          <input
            class="form-input"
            placeholder="Name"
            type="text"
            name="name"
            required=""
          />
          <input
            class="form-input"
            placeholder="Enter email"
            type="email"
            name="email"
            required=""
          />
          
          <textarea
            class="form-input"
            placeholder="Your Message"
            type="text"
            name="message"
            style="height: 151px"
          ></textarea>
          <input type="submit" id="submit" value="SUBMIT" />
        </form>
      </div>
    </section>
    <footer>
      <a class="up-page-button" href="#home"
        ><img
          src="./assets/images/Footer images/fleche-vers-le-haut.png"
          width="50"
          alt=""
      /></a>

      <div class="icon-container">
        <a href="https://github.com/ILince" target="_blank"
          ><img
            class="icon"
            src="./assets/images/Footer images/social (1).png"
            alt=""
            width="80"
        /></a>
        <a href="https://www.instagram.com/" target="_blank"
          ><img
            class="icon"
            src="./assets/images/Footer images/instagram.png"
            alt=""
            width="80"
        /></a>
        <a href="https://fr.linkedin.com/" target="_blank"
          ><img
            class="icon"
            src="./assets/images/Footer images/link.png"
            alt=""
            width="80"
        /></a>
        <a href="https://www.facebook.com/" target="_blank"
          ><img
            class="icon"
            src="./assets/images/Footer images/facebook.png"
            alt=""
            width="80"
        /></a>
      </div>
      <div class="info-box">
        <div class="footnote">
          Lehacaut Allan <span class="highlight">©2023</span>
        </div>
      </div>
    </footer>
    
  </main>
</template>

<style scoped></style>
