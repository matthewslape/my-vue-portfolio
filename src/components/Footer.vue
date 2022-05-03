<template>
  <div class="footer">
    <h8>&copy; Matthew Slape Design 2022 | all right reserved</h8>
    <a href="https://github.com/matthewslape" target="_blank">
      <img
        class="footerLink"
        id="github"
        src="../assets/svgs/github.svg"
        alt="Github Link"
    /></a>
    <a href="https://www.linkedin.com/in/matthew-slape/" target="_blank"
      ><img
        class="footerLink"
        id="linkedin"
        src="../assets/svgs/linkedin.svg"
        alt="LinkedIn Link"
    /></a>
    <a href="https://www.instagram.com/mslape_art/" target="_blank"
      ><img
        class="footerLink"
        id="instagram"
        src="../assets/svgs/instagram.svg"
        alt="Instagram Link"
    /></a>
  </div>
</template>
<script></script>

<style scoped>
h8 {
  font-size: 0.75rem;
  align-self: end;
  opacity: 50%;
  padding-right: 1vw;
  text-align: end;
}
.footer {
  padding: 1rem 1rem 2rem 2rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: fixed;
  bottom: 0;
  height: 5rem;
  width: 100%;
  z-index: 50;
}
.footerLink {
  height: 2rem;
  margin: 0.5rem;
  filter: drop-shadow(0 0 0.5rem rgb(0, 4, 41));
  transition: 0.4s ease-in-out;
}

.footerLink:hover {
  height: 3rem;
}

@media (max-width: 820px) {
  .footer {
    /*STYLED?*/

    /*padding: none;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    bottom: 0;
    right: 1rem;
    height: 4rem;
    width: 10rem;
    z-index: 100;
    background: #022269;
    padding: 1rem;
    border-radius: 6rem;
    margin-bottom: 1rem;
    border: solid white;*/

    position: revert;
  }
}

@media (min-width: 1600px) {
  .footerLink {
    width: 3rem;
    height: auto;
    margin: 1rem;
  }
  .footer {
    padding-right: 1rem;
  }
}
</style>
