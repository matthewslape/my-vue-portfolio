<template>
  <video
    muted
    class="coverPhoto"
    id="coverPhoto"
    preload="none"
    autoplay=""
    loop=""
    playsinline="true"
    src="../assets/videos/branding-key-video.mp4"
  ></video>
  <div class="articleWrapper">
    <h1>KEYTHECONNECT</h1>
    <h2>Branding and Creative Direction</h2>
    <p>
      The motto behind Key Connect is utilizing your own specialized Key that
      has built your identity to Connect yourself to growing opportunities. My
      goal was to help Keyvan, the owner of KTC, create a visual identity for
      Key Connect, as well as a few branding components.
    </p>
    <h4>Sketches</h4>
    <img
      class="infoPhoto"
      src="../assets/photos/branding/key/branding-key-sketches.jpeg"
      alt="KTC Sketches"
    />
    <img
      class="infoPhoto"
      src="../assets/photos/branding/key/branding-key-sketches2.jpeg"
      alt="KTC Sketches"
    />
    <h4>Final Product</h4>
    <img
      class="infoPhoto"
      src="../assets/photos/branding/key/branding-key-logo1.jpg"
      alt="KTC Logos"
    />
    <img
      class="infoPhoto"
      src="../assets/photos/branding/key/branding-key-logo2.jpg"
      alt="KTC Logos"
    />
    <img
      class="infoPhoto"
      src="../assets/photos/branding/key/branding-key-logo3.jpg"
      alt="KTC Logos"
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
