<template>
  <img
    class="coverPhoto"
    id="coverPhoto"
    src="../assets/photos/code/code-cardPhoto-14four.png"
    alt="JS Website Cover Photo"
  />
  <div class="articleWrapper">
    <h1>14Four Internship</h1>
    <h2>What I Built, Helped with, and Learned.</h2>
    <h4>Accessibility Testing Procedure</h4>
    <div class="detailCard">
      <h5>What It Is</h5>
      <h6>
        A testing procedure to ensure that websites at 14Four are accessible,
        and meet WCAG requirements.
      </h6>
      <h5>What I Helped With</h5>
      <h6>
        14Four did not have a clear pattern to testing if a website was
        accessible. My lead, Ryan, and I saw this as a problem. We came up with
        the idea for me to create an accessibility testing procedure, and add it
        to 14Four’s wiki page. I conducted research, wrote a breakdown of what
        accessibility is and why it is important, and created a step by step
        guide to check if a website is “accessible.”
      </h6>
      <h5>Why?</h5>
      <h6>
        If a website is not accessible, less people can use it to its full
        abilities. This leads to a bad user experience. Accessibility is
        important, because we as humans need to build experiences that are
        inclusive to everyone. Accessibility also supports social inclusion for
        people with disabilities as well as others, such as older people.
      </h6>
    </div>
    <a
      href="https://wiki.still.14four.com/accessibility/accessibility.html"
      target="_blank"
    >
      <h2 class="protoButton">Accessibility Page</h2>
    </a>
    <h4>Frutly Website</h4>
    <div class="detailCard">
      <h5>What It Is</h5>
      <h6>A promotional website for a new Pepsi product called Frutly.</h6>
      <h5>What I Helped With</h5>
      <h6>
        I helped with the parallax fruit animations, built the Product Locator
        page, and helped with QA testing. I also ran the site through the
        accessibility testing procedure I developed.
      </h6>
    </div>
    <div class="screenWrapper">
      <img
        class="screenPhoto"
        src="../assets/photos/code/14four/code-14four-frutly2.png"
        alt="Frutly Website Screen"
      /><img
        class="screenPhoto secondScreenPhoto"
        src="../assets/photos/code/14four/code-14four-frutly1.png"
        alt="Frutly Website Screen"
      />
    </div>
    <a href="https://www.drinkfrutly.com/" target="_blank">
      <h2 class="protoButton">Frutly Website</h2>
    </a>
    <h4>Pepsi Fall Football Website</h4>
    <div class="detailCard">
      <h5>What It Is</h5>
      <h6>A promotional Website for Pepsi and the upcoming 2021 NFL season.</h6>
      <h5>What I Helped With</h5>
      <h6>
        I built various components, including the dynamic header and footer, and
        Official Rules page. I also did plenty of QA and Accessibility testing,
        to ensure there were no bugs or errors. I was able to be a part of this
        project from start to finish, and it was great to see it come full
        swing.
      </h6>
    </div>
    <div class="screenWrapper">
      <img
        class="screenPhoto"
        src="../assets/photos/code/14four/code-14four-pepsi2.png"
        alt="Pepsi Website Screen"
      /><img
        class="screenPhoto secondScreenPhoto"
        src="../assets/photos/code/14four/code-14four-pepsi1.png"
        alt="Pepsi Website Screen"
      />
    </div>
    <h4>RAEK Rebranding</h4>
    <div class="detailCard">
      <h5>What It Is</h5>
      <h6>
        Raek is a web utility to collect and track leads, in order to help boost
        lead generation across a network of sites. 14Four was hired to rebrand
        Raek, redesign their website, and improve the UX of their website.
      </h6>
      <h5>What I Helped With</h5>
      <h6>
        Sadly, I did not get to be on this project for very long. I did get to
        help with creating some gradient swatches and picking some potential
        font pairings. I also was able to sit in on the initial pitch meeting of
        the three branding directions for raek.
      </h6>
    </div>
    <a href="https://www.raekdata.com/" target="_blank">
      <h2 class="protoButton">RAEK Website</h2>
    </a>
    <h4>Quaker Back to School Website</h4>
    <div class="detailCard">
      <h5>What It Is</h5>
      <h6>A promotional Website for Quaker Oats.</h6>
      <h5>What I Helped With</h5>
      <h6>
        I helped build card components, the FAQ page, and with QA testing. I
        also ran the site through the accessibility testing procedure I
        developed.
      </h6>
    </div>
    <h4>Quaker Goodness Website</h4>
    <div class="detailCard">
      <h5>What It Is</h5>
      <h6>A promotional Website for Quaker Oats.</h6>
      <h5>What I Helped With</h5>
      <h6>
        I helped build card components, the Rules page, and with QA testing. I
        also ran the site through the accessibility testing procedure I
        developed.
      </h6>
    </div>
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
h2,
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
a {
  align-self: center;
}

.protoButton {
  font-size: 1rem;
  font-weight: 400;
  color: white;
  padding: 1rem;
  height: 2.5rem;
  background: #101010;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.1s ease-in-out;
  margin-top: 1rem;
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
