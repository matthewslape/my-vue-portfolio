<template>
  <div class="footerWrapper">
    <img
      class="arrow"
      src="../assets/svgs/down-arrow.svg"
      alt="Flashing Arrow"
    />
    <div class="footer">
      <h8>&copy; MS Design 2023 | all rights reserved</h8>
      <div class="buttons">
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
    </div>
  </div>
</template>

<style scoped>
h8 {
  text-transform: uppercase;
  font-weight: 600;
  font-size: 0.75rem;
  opacity: 0.5;
  text-align: start;
  transform: translateX(1rem);
}
.buttons {
  display: flex;
  align-items: center;
}
.footer {
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  bottom: 0;
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
  transform: scale(1.2);
}

.arrow {
  animation: blinker 5s;
  opacity: 0;
  width: 4vw;
  height: auto;
}

.footerWrapper {
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-content: flex-end;
  position: fixed;
  bottom: 0;
  height: 5rem;
  width: 100%;
  z-index: 50;
}

@keyframes blinker {
  0% {
    opacity: 1;
  }
  20% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
  60% {
    opacity: 0;
  }
  80% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@media (max-width: 820px) {
  .footer {
    position: revert;
  }
  .footerWrapper {
    position: revert;
  }
  .arrow {
    display: none;
  }
  h8 {
    transform: translateX(0);
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
