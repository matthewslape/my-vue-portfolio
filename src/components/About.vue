<template>
  <div class="aboutMeWrapper">
    <h1 class="customHeaderBold aboutHeader" style="color: black">About Me</h1>
    <div class="aboutPhotoWrapper">
      <img
        class="matthewSitting"
        src="../assets/photos/aboutMePhoto.jpg"
        alt="Photo of Matthew Sitting"
      />
    </div>
    <div class="aboutSub">
      Oh, Whats Up. My name is Matthew Slape. Here's the “why” behind what I do.
    </div>
    <div class="aboutBody">
      <p>
        My focus is to partner with people in bringing their creative ideas to
        life. In my designs, I value
        <i style="font-weight: bold">simplicity</i> and
        <i style="font-weight: bold">purpose</i>. I am not willing to design and
        put effort into something if there is not some sort of meaning behind
        it. I am driven to make a creative impact on the world that will last
        longer than myself. I feel as is my purpose on this earth is to solve
        problems through creative thinking.
      </p>
      <p>
        My work is pretty widespread, and stretches from brand identity to
        photograpy to development. My inspiration comes from the creation of
        this Earth, and I am known for trying to replicate that in my designs. I
        put time and authenticity into my work, and feel that its main purpose
        is to open doors and connect people.
      </p>
    </div>
    <div class="buttonWrapper"><h2 class="contactButton">Contact</h2></div>
  </div>
</template>

<style scoped>
.aboutMeWrapper {
  transform: translateY(-12vw);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  max-width: 70rem;
  width: 70%;
  margin: auto;
}
.aboutHeader {
  grid-column: 1 / 3;
  grid-row: 1;
  display: flex;
  margin-left: -2rem;
  display: flex;
  align-items: flex-end;
}
.customHeaderBold {
  font-size: 4vw;
  font-weight: bold;
  text-transform: uppercase;
}
.contactButton {
  color: white;
  width: 50vw;
  max-width: 18rem;
  height: 3rem;
  background: #101010;
  border-radius: 8px;
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.1s ease-in-out;
}
.contactButton:hover {
  background: #1c6b6b;
}
.aboutPhotoWrapper {
  grid-row: 2 / 5;
  grid-column: 2;
  display: flex;
  align-items: flex-end;
}
.aboutSub {
  grid-row: 2;
  grid-column: 1;
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 1.25rem;
  line-height: 175%;
  text-transform: uppercase;
  text-align: left;
  display: flex;
  align-items: center;
  background: linear-gradient(
    138.27deg,
    #000000 0%,
    #001d68 34.98%,
    #1c6b6b 90.98%
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
.aboutBody {
  grid-row: 3;
  grid-column: 1;
  text-align: left;
}
.buttonWrapper {
  grid-row: 4;
  grid-column: 1;
}
.matthewSitting {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
@media (max-width: 1000px) {
  .aboutMeWrapper {
    display: flex;
    flex-direction: column;
  }
  .aboutHeader {
    font-size: 7vw;
    display: flex;
    margin-left: 0;
    justify-content: center;
  }
}

@media (max-width: 450px) {
  .aboutHeader {
    font-size: 10vw;
  }
  .contactButton {
    font-size: 1rem;
  }
}
</style>
