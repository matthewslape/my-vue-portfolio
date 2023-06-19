<template>
  <img
    class="coverPhoto"
    id="coverPhoto"
    src="../assets/photos/ux/ux-cardPhoto-dashboard.png"
    alt="wikiHow Cover Photo"
  />
  <div class="articleWrapper">
    <h1>Daily Dashboard</h1>
    <h4>Project Overview</h4>
    <p>
      The concept of a daily dashboard has existed for quite some time.
      Initially portrayed in movies like Star Trek through Fictional User
      Interfaces (FUIs), this idea quickly gained practicality with the advent
      of smartphones. However, this introduced a new challenge: the management
      of multiple dashboards. The purpose of this project was to refine and
      simplify the notion of a daily dashboard by creating a centralized hub,
      located in a frequently visited area, that seamlessly connects all
      devices. The objective was to enhance user experience and streamline daily
      activities.
    </p>
    <h4>Rationale</h4>
    <p>
      In today's fast-paced world, people often experience stress due to the
      multitude of tasks they need to stay on top of. It is common for
      individuals to possess an overwhelming number of devices to manage,
      averaging around ten per person. This excessive burden necessitates a
      solution. A unified platform that consolidates all progress and daily
      to-dos into a single location is needed.
    </p>
    <h4>Goal</h4>
    <p>
      The primary aim of this project was to develop a hub where users can
      access all their widgets in one place, personalized to suit their
      preferences. This centralized hub needed to be positioned in a prominent
      location that users encounter at least twice a day.
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
      The initial phase involved sketching various ideas for the daily dashboard
      layout. Specifically designed for a smart mirror in a bathroom, this daily
      dashboard capitalizes on the fact that individuals typically visit this
      area of their homes multiple times daily. Thus, it serves as an ideal
      location for a central hub to manage their daily activities.
    </p>
    <p>
      The interface encompasses key elements such as a clock, date, music
      player, to-do list, screen time display for cumulative device usage,
      weather information, personalized messages, and a navigation menu for
      linked device notifications throughout the day. The objective was to
      create a user-friendly solution that prevents users from feeling
      overwhelmed by their tasks. To achieve this, the display adapts its
      content based on the time of day. For instance, if it's evening,
      notifications related to academic tasks would not be displayed, promoting
      intentional device usage and focused attention.
    </p>
    <img
      class="infoPhoto"
      src="../assets/photos/ux/dashboard/ux-dashboard-sketches.png"
      alt="Dashboard Sketches"
    />
    <h4>Lo Fidelity Prototypes</h4>
    <p>
      The next step involved digitizing the sketches using Figma, employing gray
      box designs to refine the layout and navigation of the dashboard. Careful
      consideration was given to the dimensions of the bathroom mirror, and
      subtle gradients were added to create a sense of depth. At this stage,
      visual design elements were not extensively developed.
    </p>
    <img
      class="infoPhoto"
      src="../assets/photos/ux/dashboard/ux-dashboard-lofi.png"
      alt="Lofi Dashboard Designs"
    />
    <h4>Finished Project</h4>
    <p>
      Subsequently, color schemes, fonts, icons (courtesy of The Noun Project),
      and other visual components were incorporated into the dashboard designs.
      In this phase, a picture was included as the background, simulating the
      mirror aspect of the project. Additionally, a mockup photo was created to
      depict the dashboard in action, providing a comprehensive visualization of
      the final product.
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
      This was a class project for my 300 level UX Design class. Towards the end
      of my project, I had a classmate who showed the class how he took his
      dashboard and built it as a website, using the camera as the mirror
      portion of the project. With his permission, I took my knowledge from my
      Web 3 class, forked his code, and connected the time, date and weather of
      his dashboard through DOM elements. A link to this project is below. A
      special thanks to Will Hall for letting me fork his code, and add some
      functionality to his amazing approach to this project.
    </p>
    <h4>Final Thoughts</h4>
    <p>
      This project was eye opening to me. I was designing to help solve a
      problem, which I feel is the point of design. Through testing, ideation,
      designing and coding, I feel that this project is a great example of real
      life problem solving through user experience design. I learned that too
      much of anything can be overstimulating, and that as designers we need to
      consider the simplest solution possible in order to not overwhelm the
      user.
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

  transition-duration: 0.5s ease-in-out;
}

.dOption:hover {
  font-size: 130%;
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
