<template>
  <section id="home">
    <img class="background-gif"
      src="https://cdn.dribbble.com/users/10958/screenshots/3427005/media/7dd44c1bca38741dc56e012072790cb3.gif"
      type="image/gif"
      alt="animated image of a mountainous forest landscape at night. there is a person who playing guitar in front of a lake. there is a blue geant planet and stars in the sky." />

    <div class="home-container">
      <h1 class="home-title">
        Hey, I'm <span>Lehacaut Allan</span><br />I'm a full-stack web
        developper
      </h1>
      <a class="explore-button" href="#about">Explore</a>
    </div>
  </section>

  <section id="about">
    <img class="backgound-about" src="../assets/images/Space 2.png" alt="illustration of 3 planets in space." />
    <img class="profile-image" src="../assets/images/Space profile.png" alt="Illustration of a man typing on his laptop"
      width="900px" />

    <div class="about-container">
      <h2>ABOUT</h2>

      <div class="hiddenBlock-label">
        <div class="hiddenBlock"></div>

        <div class="label-description">
          <p class="about-description">
            I'm Lehacaut Allan and I use Lince as a nickname on social networks.
            I am a full-stack web developer. Passionate about our univers and
            technologies, I like to create and I'm always curious to learn more
            about new tech and creative coding. <br />Let's make something
            special.
          </p>

          <div class="flex-label">
            <div class="label-container">
              <div class="label-items">
                <img src="../assets/images/About images/main-robotique.png" alt="illustration of a robotic hands."
                  width="150px" />
                <h3>Ituitive</h3>
                <p>Strong preference for easy to use, intuitive UX/UI</p>
              </div>

              <div class="label-items">
                <img src="../assets/images/About images/science-fiction.png" alt="Illustration of a dynamic screen."
                  width="150px" />
                <h3>Dynamic</h3>
                <p>
                  Websites don't have to be static, I love making pages come to
                  life.
                </p>
              </div>
            </div>

            <div class="label-container">
              <div class="label-items">
                <img src="../assets/images/About images/trou-noir.png" alt="Illustration of a galaxy." width="150px" />
                <h3>Creative</h3>
                <p>I never run out of creative ideas.</p>
              </div>

              <div class="label-items">
                <img src="../assets/images/About images/vaisseau-spatial.png" alt="Illustration of a spaceship."
                  width="150px" />
                <h3>Fast</h3>
                <p>
                  Fast load times and lag free interaction, my highest priority.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="portfolio">
    <img class="background-portfolio" src="../assets/images/Space 3.png" alt="illustration of 2 planets in space." />

    <div class="portfolio-container">
      <h2>Portfolio</h2>

      <div id="gallery" class="container-flex">
        <modale-contenu></modale-contenu>
      </div>
    </div>
  </section>

  <section id="contact">
    <img class="contact-background" src="../assets/images/Space 4.png" alt="Illustration of space" />
    <div class="contact-container">
      <h2>Contact</h2>

      <div class="contact-text">Have a question or want to work together ?</div>
      <form>
        <input class="form-input" placeholder="Name" type="text" name="name" required="" />
        <input class="form-input" placeholder="Enter email" type="email" name="email" required="" />

        <textarea class="form-input" placeholder="Your Message" type="text" name="message" style="height: 151px"
          required=""></textarea>
        <input type="submit" id="submit" value="SUBMIT" />
      </form>
    </div>
  </section>
</template>

<script>
/* ------------------ MODALE CONTAINER IMPORT -------------------------------------------*/
import ModaleContenuVue from "./Modale-contenu.vue";

export default {

  name: "Home-Page",
  components: {
    "modale-contenu": ModaleContenuVue,
  },
};
</script>

<style>
/* ------------------ HOME STYLE START -------------------------------------------*/
#home {
  height: 100vh;
  display: flex;
  align-items: center;
  border: none;
  font-size: calc(0.5rem + 1vw);
}

.background-gif {
  position: absolute;
  object-fit: cover;
  height: 100vh;
  width: 100%;
}

.home-container {
  width: 100%;
  position: relative;
  padding: 0 16%;
  margin-bottom: 16%;
  display: flex;
  flex-direction: column;
  align-items: end;
}

.explore-button {
  text-decoration: none;
  color: #d9d9d9;
  font-size: 24px;
  border: 2px solid #d9d9d9;
  padding: 14px 70px;
  border-radius: 50px;
  margin-top: 20px;
}

