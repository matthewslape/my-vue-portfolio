<template>
  <img
    class="coverPhoto"
    id="coverPhoto"
    src="../assets/photos/ux/ux-cardPhoto-wikiHow.png"
    alt="wikiHow Cover Photo"
  />
  <div class="articleWrapper">
    <h1>WikiHow App Redesign</h1>
    <h4>Overview</h4>
    <p>
      The goal of this project was to create a more usable, easily navigated
      mobile interface for wikiHow users.
      <i
        >(This is a personal project and in no way is affiliated with
        wikiHow)</i
      >
    </p>
    <h4>Why is this a thing?</h4>
    <p>
      The current wikiHow app is confusing and hard to navigate and use. I saw
      this as an opportunity to solve a problem, and practice my UX skills.
    </p>
    <div class="detailCard">
      <h5>Client</h5>
      <h6>wikiHow (Hypothetical)</h6>
      <h5>Timeline</h5>
      <h6>6 to 8 weeks</h6>
      <h5>Tools</h5>
      <h6>Paper, Pencil, Moleskine Flow App, Figma, Milanote.</h6>
      <h5>My Role</h5>
      <h6>UX Designer (Individual Project)</h6>
    </div>
    <h4>Audit of the old wikiHow App</h4>
    <p>
      I started off this project by auditing the old wikiHow app. I went through
      it as a user, and took notes on what made sense to me and what did not. I
      found some problems like no indicator or title to the page you are on, the
      menu style feeling out of place, the options button not making sense, and
      much more. I took note of these problems, so that I could solve them in my
      redesign.
    </p>
    <img
      class="infoPhoto"
      src="../assets/photos/ux/wikihow/ux-wikihow-audit.png"
      alt="wikiHow Audit"
    />
    <h4>Sketches and Ideation</h4>
    <img
      class="infoPhoto"
      src="../assets/photos/ux/wikihow/ux-wikihow-sketch1.png"
      alt="wikiHow App Sketch 1"
    />
    <img
      class="infoPhoto"
      src="../assets/photos/ux/wikihow/ux-wikihow-sketch2.png"
      alt="wikiHow App Sketch 2"
    />
    <h4>Finished Project</h4>
    <p>
      After analysing and building a usable system that made sense for wikiHow
      and their app, I designed and wireframed a prototype of the redesign of
      the app. Through auditing and finding problems in the old app, ideating
      and sketching out a new system to solve those problems, and designing a
      wireframe, I feel that I improved the app through proper UX and design
      practices.
    </p>
    <img
      class="finalPhoto"
      src="../assets/photos/ux/wikihow/ux-wikihow-mockups.png"
      alt="wikiHow App Mockup"
    />
    <a
      href="https://www.figma.com/proto/CdPL9dy8oGBE3renvw1xUn/wikiHow-App-Redesign?node-id=123%3A905&scaling=scale-down&page-id=123%3A759"
      target="_blank"
    >
      <h2 class="protoButton">Prototype Link</h2>
    </a>
  </div>
  <div class="directory">
    <a href="#coverPhoto"><h5 class="dOption">to Start</h5></a>
    <a href="/ux"><h5 class="dOption">to UX Work</h5></a>
    <a href="/"><h5 class="dOption">to Home</h5></a>
  </div>
</template>

<script></script>

<style scoped>
h1 {
  text-transform: none;
  text-align: left;
}

p,
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
.detailCard {
  background: #f1f1f1;
  padding: 1rem;
  margin: 1vw;
  border-radius: 8px;
}

.infoPhoto {
  margin-bottom: 3rem;
  margin: 1vw;
  border: solid black 5px;
  border-radius: 15px;
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
  font-weight: 800;
  color: white;
  max-width: 20rem;
  height: 3rem;
  background: #101010;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.1s ease-in-out;
  margin-top: 2rem;
  margin: auto;
  padding: 0rem 1rem;
}
.protoButton:hover {
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
  font-size: 140%;
}

@media (max-width: 900px) {
  .infoPhoto {
    width: 100vw;
    height: auto;
    align-self: center;
    border-radius: 0px;
    border: none;
  }
  .finalPhoto {
    width: 180vw;
  }
  .directory {
    flex-direction: column;
  }
}
</style>
