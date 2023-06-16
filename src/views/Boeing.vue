<template>
  <img
    class="coverPhoto"
    id="coverPhoto"
    src="../assets/photos/print/print-cardPhoto-boeing.png"
    alt="ECP Cover Photo, Photo by Dmitry Mishin on Unsplash
  "
  />
  <div class="articleWrapper">
    <h1>Boeing History Book</h1>
    <h2>EWU VCD Project</h2>
    <p>
      This historical book illuminates the remarkable achievements of Boeing
      since its inception in 1915. Serving as a comprehensive chronicle of the
      company's transformative journey, this book captures the essence of
      Boeing's enduring legacy. It is essential to note that neither the written
      content nor the captivating photography within this publication are
      accredited to me. My role entailed assuming the responsibility of layout
      and design, skillfully executing the vision of this book's presentation
      utilizing the versatile capabilities of Adobe InDesign.
    </p>
    <h4>Final Book</h4>
    <iframe
      src="https://issuu.com/matthewslape/docs/boeing/1?ff"
      width="100%"
      height="500px"
    />
    <a
      class="protoButton"
      href="https://issuu.com/matthewslape/docs/boeing/1?ff"
      target="_blank"
    >
      <h2 class="protoButtonText">Book Link</h2>
    </a>
    <div class="directory">
      <a href="#coverPhoto"><h5 class="dOption">to Start</h5></a>
      <a href="/print"><h5 class="dOption">to Print</h5></a>
      <a href="/"><h5 class="dOption">to Home</h5></a>
    </div>
  </div>
</template>

<script></script>

<style scoped>
h1 {
  text-transform: none;
  text-align: left;
}

h2 {
  opacity: 0.8;
  margin-bottom: 2rem;
}

h4 {
  padding-top: 4rem;
  padding-bottom: 1rem;
}

p,
h2,
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

.protoButtonText {
  font-weight: 800;
  color: white;
  max-width: 22rem;
  height: 3rem;
  background: #101010;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.1s ease-in-out;
  margin: 1rem;
  padding: 0rem 1rem;
}
.protoButton {
  align-self: center;
}

.protoButtonText:hover {
  background: #dea511;
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
    filter: none;
  }
  .finalPhoto {
    width: 180vw;
  }
  .directory {
    flex-direction: column;
  }
}
</style>
