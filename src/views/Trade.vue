<template>
  <img
    class="coverPhoto"
    id="coverPhoto"
    src="../assets/photos/ux/ux-cardPhoto-trade.png"
    alt="wikiHow Cover Photo"
  />
  <div class="articleWrapper">
    <h1>Trade Coffee App</h1>
    <h4>Overview</h4>
    <p>
      Trade Coffee is a subscription-based coffee company that prioritizes
      sustainable sourcing and collaborates with coffee roasters nationwide to
      support communities. It offers an excellent opportunity for diverse coffee
      enthusiasts to experience specialty coffees from different regions.
      However, Trade Coffee currently lacks a mobile app. Recognizing this gap,
      I took the initiative to design an app for them. Please note that this
      project is a personal endeavor and is not affiliated with Trade.
    </p>
    <h4>Rationale</h4>
    <p>
      The absence of a mobile app for Trade Coffee results in user frustration,
      as customers are required to log in through a web browser every time they
      wish to manage their subscription. This inconvenience led me to
      conceptualize a solution in the form of a mobile app.
    </p>
    <h4>Goal</h4>
    <p>
      The primary objective was to create a user-friendly and easily navigable
      mobile app specifically for Trade Coffee subscribers. This app would
      empower users to conveniently manage their subscriptions while on the go.
    </p>
    <div class="detailCard">
      <h5>Client</h5>
      <h6>Trade (Hypothetical)</h6>
      <h5>Timeline</h5>
      <h6>6 weeks</h6>
      <h5>Tools</h5>
      <h6>Paper, Pencil, Figma, Milanote.</h6>
      <h5>My Role</h5>
      <h6>UX Designer (Individual Project)</h6>
    </div>
    <h4>Empathy Map</h4>
    <p>
      To gain a comprehensive understanding of the potential Trade Coffee user
      base, I created an empathy map. This allowed me to delve deep into the
      emotions, feelings, and perspectives of the users both while using the app
      and in general.
    </p>
    <img
      class="infoPhoto"
      src="../assets/photos/ux/trade/ux-trade-empathy.png"
      alt="Trade Emphathy Map"
    />
    <h4>Lo Fidelity Prototype</h4>
    <p>
      The next step involved developing a low-fidelity prototype, where I
      wireframed the app's layout and system. By eliminating the distractions of
      colors and fonts, I could focus on designing a functional and intuitive
      user interface using Figma.
    </p>
    <img
      class="infoPhoto"
      src="../assets/photos/ux/trade/ux-trade-lofi.png"
      alt="Lofi Trade Designs"
    />
    <h4>Style Sheet</h4>
    <p>
      With the insights gained from the empathy map, I proceeded to build
      various design components for the application in Figma. This involved
      defining fonts, colors, cards, buttons, and other visual elements while
      keeping the user's needs and preferences in mind.
    </p>
    <img
      class="infoPhoto"
      src="../assets/photos/ux/trade/ux-trade-stylesheet.png"
      alt="Lofi Trade Designs"
      style="width: 60%; align-self: center"
    />
    <h4>Finished Project</h4>
    <p>
      Lastly, I created a high-fidelity prototype, incorporating the style guide
      and insights from the lo-fi prototype. Whenever faced with design
      challenges, I referred back to the empathy map to ensure alignment with
      the app's intended users. It was convenient that I closely matched the
      user description and used Trade Coffee on a daily basis, as it enabled me
      to create an easily navigable mobile app that efficiently assists Trade
      subscribers in managing their subscriptions.
    </p>
    <img
      class="finalPhoto"
      src="../assets/photos/ux/trade/ux-trade-mockups.png"
      alt="wikiHow App Mockup"
    />
    <a
      href="https://www.figma.com/proto/wMhn98X4kq1IO7EQyRjsir/Project-%234-Trade-Coffee-App?node-id=5%3A6&scaling=scale-down&page-id=5%3A4"
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
