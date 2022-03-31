<template>
  <div class="Illustration">
    <h1 class="title">IllUSTRATION</h1>
    <img
      src="https://lh3.googleusercontent.com/Y4bf2CtcgG8cvB9CfZ4PEkAWUkE9jl6pxo3-y2LA8dkE5FOJz1SlsXkJ69I_uwKpCkrLBvn0zw8PwBkRL-kycFwTvWKKiOvmF3PCrplZRDsx55kRQ1MRlZv08sYQjh2OQV09v3x95g"
    />
    <!--<div class="column">
      <div class="photoWrapper" v-for="item in column1" :key="item">
        <img
          :src="require(`https://lh3.googleusercontent.com/${item.key}=w2400`)"
          alt="Project"
        />
        <h3 class="photoTitle">{{ item.title }}</h3>
      </div>
    </div>-->
  </div>
</template>

<script>
export default {
  data() {
    return {
      column1: [
        {
          key: "Y4bf2CtcgG8cvB9CfZ4PEkAWUkE9jl6pxo3-y2LA8dkE5FOJz1SlsXkJ69I_uwKpCkrLBvn0zw8PwBkRL-kycFwTvWKKiOvmF3PCrplZRDsx55kRQ1MRlZv08sYQjh2OQV09v3x95g",
          title: "JS Trucking and Excavation",
        },
      ],
      column2: [
        { key: "js", title: "JS Trucking and Excavation" },
        { key: "ecp", title: "Energy Conservation Program" },
        { key: "sphoto", title: "Samanth Rhea Photography" },
        { key: "keyconnect", title: "KEYTHECONNECT" },
      ],
      column3: [
        { key: "js", title: "JS Trucking and Excavation" },
        { key: "ecp", title: "Energy Conservation Program" },
        { key: "sphoto", title: "Samanth Rhea Photography" },
        { key: "keyconnect", title: "KEYTHECONNECT" },
      ],
      column4: [
        { key: "js", title: "JS Trucking and Excavation" },
        { key: "ecp", title: "Energy Conservation Program" },
        { key: "sphoto", title: "Samanth Rhea Photography" },
        { key: "keyconnect", title: "KEYTHECONNECT" },
      ],
    };
  },
};
</script>

<style scoped>
.photoWrapper {
  display: flex;
  flex-wrap: wrap;
  padding: 0 4px;
}

/* Create four equal columns that sits next to each other */
.column {
  flex: 25%;
  max-width: 25%;
  padding: 0 4px;
}

.column img {
  margin-top: 8px;
  vertical-align: middle;
  width: 100%;
}

/* Responsive layout - makes a two column-layout instead of four columns */
@media screen and (max-width: 800px) {
  .column {
    flex: 50%;
    max-width: 50%;
  }
}

/* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {
  .column {
    flex: 100%;
    max-width: 100%;
  }
}
</style>
