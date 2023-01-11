<template>
  <div class="contactWrapper">
    <div class="contact">
      <div class="contactForm">
        <h1 class="contactHeader" id="contact">Contact</h1>
        <form ref="form" @submit.prevent="sendEmail">
          <div class="rowWrapper">
            <div class="fieldWrapper seprateBox">
              <label>First Name</label>
              <input class="inputBox" type="text" name="user_name" required />
            </div>
            <div class="fieldWrapper seprateBox">
              <label>Last Name</label>
              <input class="inputBox" type="text" name="user_name" required />
            </div>
          </div>
          <div class="fieldWrapper">
            <label>Email</label>
            <input class="inputBox" type="email" name="user_email" required />
          </div>
          <div class="fieldWrapper">
            <label>Message</label>
            <textarea
              class="inputBox rowWrapper"
              style="height: 20vh"
              name="message"
            ></textarea>
          </div>
          <input class="sendButton" type="submit" value="Send" required />
        </form>
      </div>
    </div>
    <img class="swoosh2 squiggle" src="../assets/svgs/swoosh2.svg" alt="decoration" />
  </div>
  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" height="0" width="0">
    <defs>
      <filter id="squiggle">
        <feTurbulence
          type="fractalNoise"
          id="turbulence"
          baseFrequency=".2"
          numOctaves="40"
        />
        <feDisplacementMap id="displacement" in="SourceGraphic" scale="4" />
      </filter>
    </defs>
  </svg>
</template>
<script>
import emailjs from "@emailjs/browser";

export default {
  methods: {
    sendEmail() {
      emailjs
        .sendForm(
          "service_fzvfjeq",
          "contact_form",
          this.$refs.form,
          "user_Ts3qlkk3uYGLbMh4BqLZC"
        )
        .then(
          (result) => {
            console.log("SUCCESS!", result.text);
            window.location.href = "/success";
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    },
  },
};
</script>

<style scoped>
.contactHeader {
  color: white;
}
.swoosh2 {
  object-fit: cover;
  width: 100vw;
  min-width: 430px;
}

/*MAYBE COPY LANDING AND BASE OFF THAT?*/
.contactWrapper {
  transform: translateY(-16vw);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
}
.swoosh2 {
  object-fit: cover;
  width: 102vw;
  min-width: 1100px;
}
.contact {
  position: absolute;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.contactForm {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 7vw;
}
.contactHeader {
  color: white;
  padding-bottom: 2rem;
  padding-top: 7vw;
}
/*FORM*/
form {
  display: flex;
  flex-direction: column;
  align-items: center;
}
label {
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  letter-spacing: 0.2rem;
  text-transform: uppercase;
  color: white;
}
.inputBox {
  background-color: #eeeeee;
  border: none;
  height: 3rem;
  width: 100%;
  font-family: Poppins;
  border-radius: 2px;
}
.rowWrapper {
  display: flex;
  width: 75vw;
  max-width: 80rem;
  justify-content: space-between;
}
.fieldWrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-bottom: 1rem;
  width: 100%;
}
.seprateBox {
  width: 48%;
}
.sendButton {
  color: white;
  width: auto;
  height: 3rem;
  background: #101010;
  border-radius: 8px;
  margin: 1rem 0;
  padding: 0 2rem;

  font-family: Poppins;
  font-style: normal;
  font-weight: 800;
  font-size: 1.5rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  border-style: none;
  transition: 0.1s ease-in-out;
}
.sendButton:hover {
  background: #1c6b6b;
}

/*TEXTURE CLASS*/
.squiggle {
  filter: url(#squiggle);
}

@media (max-width: 450px) {
  .rowWrapper {
    flex-direction: column;
    width: 88vw;
  }
  .sendButton {
    font-size: 1rem;
  }
  .seprateBox {
    width: 100%;
  }
}
@media (min-width: 2000px) {
  .rowWrapper {
    max-width: 80rem;
  }
}
</style>
