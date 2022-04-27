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
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quidem
      repudiandae obcaecati ex deserunt nihil praesentium. Error fugiat quae
      recusandae alias nobis cupiditate amet, suscipit perspiciatis, similique
      laborum cum fuga.
    </p>
    <h4>Why is this a thing?</h4>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta ea
      incidunt quibusdam eaque magnam eos, dignissimos excepturi consequuntur.
      Quaerat libero nesciunt eos dolor dolorum veritatis quisquam delectus,
      enim odio. Eius?
    </p>
    <h4>Goal</h4>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit, molestias
      aliquam reiciendis error explicabo illum ipsum aperiam doloribus iusto
      nobis laborum! Necessitatibus iste impedit velit maiores, sint nemo
      nostrum veritatis!
    </p>
    <div class="detailCard">
      <h5>Client</h5>
      <h6>Google (hypothetical)</h6>
      <h5>Timeline</h5>
      <h6>6-8 weeks</h6>
      <h5>Tools</h5>
      <h6>
        Visual Studio Code, HTML, CSS, JavaScript, Vue.js v2, Netlify, Github,
        Email.js
      </h6>
      <h5>My Role</h5>
      <h6>Web Developer, Designer</h6>
    </div>
    <h4>Finished Project</h4>
    <p>
      After multiple iterations of layouts, wireframing, and coming up with a
      color scheme and fonts that matched JS Trucking and Excavations brand, I
      took the time to finish out the build of the site. The client was beyond
      happy with the result.
    </p>
    <div class="screenWrapper">
      <img
        class="screenPhoto"
        src="../assets/photos/code/jsWebsite/code-jsWebsite-screen2.png"
        alt="JS Website Screen"
      /><img
        class="screenPhoto secondScreenPhoto"
        src="../assets/photos/code/jsWebsite/code-jsWebsite-screen1.png"
        alt="JS Website Screen"
      />
    </div>
    <!--<iframe src="https://jstruckandex.com" frameborder="0"></iframe>-->
    <a href="https://jstruckandex.com" target="_blank">
      <h2 class="protoButton">Website Link</h2>
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
  transition: 0.5s ease-in-out;
}

.dOption:hover {
  font-size: 140%;
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
