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
      The objective of this project was to develop a highly functional and
      user-friendly mobile interface for wikiHow users. It is important to note
      that this project is a personal endeavor and is not affiliated with
      wikiHow.
    </p>
    <h4>Rationale</h4>
    <p>
      The existing wikiHow app suffers from usability issues and presents
      challenges in terms of navigation and user experience. Recognizing this as
      an opportunity to address these issues and further enhance my UX skills, I
      embarked on this project.
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
    <h4>Audit of the Previous wikiHow App</h4>
    <p>
      To begin the project, I conducted a thorough assessment of the previous
      wikiHow app. By assuming the role of a user, I carefully examined its
      strengths and weaknesses. During this analysis, I identified several
      issues, such as the absence of clear page indicators or titles, a
      mismatched menu style, and a confusing options button, among others. These
      observations were documented meticulously in order to address them
      effectively in my redesign.
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
    <h4>Completed Project</h4>
    <p>
      After a comprehensive analysis and the development of a coherent system
      tailored specifically for wikiHow and its app, I proceeded to design and
      create wireframes for the app's redesign. Leveraging my findings from the
      audit stage, I successfully generated innovative solutions to overcome the
      identified problems. Through this iterative process of auditing, ideation,
      sketching, and wireframing, I am confident that I have significantly
      improved the app's overall user experience and functionality, employing
      sound UX principles and design practices.
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
.detailCard {
  background: #dea511;
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
a {
  align-self: center;
}
.protoButton {
  font-weight: 800;
  color: #0a090c;
  max-width: 20rem;
  height: 3rem;
  background: white;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.1s ease-in-out;
  margin-top: 2rem;
  margin: 1rem;
  padding: 0rem 1rem;
}
.protoButton:hover {
  background: white;
  color: #0a090c;
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
