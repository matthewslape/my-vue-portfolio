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
      Trade Coffee is a sustainably sourced subscription based coffee company
      that partners with coffee roasters around the nation to help support
      communities near and far. It is a great way for a variety of coffee
      drinkers to both support small roasters and try coffee from around the
      country. Sadly, they still do not have a mobile app. This was frustrating
      for me to see, so I decided to design an app for them.
      <i>(This is a personal project and in no way is affiliated with Trade)</i>
    </p>
    <h4>Why is this a thing?</h4>
    <p>
      Trade Coffee does not have a mobile app, and I feel that it is frustrating
      to the user to have to log in online every time on a browser to manage
      their subscription.
    </p>
    <h4>Goal</h4>
    <p>
      To create a usable, easily navigated mobile app for Trade Coffee
      subscribers, in order that they can manage their subscription on the go.
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
      To get a better idea of who would use Trade, I created an empathy map, so
      that I could really dive deep into the emotions and feelings that the user
      would have both while using Trade, and in general.
    </p>
    <img
      class="infoPhoto"
      src="../assets/photos/ux/trade/ux-trade-empathy.png"
      alt="Trade Emphathy Map"
    />
    <h4>Lofi Prototype</h4>
    <p>
      Next, I created and wireframed a low fidelity prototype, so that I could
      properly design the layout and system of the app without the distractions
      of colors and fonts. This was done in Figma.
    </p>
    <img
      class="infoPhoto"
      src="../assets/photos/ux/trade/ux-trade-lofi.png"
      alt="Lofi Trade Designs"
    />
    <h4>Style Sheet</h4>
    <p>
      I then, while considering my empathy map, started building components for
      the application in Figma. These components included fonts, colors, cards,
      and buttons.
    </p>
    <img
      class="infoPhoto"
      src="../assets/photos/ux/trade/ux-trade-stylesheet.png"
      alt="Lofi Trade Designs"
      style="width: 60%; align-self: center"
    />
    <h4>Finished Project</h4>
    <p>
      Finally, I created a high fidelity prototype using my style guide and lofi
      prototype. When I would get stuck, I would refer back to my empathy map,
      to ground myself in who would be using this app. It really helped my case
      that I fit the user description to a T, and use Trade on a day to day
      basis. I feel that I completed the goal of creating an easily navigated
      mobile app to help Trade subscribers manage their subscriptions more
      efficiently.
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
  background: #ff4f3e;
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
