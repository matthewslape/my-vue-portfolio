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
      The sport of wrestling has ignited a profound passion within me, serving
      as a constant source of inspiration. It has instilled in me invaluable
      virtues of discipline, perseverance, and unwavering determination, urging
      me to persist relentlessly even in the face of adversity. Among the
      luminaries who have graced the wrestling mat, Jordan Burroughs stands as
      an emblem of greatness, widely regarded as one of the greatest wrestlers
      of all time. His dedication and unwavering advocacy for the sport have
      left an indelible mark on the wrestling community.
    </p>
    <p>
      In homage to the remarkable achievements and indomitable spirit of Jordan
      Burroughs, I have created this poster, paying tribute not only to him but
      also to the transformative power of wrestling itself. Designed with the
      creative prowess of Adobe Photoshop, this artwork serves as a testament to
      the boundless inspiration that emanates from athletes who embody the
      essence of perseverance and triumph. May this poster serve as a reminder
      of the immense impact that dedication, resilience, and the pursuit of
      excellence can have on our own journeys within the realm of wrestling and
      beyond.
    </p>
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
