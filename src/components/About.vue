<template>
  <div class="aboutWrapper">
    <h1 class="aboutHeader" id="aboutUs" style="color: black">About Me</h1>
    <div class="aboutContent">
      <div class="leftColumn">
        <div class="aboutSub">Oh, Whats Up. My name is Matthew Slape.</div>
        <div class="aboutBody">
          <p>
            I am a <b>hardworking</b>, problem solving, coffee loving
            <b>human</b>, on a mission to serve others through design thinking.
            Fueled by my excessive need to <b>understand how things work</b>,
            learning comes easy to me. I know what you're thinking... my
            background in UX design, psychology, front end development,
            production design, photography and videography might come off as a
            sign that I am not great at making decisions. However I can assure
            you, this all comes from a place of wanting to
            <b>grow as a person.</b>
          </p>
          <p>
            Organized creativity is my happy place. No matter the discipline
            creating in order to <b>serve others</b> is what I find joy in. In
            design, I believe that accessibility, intentionality, and
            sustainability are key to developing great <b>solutions</b>. I am
            <b>driven</b> to make a creative impact on the world that will last
            longer than myself, in order to help fellow humans around me.
            Currently, I am on the <b>job hunt</b> to find a place where
            community, growth, and service through creativity are top priority.
            I am confident in my abilities to help out a company that aligns
            with these pillars. Please contact me if you want to
            <b>connect!</b>
          </p>
        </div>
        <a href="/#contact"
          ><div class="buttonWrapper">
            <h2 class="contactButton">Contact</h2>
          </div></a
        >
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
.contactButton {
  color: white;
  width: 50vw;
  max-width: 18rem;
  height: 3rem;
  background: #101010;
  border-radius: 8px;
  margin: 1rem 0rem 1rem 0rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.1s ease-in-out;
  font-weight: 800;
}
.contactButton:hover {
  background: #1c6b6b;
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
  color: #1c6b6b;
}
.aboutBody {
  text-align: left;
  overflow-y: auto;
  padding: 1rem;
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
  max-width: 80rem;
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
  .contactButton {
    font-size: 1rem;
  }
  .aboutWrapper {
    width: 88vw;
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
