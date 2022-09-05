<template>
  <img
    class="coverPhoto"
    id="coverPhoto"
    src="../assets/photos/print/print-cardPhoto-jbPoster.png"
    alt="Poster Cover Poster
  "
  />
  <div class="articleWrapper">
    <h1>Jordan Burroughs Poster</h1>
    <h2>Personal Project</h2>
    <p>
      I have always had a passion for the sport of wrestling. It has taught me
      to be disciplined, work hard, and keep fighting even when the odds are
      against me. Jordan Burroughs is arguably one of the greatest wrestlers of
      all time, and a huge advocate for the sport. I created this poster in
      honor of him, and all he has done for the wrestling community. Designed
      with Adobe Photoshop.
    </p>
    <!--<h4>Final Poster</h4>
    <iframe
      src="https://issuu.com/matthewslape/docs/jbPoster/1?ff"
      width="100%"
      height="500px"
    />-->
    <a
      class="protoButton"
      href="https://issuu.com/matthewslape/docs/jbPoster/1?ff"
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
  color: white;
  max-width: 22rem;
  height: 3rem;
  background: #101010;
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
  background: #001d68;
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
  background: #f1f1f1;
  color: #001d68;
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
