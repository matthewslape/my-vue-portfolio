<template>
  <img
    class="coverPhoto"
    id="coverPhoto"
    src="../assets/photos/print/print-cardPhoto-lockett.png"
    alt="ECP Cover Photo, Photo by Dmitry Mishin on Unsplash
  "
  />
  <div class="articleWrapper">
    <h1>Tyler Lockett Poster</h1>
    <p>
      Tyler Lockett is a prominent American football wide receiver, currently
      showcasing his exceptional skills as a valued member of the Seattle
      Seahawks in the esteemed National Football League (NFL). Having been
      selected by the Seahawks during the third round of the 2015 NFL Draft,
      Lockett's talent and dedication have propelled him to achieve remarkable
      success in the sport. His football journey initially flourished during his
      collegiate years at Kansas State University, where he honed his skills and
      solidified his reputation as an outstanding player.
    </p>
    <p>
      In recognition of Tyler Lockett's exceptional contributions to the world
      of professional football, I have crafted this poster utilizing Adobe
      Photoshop. This creation serves as a testament to Lockett's prowess on the
      field and pays tribute to his commitment to the game.
    </p>
    <a
      class="protoButton"
      href="https://issuu.com/matthewslape/docs/tlPoster/1?ff"
      target="_blank"
    >
      <h2 class="protoButtonText">Poster Link</h2>
    </a>
    <div class="directory">
      <a href="#coverPhoto"><h5 class="dOption">to Start</h5></a>
      <a href="/print"><h5 class="dOption">to Print</h5></a>
      <a href="/"><h5 class="dOption">to Home</h5></a>
    </div>
  </div>
</template>

<script></script>

<style scoped>
h1 {
  text-transform: none;
  text-align: left;
}

h2 {
  opacity: 0.8;
  margin-bottom: 2rem;
}

h4 {
  padding-top: 4rem;
  padding-bottom: 1rem;
}

p,
h2,
h4,
h5,
h6 {
  text-align: left;
}
.articleWrapper {
  width: 86vw;
  max-width: 60rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
}
.coverPhoto {
  width: 100vw;
  height: 40vh;
  object-fit: cover;
  object-position: top;
}

.protoButtonText {
  font-weight: 800;
  color: #0a090c;
  max-width: 22rem;
  height: 3rem;
  background: white;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.1s ease-in-out;
  margin: 1rem;
  padding: 0rem 1rem;
}
.protoButton {
  align-self: center;
}

.protoButtonText:hover {
  background: #dea511;
}

.directory {
  display: flex;
  justify-content: space-between;
  width: 40%;
  max-width: 30rem;
  align-self: center;
  margin: auto;
  margin-top: 4rem;
  margin-bottom: 8rem;
}

.dOption {
  text-transform: uppercase;
  text-align: center;
  padding: 0.5rem;
  margin: 0.5rem;
  border-radius: 10px;
  background: #dea511;
  color: #0a090c;

  transition-duration: 0.5s;
}

.dOption:hover {
  font-size: 130%;
}

@media (max-width: 900px) {
  .infoPhoto {
    width: 100vw;
    height: auto;
    align-self: center;
    filter: none;
  }
  .finalPhoto {
    width: 180vw;
  }
  .directory {
    flex-direction: column;
  }
}
</style>
