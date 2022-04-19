<template>
  <img
    class="coverPhoto"
    id="coverPhoto"
    src="../assets/photos/ux/ux-cardPhoto-dashboard.png"
    alt="wikiHow Cover Photo"
  />
  <div class="articleWrapper">
    <h1>Daily Dashboard</h1>
    <h4>Overview</h4>
    <p>
      This idea of a daily dashboard has been around for awhile. At first, it
      was just shown in movies like Star Trek through FUIs (Fictional User
      Interfaces), and then the idea quickly became more real with the
      introduction of the smartphone. Thus a new problem arises, too many
      dashboards to manage. This project was created in order to hone back and
      simplify the idea of a daily dashboard, through a hub that is in a
      location visited multiple times a day, connected to all other devices, in
      order to simplify our way of life as users.
    </p>
    <h4>Why is this a thing?</h4>
    <p>
      People get stressed. Our days become busy quickly with how much stuff we
      have to stay on top of. We live in a world where the average person has
      ten devices to keep track of. This is too much. Having ONE place to keep
      track of all your progress and to-dos for the day is needed.
    </p>
    <h4>Goal</h4>
    <p>
      To create a hub where all the users widgets can be found in one place,
      personalized to fit them best. This hub needs to be in a central location
      that is seen by the user at least twice a day.
    </p>
    <div class="detailCard">
      <h5>Client</h5>
      <h6>Myself. The World.</h6>
      <h5>Timeline</h5>
      <h6>4-6 weeks</h6>
      <h5>Tools</h5>
      <h6>
        Paper, Pencil, Figma, Moleskine Studio, Photoshop, HTML, CSS,
        JavaScript.
      </h6>
      <h5>My Role</h5>
      <h6>UX Designer (Individual Project)</h6>
    </div>
    <h4>Sketches</h4>
    <p>
      I started out by sketching some ideas for how the daily dashboard layout
      would be structrued. This daily dashboard is designed for the structure of
      a smart mirror in a bathroom. I feel that as humans, we visit this spot in
      our homes at least three times a day, so it is a great place to have a
      central hub for managing our days.
    </p>
    <p>
      The interface consists of a clock, the date, a music player, a to-do list,
      a screen time display that tells the cumulative screen time for all
      devices, weather, a personalized message, and a navigation menu for
      notifications on linked devices throughout the day.
    </p>
    <p>
      I wanted to create something that helps the user not get overwhelmed or
      stressed with what they have to accomplish. My approach to this is having
      the display change what is presented depending on the time of the day. For
      example, I do not do homework in the evening, so canvas notifications
      wouldn't be shown on the display at this time. This helps us be more
      intentional with our devices and what we are putting our focus on.
    </p>
    <img
      class="infoPhoto"
      src="../assets/photos/ux/dashboard/ux-dashboard-sketches.png"
      alt="Dashboard Sketches"
    />
    <h4>Lo Fidelity Prototypes</h4>
    <p>
      I then took my sketches and digitized them on Figma, by creating some gray
      box designs, in order to get the layout and navigation of the dashboard
      more concrete. At this point, I took the actual dimensions of my bathroom
      mirror into account, as well as adding some gradients for depth. Besides
      this, not much visual design was developed at this stage.
    </p>
    <img
      class="infoPhoto"
      src="../assets/photos/ux/dashboard/ux-dashboard-lofi.png"
      alt="Lofi Dashboard Designs"
    />
    <h4>Finished Project</h4>
    <p>
      I then added color, fonts, icons (courtesy of The Noun Project), and other
      visual components to my dashboard designs. In this stage, I also included
      a picture of me as the background to mock up the mirror portion of the
      project, and to top it all off threw in a mockup photo of what it would
      look like in action.
    </p>
    <div class="mockupsWrapper">
      <img
        class="infoPhoto finalPhoto"
        src="../assets/photos/ux/dashboard/ux-dashboard-mockup-morning.png"
        alt="Dashboard Design Morning"
      />
      <img
        class="infoPhoto finalPhoto"
        src="../assets/photos/ux/dashboard/ux-dashboard-mockup-afternoon.png"
        alt="Dashboard Design Afternoon"
      />
      <img
        class="infoPhoto finalPhoto"
        src="../assets/photos/ux/dashboard/ux-dashboard-mockup-evening.png"
        alt="Dashboard Design Evening"
      />
    </div>
    <img
      class="infoPhoto"
      src="../assets/photos/ux/dashboard/ux-dashboard-mockup-angle.png"
      alt="Daily Dashboard Mockup"
    />
    <h4>Taking it One Step Further</h4>
    <p>
      This was a class project for my UX 3 class. Towards the end of my project,
      I had a classmate who showed the class how he took his dashboard and built
      it as a website, using the camera as the mirror portion of the project.
      With his permission, I took my knowledge from my Web 3 class, forked his
      code, and connected the time, date and weather of his dashboard through
      DOM elements. A link to this project is below. A special thanks to Will
      Hall for letting me fork his code, and add some functionality to his
      amazing approach to this project.
    </p>
    <h4>Final Thoughts</h4>
    <p>
      This project was eye opening to me. I was designing to help solve a
      problem, which I feel is the point of design. Through testing, ideation,
      designing and coding, I feel that this project is a great example of real
      life problem solving through user experience design. I learned that too
      much of anything can be overstimulating, and that as designers we need to
      consider the simplest solution possible in order to not confuse the user.
    </p>
    <img
      class="infoPhoto"
      src="../assets/photos/ux/dashboard/ux-dashboard-web.png"
      alt="Daily Dashboard Web Display"
    />
    <a href="https://goofy-sammet-718bde.netlify.app/" target="_blank">
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

.protoButton {
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
  background: #135cb1;
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
  transition-duration: 0.5s ease-in-out;
}

.dOption:hover {
  font-size: 140%;
}

.finalPhoto {
  width: 32%;
  height: auto;
  transition: 0.5s ease-in-out;
}

.finalPhoto:hover {
  transform: translateY(-20px);
}

.mockupsWrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90vw;
  align-self: center;
  margin: 3rem 0rem 3rem 0rem;
}

@media (max-width: 900px) {
  .infoPhoto {
    width: 100vw;
    height: auto;
    align-self: center;
    border-radius: 0px;
    border: none;
  }
  .directory {
    flex-direction: column;
  }
  .finalPhoto {
    width: 100%;
  }
  .mockupsWrapper {
    flex-direction: column;
  }
  .finalPhoto:hover {
    transform: none;
  }
}
</style>
