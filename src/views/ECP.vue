<template>
  <img
    class="coverPhoto"
    id="coverPhoto"
    src="../assets/photos/branding/ecp/branding-ecp-cover.jpg"
    alt="ECP Cover Photo, Photo by Dmitry Mishin on Unsplash
  "
  />
  <div class="articleWrapper">
    <h1>Energy Conservation Program</h1>
    <h2>Branding and Production Design</h2>
    <p>
      The Energy Conservation Program is a subdivision of Cheney Public Works
      that helps the homeowners of Cheney get rebates on appliance upgrades, in
      order to decrease energy usage. The problem was that not many people knew
      about this program. My mission was to create a visual identity for the
      ECP, as well as a few promotional pieces to get the word out.
    </p>
    <img
      class="infoPhoto"
      src="../assets/photos/branding/ecp/branding-ecp-sketches.png"
      alt="ECP Logo Sketches"
    />
    <img
      class="infoPhoto"
      src="../assets/photos/branding/ecp/branding-ecp-logosheet.png"
      alt="ECP Logos"
    />
    <img
      class="infoPhoto"
      src="../assets/photos/branding/ecp/branding-ecp-icons.png"
      alt="ECP Icons"
    />
    <img
      class="infoPhoto"
      src="../assets/photos/branding/ecp/branding-ecp-mockups.png"
      alt="ECP Mockups"
    />
    <a
      href="https://issuu.com/matthewslape/docs/ecp-vcd3_brandingguide"
      target="_blank"
    >
      <h2 class="protoButton">Brand Guide Link</h2>
    </a>
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

p,
h2,
h4,
h5,
h6 {
  text-align: left;
}
.articleWrapper {
  width: 70vw;
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

.finalPhoto {
  width: 90vw;
  height: auto;
  align-self: center;
  padding: 3rem 0rem 3rem 0rem;
  transition: 0.5s ease-in-out;
}

.finalPhoto:hover {
  transform: translateY(-20px);
}

.protoButton {
  color: white;
  max-width: 22rem;
  height: 3rem;
  background: #101010;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.1s ease-in-out;
  margin: auto;
  margin-top: 2rem;
  padding: 0rem 1rem;
}
.protoButton:hover {
  background: #577b8a;
  color: #edc620;
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

@media (min-width: 850px) {
  p {
    font-size: 1.25rem;
  }
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
