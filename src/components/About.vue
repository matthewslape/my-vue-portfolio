<template>
  <div class="aboutWrapper">
    <h1 class="aboutHeader" id="aboutUs">About Me</h1>
    <div class="aboutContent">
      <div class="leftColumn">
        <div class="aboutSub">Oh, Whats Up. My name is Matthew Slape.</div>
        <div class="aboutBody">
          <p>
            I am a <b>hardworking</b>, problem solving, coffee loving
            <b>human</b>, on a mission to serve others through design thinking.
            Fueled by my excessive need to <b>understand how things work</b>, my
            desire to learn is instinctive.
          </p>
          <p>
            I thrive in the realm of <b>organized creativity</b>, where my
            passion finds its truest expression. Across various fields, I derive
            immense joy from the act of creation with a sincere desire to
            contribute to the well-being of others. When it comes to design, I
            firmly believe that accessibility, intentionality, and
            sustainability are the fundamental building blocks for crafting
            exceptional solutions.
          </p>
          <p>
            Motivated by a deep sense of purpose, my drive stems from the desire
            to make a lasting, <b>positive impact</b> on the world that extends
            far beyond my own lifetime. I am dedicated to using my creative
            abilities to assist and uplift those around me. Currently, I am
            actively seeking a new opportunity, a place where a sense of
            community, personal growth, and service through creativity are
            valued above all else.
          </p>
          <p>
            I have unwavering confidence in my abilities to make a
            <b>meaningful contribution</b> to any company that shares these core
            values. If you wish to establish a connection, I warmly welcome you
            to reach out to me. Let's explore the possibilities and forge a path
            towards collective success.
          </p>
        </div>
        <div class="buttonRow">
          <a class="button" href="/#contact">
            <h2 class="contactButton">Contact</h2>
          </a>
          <a class="button" href="/mslape-resume-s23.pdf">
            <h2 class="resumeButton">Resume</h2>
          </a>
        </div>
      </div>
      <div class="rightColumn">
        <img
          class="matthewSitting"
          src="../assets/photos/aboutMe.jpeg"
          alt="Photo of Matthew Sitting"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
b {
  font-weight: 800;
  font-size: 110%;
}
.aboutHeader {
  display: flex;
  margin-left: -2rem;
  display: flex;
  align-items: flex-end;
  padding-top: 5.5rem;
  padding-bottom: 2rem;
}
.buttonRow {
  margin-top: 4rem;
  display: flex;
  justify-content: space-around;
}

.button {
  width: 40%;
  min-width: 11rem;
  max-width: 20rem;
}
.contactButton {
  color: #0a090c;
  width: 100%;
  padding: 0 2rem;
  height: 3rem;
  background: #dea511;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.1s ease-in-out;
  font-weight: 800;
}

.contactButton:hover {
  color: white;
  border: white solid;
}

.resumeButton {
  color: #0a090c;
  width: auto;
  padding: 0 2rem;
  height: 3rem;
  background: white;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.1s ease-in-out;
  font-weight: 800;
}

.resumeButton:hover {
  color: #dea511;
  border: #dea511 solid;
}
.aboutSub {
  line-height: 115% !important;
  font-family: Poppins;
  font-style: italic;
  font-weight: bold;
  font-size: 2rem;
  line-height: 175%;
  text-transform: uppercase;
  text-align: left;
  display: flex;
  align-items: center;
  color: #dea511;
}
.aboutBody {
  text-align: left;
  padding: 1rem;
  overflow-y: scroll;
}

.matthewSitting {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  margin-bottom: 1rem;
}

/*REBUILD*/
p {
  font-size: 1rem;
}
.aboutWrapper {
  padding-bottom: 5rem;
  width: 75vw;
  height: 75vh;
  max-width: 86rem;
  max-height: 52rem;
  min-height: 36rem;
  margin: auto;
  margin-bottom: 15vw;
  transform: translateY(-15vw);
}
.aboutContent {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
}
.leftColumn {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 48%;
  height: 100%;
}

.rightColumn {
  width: 48%;
  height: 100%;
}
.aboutSub {
  padding-bottom: 1rem;
}
@media (max-width: 1225px) {
  .aboutWrapper {
    height: auto;
    max-height: none;
  }
  .aboutHeader {
    display: flex;
    margin-left: 0;
    justify-content: center;
  }
  .aboutContent {
    flex-direction: column-reverse;
  }
  .leftColumn {
    width: 100%;
  }
  .rightColumn {
    width: 100%;
  }
}

@media (max-width: 450px) {
  .contactButton .resumeButton {
    font-size: 1rem;
  }
  .aboutWrapper {
    width: 88vw;
  }
}
@media (max-width: 500px) {
  .buttonRow {
    flex-direction: column;
    align-items: center;
  }
}
@media (min-width: 2000px) {
  .aboutWrapper {
    max-width: 80rem;
  }
  p {
    font-size: 1.25rem;
  }
}
</style>
