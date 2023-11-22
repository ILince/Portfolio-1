<!-- /* ------------------ MODALE 1 --------------------------------------*/ -->
<template>
    <div v-if="modale1" class="bloc-modale">

        <div class="overlay" v-on:click="toggleModale1"></div>

        <div class="modale card">
            <div class="btn-modale btn btn-danger" v-on:click="toggleModale1">X</div>

            <div style="max-width: 700px;">
                <img src="src/assets/images/Portfolio images/Cv.png" alt="">

                <div class="info-box">
                    <h4>My first Cv Online</h4>
                    <div class="tag">curriculum vitae</div>
                    <div class="detail">HTML / CSS3</div>
                    <a href="https://github.com/ILince/Exercise-1" target="_blank">
                        <div class="button">VIEW SITE</div>
                    </a>
                </div>
                <time datetime="2023-09-28T19:00">09/2023.</time>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Modale',
    props: ['modale1', 'toggleModale1']
}
</script>

<style scoped>
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