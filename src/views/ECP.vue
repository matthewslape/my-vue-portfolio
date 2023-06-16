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
      The Energy Conservation Program (ECP) operates under the umbrella of
      Cheney Public Works, dedicated to assisting homeowners in Cheney to reduce
      energy consumption by offering rebates on appliance upgrades.
      Unfortunately, the program's awareness among the community was limited. In
      light of this, I was entrusted with the task of developing a comprehensive
      visual identity for the ECP and creating several promotional materials to
      effectively communicate the program's benefits and raise public awareness.
    </p>
    <h4>Proccess</h4>
    <img
      class="infoPhoto"
      src="../assets/photos/branding/ecp/branding-ecp-sketches.png"
      alt="ECP Logo Sketches"
    />
    <h4>Finished Product</h4>
    <div class="grid">
      <img
        src="../assets/photos/branding/ecp/branding-ecp-logosheet.png"
        alt="ECP Logos"
      />
      <img
        src="../assets/photos/branding/ecp/branding-ecp-icons.png"
        alt="ECP Icons"
      />
    </div>
    <h4>Promotional Assets</h4>
    <img
      class="infoPhoto"
      src="../assets/photos/branding/ecp/branding-ecp-mockups.png"
      alt="ECP Mockups"
    />
    <a
      href="https://issuu.com/matthewslape/docs/ecp-vcd3_brandingguide/1?ff"
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
a {
  align-self: center;
}

.protoButton {
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
  margin: 3rem;
  padding: 0rem 1rem;
}
.protoButton:hover {
  background: white;
  color: #0a090c;
}

.directory {
  display: flex;
  justify-content: space-around;
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

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-gap: 10px;
}

.grid img {
  width: 100%;
  height: auto;
}

.infoPhoto {
  width: 88vh;
  align-self: center;
}

@media (max-width: 600px) {
  .grid {
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
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
