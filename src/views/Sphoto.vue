<template>
  <img
    class="coverPhoto"
    id="coverPhoto"
    src="../assets/photos/branding/sphoto/branding-sphoto-sketches.jpg"
    alt="ECP Cover Photo, Photo by Dmitry Mishin on Unsplash
  "
  />
  <div class="articleWrapper">
    <h1>Samantha Rhea Photography</h1>
    <h2>Branding and Creative Direction</h2>
    <p>
      Samantha approached me seeking assistance with establishing her
      photography company and enhancing her brand identity. She discovered my
      services through a referral from a mutual acquaintance and expressed
      admiration for the artistic style portrayed in my illustrations. My task
      entailed the development of a primary logo as well as several
      illustrations, complemented by a meticulously curated color palette to
      align with Samantha's creative vision.
    </p>
    <h4>Proccess</h4>
    <div class="grid">
      <img
        src="../assets/photos/branding/sphoto/branding-sphoto-sketches2.jpg"
        alt="SR Photo Sketches"
      />
      <img
        src="../assets/photos/branding/sphoto/branding-sphoto-sketches.jpg"
        alt="SR Photo Sketches"
      />
    </div>
    <h4>illustrations</h4>
    <div class="grid">
      <img
        src="../assets/photos/branding/sphoto/branding-sphoto-icon1.png"
        alt="SR Photo Icons"
      />
      <img
        src="../assets/photos/branding/sphoto/branding-sphoto-icon2.png"
        alt="SR Photo Icons"
      />
      <!--<img
        src="../assets/photos/branding/sphoto/branding-sphoto-icon3.png"
        alt="SR Photo Icons"
      />-->
      <img
        src="../assets/photos/branding/sphoto/branding-sphoto-icon4.png"
        alt="SR Photo Icons"
      />
      <img
        src="../assets/photos/branding/sphoto/branding-sphoto-icon5.png"
        alt="SR Photo Icons"
      />
    </div>
    <h4>Final Logo</h4>
    <img
      class="infoPhoto"
      src="../assets/photos/branding/branding-cardPhoto-sphoto.png"
      alt="SR Photo Logo"
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
  object-position: top;
}

.directory {
  display: flex;
  justify-content: space-around;
  width: 40%;
  max-width: 25rem;
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
