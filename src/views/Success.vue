<template>
  <div class="wrapper">
    <animated-component animation-type="zoom">
      <div class="animationWrapper">
        <h1>SUCCESS</h1>
        <p>
          Thank you for reaching out; I truly appreciate it. I'll respond to you
          as quickly as I can!
        </p>
        <h5 class="homeButton"><a href="/">Back to Home Page</a></h5>
      </div>
    </animated-component>
  </div>
</template>
<script lang="js">
import AnimatedComponent from '@/components/AnimatedComponent.vue';
export default {
  name: "App",
  components: {
    AnimatedComponent
  }
}
</script>

<style scoped>
.animationWrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

h1 {
  margin-top: 7vw;
  background: #dea511;
  background-clip: text;
  color: transparent;
}
p {
  color: white;
  font-size: 1.5rem;
  padding: 1rem;
  max-width: 40rem;
}
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: black;
  width: 100vw;
  height: 90vh;
}
a {
  align-self: center;
  color: white;
}
.homeButton {
  text-transform: uppercase;
  font-weight: 800;
  color: white;
  max-width: 20rem;
  height: 3rem;
  background: #dea511;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.1s ease-in-out;
  margin: 1rem;
  padding: 0rem 1rem;
}
.homeButton:hover {
  scale: 1.1;
}
</style>
