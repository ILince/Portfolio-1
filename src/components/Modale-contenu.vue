<!-- /* ------------------ MODALE CONTAINER --------------------------------------*/ -->

<template>
  
  <div class="projects">
    <div>
      <img class="card" src="../assets/images/Portfolio images/Cv.png" alt="" />
      <div class="projects-text">
        <h4>My first Cv Online</h4>
        <p>HTML / CSS3</p>
      </div>
    </div>
    <modale v-bind:modale1="modale1" v-bind:toggleModale1="toggleModale1"></modale>
    <div v-on:click="toggleModale1" class="btn">VIEW MORE</div>
  </div>

  <div class="projects">
    <div>
      <img class="card" src="../assets/images/Portfolio images/Comment.png" alt="" />
      <div class="projects-text">
        <h4>Comment area</h4>
        <p>JavaScript</p>
      </div>
    </div>
    <modale-comment v-bind:modale2="modale2" v-bind:toggleModale2="toggleModale2"></modale-comment>
    <div v-on:click="toggleModale2" class="btn btn-success">VIEW MORE</div>
  </div>

  <div class="projects">
    <div>
      <img class="card" src="../assets/images/Portfolio images/Astronaut-Remote-Work.jpg"
        alt="Illustration of a astronaut working on his laptop" />
      <div class="projects-text">
        <h4>Work in progress ...</h4>
        <p>...</p>
      </div>
    </div>
    <modale-in-progress v-bind:modale3="modale3" v-bind:toggleModale3="toggleModale3"></modale-in-progress>
    <div v-on:click="toggleModale3" class="btn btn-success">VIEW MORE</div>
  </div>
  <div class="projects">
    <div>
      <img class="card" src="../assets/images/Portfolio images/Astronaut-Remote-Work.jpg"
        alt="Illustration of a astronaut working on his laptop" />
      <div class="projects-text">
        <h4>Work in progress ...</h4>
        <p>...</p>
      </div>
    </div>
    <modale-in-progress v-bind:modale3="modale3" v-bind:toggleModale3="toggleModale3"></modale-in-progress>
    <div v-on:click="toggleModale3" class="btn btn-success">VIEW MORE</div>
  </div>
  <div class="projects">
    <div>
      <img class="card" src="../assets/images/Portfolio images/Astronaut-Remote-Work.jpg"
        alt="Illustration of a astronaut working on his laptop" />
      <div class="projects-text">
        <h4>Work in progress ...</h4>
        <p>...</p>
      </div>
    </div>
    <modale-in-progress v-bind:modale3="modale3" v-bind:toggleModale3="toggleModale3"></modale-in-progress>
    <div v-on:click="toggleModale3" class="btn btn-success">VIEW MORE</div>
  </div>
  <div class="projects">
    <div>
      <img class="card" src="../assets/images/Portfolio images/Astronaut-Remote-Work.jpg"
        alt="Illustration of a astronaut working on his laptop" />
      <div class="projects-text">
        <h4>Work in progress ...</h4>
        <p>...</p>
      </div>
    </div>
    <modale-in-progress v-bind:modale3="modale3" v-bind:toggleModale3="toggleModale3"></modale-in-progress>
    <div v-on:click="toggleModale3" class="btn btn-success">VIEW MORE</div>
  </div>
  
  
</template>

<script>
import ModaleCvVue from './Modales.vue/Modale-cv.vue';
import ModaleComment from './Modales.vue/Modale.comment.vue';
import ModaleInProgressVue from './Modales.vue/Modale-in-progress.vue';


export default {
  name: 'Contenu',
  data(){
    return{
      modale1: false,
      modale2: false,
      modale3: false
    }
  },
  components: {
    'modale': ModaleCvVue,
    'modale-comment': ModaleComment,
    'modale-in-progress': ModaleInProgressVue
},
  methods:{
    toggleModale1: function(){
      this.modale1 = !this.modale1
    },

    toggleModale2: function(){
      this.modale2 = !this.modale2
    },

    toggleModale3: function(){
      this.modale3= !this.modale3
    }
  }
}
</script>

<style scoped>
.projects {
  background-color: #d9d9d9d0;
  margin: 10px;
  width: 500px;
  border: solid rgba(250, 250, 250, 0.555) 10px;
  
}
.projects:hover{
  box-shadow: 3px 4px 5px #1b242f;
}

.card {
  top: 0;
  object-fit:cover;
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

.btn {
  background-color: #252934;
  color: #fff;
  float: center;
  font-size: 12pt;
  margin: 5px 0 0 0;
  outline: 0;
  padding: 10px 30px;
  cursor: pointer;
}

.btn:hover {
  background: #e31b6d;
}
.bloc-modale {
    position: fixed;
    top: 10%;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}

.overlay {
    background: rgba(0, 0, 0, 0.185);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

}

.modale {
    border: solid #e31b6d;
    width: auto;
    height: auto;
    background: #f1f1f1;
    color: #333;
    padding: 20px;
    position: fixed;

}

.btn-modale {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;

}

.btn-danger {
    display: flex;
    justify-content: center;
    align-items: center;
    color: azure;
    background: #e31b6d;
    width: 15px;
    border-radius: 30%;
}
</style>
