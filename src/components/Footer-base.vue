<!-- /* ------------------ FOOTER BASE -----------------------------------------*/ -->
<template>
  <footer>
    <a class="up-page-button" href="#home"><img src="../assets/images/Footer images/fleche-vers-le-haut.png" width="50"
        alt="" /></a>

    <div class="icon-container">
      <a href="https://github.com/ILince" target="_blank"><img class="icon"
          src="../assets/images/Footer images/social (1).png" alt="" width="80" /></a>
      <a href="https://www.instagram.com/" target="_blank"><img class="icon"
          src="../assets/images/Footer images/instagram.png" alt="" width="80" /></a>
      <a href="https://fr.linkedin.com/" target="_blank"><img class="icon" src="../assets/images/Footer images/link.png"
          alt="" width="80" /></a>
      <a href="https://www.facebook.com/" target="_blank"><img class="icon"
          src="../assets/images/Footer images/facebook.png" alt="" width="80" /></a>
    </div>
    <div class="info-box">
      <div class="footnote">
        Lehacaut Allan <time datetime="2023">©2023</time>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer-base",
};
</script>

<style scoped>
footer {
  background: #1b242f;
  padding: 70px 0 50px 0;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.up-page-button {
  cursor: pointer;
  height: 50px;
  margin: 0 auto;
  position: absolute;
  top: -25px;
  width: 47px;
}

.icon {
  object-fit: cover;
  height: 70px;
  margin: 10px;
  cursor: pointer;
  border: solid rgba(29, 28, 28, 0.705) 5px;
  border-radius: 10px;
}

.icon:hover {
  border: solid #e31b6d 5px;
}

.footnote {
  color: #8f9aa7;
  font-size: 1.4em;
  margin-top: 35px;
  opacity: 0.6;
}

time {
  color: #e31b6d;
}

</style>
