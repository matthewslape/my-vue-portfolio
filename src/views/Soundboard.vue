<template>
  <img
    class="coverPhoto"
    id="coverPhoto"
    src="../assets/photos/code/code-cardPhoto-johnSoundboard.png"
    alt="JS Website Cover Photo"
  />
  <div class="articleWrapper">
    <h1>John's Soundboard</h1>
    <h4>Overview</h4>
    <p>
      My father-in-law, John, had a severe stroke on 12/31/2021, resulting in
      him having to spend days at the E.R, followed by months at a stroke
      rehabilitation center. Since this happened in the heat of a COVID-19 case
      spike, there was a point where the hospital decided that they would no
      longer let visitors in to spend time with the patients. This was
      devastating for our family, and we knew it would be incredibly tough for
      John to have to be in his room alone. On top of all of this, he had a
      tough time communicating with his nurses. I was trying to think of ways to
      help, and came up with this web app, accessible to John on his iPad.
    </p>
    <h4>Application</h4>
    <p>
      This app, John’s soundboard, is set up with two grids. The top grid is
      loaded with buttons that have John’s family members' names on them. When
      the buttons are pressed, an audio recording to John is played,
      corresponding with the family member chosen. The bottom grid is set up
      with common needs that John has had trouble communicating, and when
      clicked turn green, take up the whole screen, and play an audio of the
      need he is trying to communicate. The buttons are purposely big and bold,
      so that John can see and click them easily. This was built using simple
      HTML, CSS, and vanilla JavaScript. It was good practice for connecting
      audio to buttons.
    </p>
    <p>
      It's nothing fancy, but it solved a problem near to my heart, and really
      helped a family member in need.
    </p>
    <div class="detailCard">
      <h5>Client</h5>
      <h6>Family</h6>
      <h5>Timeline</h5>
      <h6>1-2 weeks</h6>
      <h5>Tools</h5>
      <h6>
        Visual Studio Code, Figma, HTML, CSS, JavaScript, Vue.js 3, Netlify,
        Github
      </h6>
      <h5>My Role</h5>
      <h6>Web Developer, Designer</h6>
    </div>
    <h4>Finished Project</h4>
    <div class="screenWrapper">
      <img
        class="screenPhoto"
        src="../assets/photos/code/johnSoundboard/code-johnSoundboard-screen2.png"
        alt="Soundboard Screen"
      /><img
        class="screenPhoto secondScreenPhoto"
        src="../assets/photos/code/johnSoundboard/code-johnSoundboard-screen1.png"
        alt="Soundboard Screen"
      />
    </div>
    <!--<iframe src="https://jstruckandex.com" frameborder="0"></iframe>-->
  </div>
  <div class="directory">
    <a href="#coverPhoto"><h5 class="dOption">to Start</h5></a>
    <a href="/code"><h5 class="dOption">to Code Page</h5></a>
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
  background: #f1f1f1;
  padding: 1rem;
  margin: 1vw;
  border-radius: 8px;
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
  margin: 1rem;
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
  transition: 0.5s ease-in-out;
}

.dOption:hover {
  font-size: 130%;
}

/*Screen Photos*/
.screenPhoto {
  width: 48%;
}

.screenWrapper {
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-bottom: 2rem;
}

@media (max-width: 900px) {
  .directory {
    flex-direction: column;
  }
  .screenPhoto {
    width: 100%;
  }
  .secondScreenPhoto {
    display: none;
  }
}
</style>
