<template>
  <div class="pageWrapper">
    <h1>MOTION</h1>
    <div class="projectWrapper">
      <div class="videoBox">
        <iframe
          src="https://player.vimeo.com/video/836683250?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          frameborder="0"
          allow="autoplay; fullscreen; accelerometer; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          style="
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100% !important;
          "
          title="SLAPE-MotionReel2023-v2"
        ></iframe>
      </div>
      <div class="videoBox">
        <iframe
          src="https://www.youtube.com/embed/gc6kKANbeiI"
          style="
            border: none;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
          "
        ></iframe>
      </div>
      <div class="videoBox">
        <iframe
          src="https://www.youtube.com/embed/eEs6KU2GBrE"
          style="
            border: none;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
          "
        ></iframe>
      </div>
      <div class="videoBox">
        <iframe
          src="https://www.youtube.com/embed/FHFkuuk4CFQ"
          style="
            border: none;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
          "
        ></iframe>
      </div>
    </div>
  </div>
</template>

<style scoped>
h1 {
  margin-top: 7vw;
  background: #dea511;
  background-clip: text;
  color: transparent;
}
h3 {
  font-size: 2vw;
}

.projectWrapper {
  display: flex;
  flex-wrap: wrap;
  width: 96vw;
  margin: auto;
  justify-content: center;
}

.videoBox {
  display: flex;
  flex-direction: column;
  width: 46%;
  max-width: 78rem;
  height: 25vw;
  height: 25vw;
  position: relative;
  margin: 1rem;
}

iframe {
  border-radius: 1rem;
}

@media (max-width: 850px) {
  .projectWrapper {
    justify-content: center;
  }
  .videoBox {
    width: 100%;
    height: 20rem;
    margin: 0.5rem 0.25rem 0.5rem 0.25rem;
  }
}

@media (max-width: 850px) {
  h3 {
    font-size: 1.5rem;
    text-align: left;
  }
}
</style>
