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
      Tyler Lockett is an American football wide receiver for the Seattle
      Seahawks of the National Football League. He was drafted by the Seahawks
      in the third round of the 2015 NFL Draft. He played college football at
      Kansas State. Designed with Adobe Photoshop.
    </p>
    <h4>Final Poster</h4>
    <iframe
      src="https://issuu.com/matthewslape/docs/tlPoster/1?ff"
      width="100%"
      height="500px"
    />
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
