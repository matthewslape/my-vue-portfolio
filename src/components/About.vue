<template>
  <div class="aboutWrapper">
    <h1 class="aboutHeader" id="aboutUs" style="color: black">About Me</h1>
    <div class="aboutContent">
      <div class="leftColumn">
        <div class="aboutSub">
          Oh, Whats Up. My name is Matthew Slape. Here's the “why” behind what I
          do.
        </div>
        <div class="aboutBody">
          <p>
            My focus is to partner with people in bringing their creative ideas
            to life. In my designs, I value
            <i style="font-weight: bold">simplicity</i> and
            <i style="font-weight: bold">purpose</i>. I am not willing to design
            and put effort into something if there is not some sort of meaning
            behind it. I am driven to make a creative impact on the world that
            will last longer than myself. I feel as is my purpose on this earth
            is to solve problems through creative thinking.
          </p>
          <p>
            My work is pretty widespread, and stretches from brand identity to
            photograpy to development. My inspiration comes from the creation of
            this Earth, and I am known for trying to replicate that in my
            designs. I put time and authenticity into my work, and feel that its
            main purpose is to open doors and connect people.
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
          src="../assets/photos/aboutMePhoto.jpg"
          alt="Photo of Matthew Sitting"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.aboutHeader {
  display: flex;
  margin-left: -2rem;
  display: flex;
  align-items: flex-end;
  padding-top: 5.5rem;
  padding-bottom: 3rem;
}
.contactButton {
  color: white;
  width: 50vw;
  max-width: 18rem;
  height: 3rem;
  background: #101010;
  border-radius: 8px;
  margin: 2rem 0rem 1rem 0rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.1s ease-in-out;
}
.contactButton:hover {
  background: #1c6b6b;
}
.aboutSub {
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 1.25rem;
  line-height: 175%;
  text-transform: uppercase;
  text-align: left;
  display: flex;
  align-items: center;
  color: #1c6b6b;
}
.aboutBody {
  text-align: left;
}
.matthewSitting {
  width: 100%;
  height: 100%;
  object-fit: cover;
  margin-bottom: 1rem;
}
/*REBUILD*/
.aboutWrapper {
  padding-bottom: 5rem;
  width: 90vw;
  max-width: 60rem;
  /* max-height: 83rem; */
  height: 75vh;
  max-height: 52rem;
  min-height: 40rem;
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
  height: 70%;
}
.rightColumn {
  width: 48%;
  height: 100%;
}
.aboutSub {
  padding-bottom: 1rem;
}
@media (max-width: 1000px) {
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
}
</style>
