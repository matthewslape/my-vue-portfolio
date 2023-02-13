<template>
  <img
    class="coverPhoto"
    id="coverPhoto"
    src="../assets/photos/code/code-cardPhoto-doogle.png"
    alt="JS Website Cover Photo"
  />
  <div class="articleWrapper">
    <h1>Google Doodle</h1>
    <h4>Overview</h4>
    <p>
      Google has invested millions to create and distribute “doodles”. Aaron
      Walter’s book (a must read), Designing for Emotion shows the importance
      and impact of designing for any emotion. At MailChimp, his team
      successfully made creating and sending email newsletters - fun. Google
      does the same on their homepage. Their Google Doodles can be: fun,
      insightful, intelligent, enigmatic, or just weird, but they all have
      emotion.
    </p>
    <h4>Why is this a thing?</h4>
    <p>
      Camping has always held a special place in my life. Growing up, some of my
      favorite moments where with my family going on a camping trip to get away
      from the craziness of life and spend some qualtiy time togeter. I decided
      to create this Google Doodle to represent the quality and simplicity of
      camping, and how it can help us connect with the world and slow down. It
      gives us a chance as humans to put away our devices, get away from
      busyness, and ground oursleves. It is inspiring to know that an act of
      simple adventure can be so rewarding to our minds and bodies.
    </p>
    <p>
      Not only was this project a great way to practice CSS animations for me,
      but it was also a perfect example of fun code. The media portrays coding
      to be this boring, solely analytical vocation, but this project is proof
      against that. Coding can indeed be fun and creative.
    </p>
    <h4>Goal</h4>
    <p>
      To successfully design and animate multiple css componets in order to
      create a Google Doodle that portrays my love for camping visually.
    </p>
    <div class="detailCard">
      <h5>Client</h5>
      <h6>Google (hypothetical)</h6>
      <h5>Timeline</h5>
      <h6>2-4 weeks</h6>
      <h5>Tools</h5>
      <h6>
        Visual Studio Code, HTML, CSS, JavaScript, Netlify, Github, GSAP (Green
        Sock Animation Platform)
      </h6>
      <h5>My Role</h5>
      <h6>Web Developer, Designer</h6>
    </div>
    <h4>Finished Project</h4>
    <p>
      The final projects consits of three moving pieces, and a button in the top
      left that switches the display mode from daytime to nightime. I was beyond
      happy with how the final animation turned out for this light hearted
      project.
    </p>
    <div class="screenWrapper">
      <img
        class="screenPhoto"
        src="../assets/photos/code/doogle/code-doogle-screen.png"
        alt="JS Website Screen"
      />
    </div>
    <!--<iframe src="https://jstruckandex.com" frameborder="0"></iframe>-->
    <a href="https://zealous-dijkstra-ffa231.netlify.app/" target="_blank">
      <h2 class="protoButton">Doodle Link</h2>
    </a>
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
  background: #dea511;
  padding: 1rem;
  margin: 1vw;
  border-radius: 8px;
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
  padding: 0rem 1rem;
  margin: 1rem;
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
