<template>
  <img
    class="coverPhoto"
    id="coverPhoto"
    src="../assets/photos/branding/js/branding-js-cover.jpg"
    alt="ECP Cover Photo, Photo by Dmitry Mishin on Unsplash
  "
  />
  <div class="articleWrapper">
    <h1>JS Trucking and Excavation</h1>
    <h2>Branding and Creative Direction</h2>
    <p>
      Trucking and excavation services in Lewis, Thurston and Cowlitz counties.
      A business that takes pride in providing honest and reliable work. JS
      Trucking and Excavation needed an identity to convey this message, and my
      task was to create this visual identity for them.
    </p>
    <h4>Sketches</h4>
    <img
      class="infoPhoto"
      src="../assets/photos/branding/js/branding-js-sketches.jpg"
      alt="JS Logo Sketches"
    />
    <h4>Final Product</h4>
    <img
      class="infoPhoto"
      src="../assets/photos/branding/js/branding-js-sheet.png"
      alt="JS Logos"
    />
    <img
      class="infoPhoto"
      src="../assets/photos/branding/js/branding-js-pattern.png"
      alt="JS Pattern"
    />
    <h4>Mockups</h4>
    <img
      class="infoPhoto"
      src="../assets/photos/branding/js/branding-js-frontShirt.png"
      alt="JS T-Shirt"
    />
    <img
      class="infoPhoto"
      src="../assets/photos/branding/js/branding-js-backShirt.jpg"
      alt="JS T-Shirt"
    />
  </div>
  <div class="directory">
    <a href="#coverPhoto"><h5 class="dOption">to Start</h5></a>
    <a href="/branding"><h5 class="dOption">to Branding</h5></a>
    <a href="/"><h5 class="dOption">to Home</h5></a>
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
  object-position: center;
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
  font-size: 140%;
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
