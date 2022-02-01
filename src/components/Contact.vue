<template>
  <div class="contactWrapper">
    <div class="contactForm">
      <h1 class="contactHeader">Contact</h1>
    </div>
    <img class="swoosh2" src="../assets/svgs/swoosh2.svg" alt="decoration" />
  </div>
</template>
<script></script>

<style scoped>
.contactHeader {
  color: white;
}
.swoosh2 {
  object-fit: cover;
  width: 100vw;
  min-width: 430px;
}

/*MAYBE COPY LANDING AND BASE OFF THAT?*/
.contactForm {
}

@media (max-width: 450px) {
  .contactHeader {
    font-size: 10vw;
  }
}
@media (max-width: 1000px) {
  .contactHeader {
    font-size: 7vw;
  }
}
</style>
