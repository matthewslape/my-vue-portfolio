<template>
  <div class="titleWrapper">
    <img
      id="profilePic"
      src="../assets/profile.jpg"
      alt="Photo of Matthew Slape"
    />
    <h1 class="title">
      Welcome to my<br />
      <div id="titleBold">Creative Safe...</div>
    </h1>
  </div>
</template>

<style lang="css" scoped>
.title {
  position: absolute;
  top: 16rem;
  left: 10vw;
  font-size: 4.5vw;
}
#titleBold {
  font-weight: 700;
  background: linear-gradient(
    138.27deg,
    #000000 0%,
    #001d68 34.98%,
    #1c6b6b 90.98%
  );
  background-clip: text;
  color: transparent;
}
#profilePic {
  position: relative;
  right: -24vw;
  top: 10rem;
  width: 30vw;
  height: inherit;
  overflow: hidden;
  border-radius: 90rem;
}
</style>
