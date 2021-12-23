<template>
  <div class="footer">
    <img
      class="footerLink"
      id="github"
      src="../assets/photos/github.png"
      alt="Github Link"
    />
    <img
      class="footerLink"
      id="linkedin"
      src="../assets/photos/linkedin.png"
      alt="LinkedIn Link"
    />
    <img
      class="footerLink"
      id="instagram"
      src="../assets/photos/instagram.png"
      alt="Instagram Link"
    />
  </div>
</template>
<script>
//STILL NEED TO ADD LINKS FOR FOOTER 12.23.21
</script>

<style scoped>
.footer {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: fixed;
  bottom: 0;
  height: 4rem;
  width: 100%;
}
.footerLink {
  height: 30px;
  margin: 0.5rem;
  filter: drop-shadow(0 0 0.5rem black);
}
</style>