.home-title {
  color: #d9d9d9;
}

.home-title span {
  color: #e31b6d;
}

/* ------------------ HOME STYLE END ---------------------------------------------*/



/* ------------------ ABOUT STYLE START ------------------------------------------*/
#about {
  background-color: #d9d9d9;
  position: relative;
  z-index: -3;
  width: 100%;
  min-height: 100vh;
}

.profile-image {
  z-index: -2;

  position: absolute;
  object-fit: cover;
  margin-top: 8%;
  transition: all 0.3s ease-in-out;
}

.backgound-about {
  z-index: -2;
  position: absolute;
  top: 0;
  object-fit: cover;
  height: 100%;
  transition: all 0.6s ease-in-out;
}

.about-container {
  padding-top: 100px;
  background: linear-gradient(to right, rgba(0, 0, 0, 0) 15%, #d9d9d9);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.hiddenBlock {
  width: 100%;
  height: auto;
}

.hiddenBlock-label {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.flex-label {
  padding: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.label-items {
  padding: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.label-description {
  border-radius: 30px;
  padding: 30px;
  display: flex;
  flex-direction: column;
}

.about-description {
  color: white;
  background-color: #1b242f;
  padding: 30px;
  margin-top: 50px;
  border-radius: 30px;
  width: 100%;
  font-size: 1.3em;
}

.label-items p {
  padding: 5px;
  font-size: 1.4em;
}

/* ---------- About style mobile --------------*/
@media (max-width: 1500px) {
  .backgound-about {
    opacity: 15%;
  }

  .profile-image {
    opacity: 0;
  }
}

/* ------------------  ABOUT STYLE END -------------------------------------------*/

/* ------------------ PORTFOLIO STYLE START --------------------------------------*/
#portfolio {

  background-color: #c7bebe;
  position: relative;
}

.background-portfolio {

  position: absolute;
  right: 0;
  top: 0;
  object-fit: cover;
  height: 100%;
  min-width: 50%;
}

.portfolio-container {

  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.container-flex {
  z-index: 3;
  margin: 5%;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.projects {
  background-color: #d9d9d9d0;
  margin: 10px;
  width: 500px;
  border: solid rgba(250, 250, 250, 0.555) 10px;
}

.card {
  object-fit: cover;
  height: 300px;
  width: 100%;
  border-bottom: solid rgba(250, 250, 250, 0.815) 10px;
}

.projects-text {
  margin: 8px;
}

.projects-text p {
  color: #e31b6d;
  font-weight: 700;
}

.button {
  background-color: #252934;
  color: #fff;
  font-size: 12pt;
  margin: 5px 0 0 0;
  outline: 0;
  padding: 10px 30px;
  cursor: pointer;
}

.button:hover {
  background: #e31b6d;
}

/* ------------------ PORTFOLIO STYLE END ----------------------------------------*/

/* ------------------ CONTACT STYLE START ----------------------------------------*/
#contact {
  position: relative;
  width: 100%;
  min-height: 100vh;
}

.contact-background {
  position: absolute;
  object-fit: cover;
  height: 100%;
  width: 100%;
}

.contact-container {
  max-width: 523px;
  top: 100px;
  margin-left: 7%;
  margin-right: 7%;
  position: absolute;
  border-radius: 10%;
  background: radial-gradient(#2529348a, #252934);
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  padding: 40px;
}

form {
  width: 100%;
  height: auto;
}

#contact h2 {
  color: #d9d9d9;
  border-color: #d9d9d9;
  margin-top: 20px;
}

.contact-text {
  color: #04c2c9;
  font-weight: 600;
  margin: 50px;
}

.form-input {
  background: #1e242c;
  border: 0;
  box-sizing: border-box;
  color: #fff;
  display: block;
  font-size: 12pt;
  margin-bottom: 3px;
  outline: none;
  padding: 10px 15px;
  width: 100%;
}

#submit {
  background: transparent;
  color: #fff;
  float: right;
  font-size: 12pt;
  margin: 5px 0 0 0;
  outline: 0;
  padding: 10px 30px;
  border: solid white;
  cursor: pointer;
}

#submit:hover {
  background: #04c2c9;
  border: solid #04c2c9;
}

/* ------------------ CONTACT STYLE END ------------------------------------------*/
</style>
