<template>
  <div class="navigation">
    <h2>Matthew Slape | Creative</h2>
    <div class="hamburger-wrapper">
      <div class="ham-layer1"></div>
      <div class="ham-layer2"></div>
      <div class="ham-layer3"></div>
    </div>
  </div>
</template>

<style>
.navigation {
  display: flex;
  justify-content: space-between;
  margin: 1rem;
  align-items: center;
}

/*hamburger animation*/
.hamburger-wrapper {
  height: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.ham-layer1,
.ham-layer2,
.ham-layer3 {
  background: #022269;
  height: 0.35rem;
  width: 2.75rem;
  border-radius: 0.25rem;
}
</style>
