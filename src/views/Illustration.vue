<template>
  <div class="Illustration">
    <h1 class="title">IllUSTRATION</h1>
    <div class="row">
      <div class="column">
        <div class="photoWrapper" v-for="item in column1" :key="item">
          <img
            :src="`https://lh3.googleusercontent.com/${item.key}`"
            alt="Project"
          />
          <h3 class="photoTitle">{{ item.title }}</h3>
        </div>
      </div>
      <div class="column">
        <div class="photoWrapper" v-for="item in column2" :key="item">
          <img
            :src="`https://lh3.googleusercontent.com/${item.key}`"
            alt="Project"
          />
          <h3 class="photoTitle">{{ item.title }}</h3>
        </div>
      </div>
      <div class="column">
        <div class="photoWrapper" v-for="item in column3" :key="item">
          <img
            :src="`https://lh3.googleusercontent.com/${item.key}`"
            alt="Project"
          />
          <h3 class="photoTitle">{{ item.title }}</h3>
        </div>
      </div>
      <div class="column">
        <div class="photoWrapper" v-for="item in column4" :key="item">
          <img
            :src="`https://lh3.googleusercontent.com/${item.key}`"
            alt="Project"
          />
          <h3 class="photoTitle">{{ item.title }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      column1: [
        {
          key: "Y4bf2CtcgG8cvB9CfZ4PEkAWUkE9jl6pxo3-y2LA8dkE5FOJz1SlsXkJ69I_uwKpCkrLBvn0zw8PwBkRL-kycFwTvWKKiOvmF3PCrplZRDsx55kRQ1MRlZv08sYQjh2OQV09v3x95g",
          title: "West Plains Tools",
        },
        {
          key: "Y4bf2CtcgG8cvB9CfZ4PEkAWUkE9jl6pxo3-y2LA8dkE5FOJz1SlsXkJ69I_uwKpCkrLBvn0zw8PwBkRL-kycFwTvWKKiOvmF3PCrplZRDsx55kRQ1MRlZv08sYQjh2OQV09v3x95g",
          title: "West Plains Tools",
        },
        {
          key: "Y4bf2CtcgG8cvB9CfZ4PEkAWUkE9jl6pxo3-y2LA8dkE5FOJz1SlsXkJ69I_uwKpCkrLBvn0zw8PwBkRL-kycFwTvWKKiOvmF3PCrplZRDsx55kRQ1MRlZv08sYQjh2OQV09v3x95g",
          title: "West Plains Tools",
        },
        {
          key: "Y4bf2CtcgG8cvB9CfZ4PEkAWUkE9jl6pxo3-y2LA8dkE5FOJz1SlsXkJ69I_uwKpCkrLBvn0zw8PwBkRL-kycFwTvWKKiOvmF3PCrplZRDsx55kRQ1MRlZv08sYQjh2OQV09v3x95g",
          title: "West Plains Tools",
        },
        {
          key: "Y4bf2CtcgG8cvB9CfZ4PEkAWUkE9jl6pxo3-y2LA8dkE5FOJz1SlsXkJ69I_uwKpCkrLBvn0zw8PwBkRL-kycFwTvWKKiOvmF3PCrplZRDsx55kRQ1MRlZv08sYQjh2OQV09v3x95g",
          title: "West Plains Tools",
        },
        {
          key: "Y4bf2CtcgG8cvB9CfZ4PEkAWUkE9jl6pxo3-y2LA8dkE5FOJz1SlsXkJ69I_uwKpCkrLBvn0zw8PwBkRL-kycFwTvWKKiOvmF3PCrplZRDsx55kRQ1MRlZv08sYQjh2OQV09v3x95g",
          title: "West Plains Tools",
        },
        {
          key: "Y4bf2CtcgG8cvB9CfZ4PEkAWUkE9jl6pxo3-y2LA8dkE5FOJz1SlsXkJ69I_uwKpCkrLBvn0zw8PwBkRL-kycFwTvWKKiOvmF3PCrplZRDsx55kRQ1MRlZv08sYQjh2OQV09v3x95g",
          title: "West Plains Tools",
        },
      ],
      column2: [
        {
          key: "Y4bf2CtcgG8cvB9CfZ4PEkAWUkE9jl6pxo3-y2LA8dkE5FOJz1SlsXkJ69I_uwKpCkrLBvn0zw8PwBkRL-kycFwTvWKKiOvmF3PCrplZRDsx55kRQ1MRlZv08sYQjh2OQV09v3x95g",
          title: "West Plains Tools",
        },
        {
          key: "Y4bf2CtcgG8cvB9CfZ4PEkAWUkE9jl6pxo3-y2LA8dkE5FOJz1SlsXkJ69I_uwKpCkrLBvn0zw8PwBkRL-kycFwTvWKKiOvmF3PCrplZRDsx55kRQ1MRlZv08sYQjh2OQV09v3x95g",
          title: "West Plains Tools",
        },
        {
          key: "Y4bf2CtcgG8cvB9CfZ4PEkAWUkE9jl6pxo3-y2LA8dkE5FOJz1SlsXkJ69I_uwKpCkrLBvn0zw8PwBkRL-kycFwTvWKKiOvmF3PCrplZRDsx55kRQ1MRlZv08sYQjh2OQV09v3x95g",
          title: "West Plains Tools",
        },
        {
          key: "Y4bf2CtcgG8cvB9CfZ4PEkAWUkE9jl6pxo3-y2LA8dkE5FOJz1SlsXkJ69I_uwKpCkrLBvn0zw8PwBkRL-kycFwTvWKKiOvmF3PCrplZRDsx55kRQ1MRlZv08sYQjh2OQV09v3x95g",
          title: "West Plains Tools",
        },
        {
          key: "Y4bf2CtcgG8cvB9CfZ4PEkAWUkE9jl6pxo3-y2LA8dkE5FOJz1SlsXkJ69I_uwKpCkrLBvn0zw8PwBkRL-kycFwTvWKKiOvmF3PCrplZRDsx55kRQ1MRlZv08sYQjh2OQV09v3x95g",
          title: "West Plains Tools",
        },
        {
          key: "Y4bf2CtcgG8cvB9CfZ4PEkAWUkE9jl6pxo3-y2LA8dkE5FOJz1SlsXkJ69I_uwKpCkrLBvn0zw8PwBkRL-kycFwTvWKKiOvmF3PCrplZRDsx55kRQ1MRlZv08sYQjh2OQV09v3x95g",
          title: "West Plains Tools",
        },
        {
          key: "Y4bf2CtcgG8cvB9CfZ4PEkAWUkE9jl6pxo3-y2LA8dkE5FOJz1SlsXkJ69I_uwKpCkrLBvn0zw8PwBkRL-kycFwTvWKKiOvmF3PCrplZRDsx55kRQ1MRlZv08sYQjh2OQV09v3x95g",
          title: "West Plains Tools",
        },
      ],
      column3: [
        {
          key: "Y4bf2CtcgG8cvB9CfZ4PEkAWUkE9jl6pxo3-y2LA8dkE5FOJz1SlsXkJ69I_uwKpCkrLBvn0zw8PwBkRL-kycFwTvWKKiOvmF3PCrplZRDsx55kRQ1MRlZv08sYQjh2OQV09v3x95g",
          title: "West Plains Tools",
        },
        {
          key: "Y4bf2CtcgG8cvB9CfZ4PEkAWUkE9jl6pxo3-y2LA8dkE5FOJz1SlsXkJ69I_uwKpCkrLBvn0zw8PwBkRL-kycFwTvWKKiOvmF3PCrplZRDsx55kRQ1MRlZv08sYQjh2OQV09v3x95g",
          title: "West Plains Tools",
        },
        {
          key: "Y4bf2CtcgG8cvB9CfZ4PEkAWUkE9jl6pxo3-y2LA8dkE5FOJz1SlsXkJ69I_uwKpCkrLBvn0zw8PwBkRL-kycFwTvWKKiOvmF3PCrplZRDsx55kRQ1MRlZv08sYQjh2OQV09v3x95g",
          title: "West Plains Tools",
        },
        {
          key: "Y4bf2CtcgG8cvB9CfZ4PEkAWUkE9jl6pxo3-y2LA8dkE5FOJz1SlsXkJ69I_uwKpCkrLBvn0zw8PwBkRL-kycFwTvWKKiOvmF3PCrplZRDsx55kRQ1MRlZv08sYQjh2OQV09v3x95g",
          title: "West Plains Tools",
        },
        {
          key: "Y4bf2CtcgG8cvB9CfZ4PEkAWUkE9jl6pxo3-y2LA8dkE5FOJz1SlsXkJ69I_uwKpCkrLBvn0zw8PwBkRL-kycFwTvWKKiOvmF3PCrplZRDsx55kRQ1MRlZv08sYQjh2OQV09v3x95g",
          title: "West Plains Tools",
        },
        {
          key: "Y4bf2CtcgG8cvB9CfZ4PEkAWUkE9jl6pxo3-y2LA8dkE5FOJz1SlsXkJ69I_uwKpCkrLBvn0zw8PwBkRL-kycFwTvWKKiOvmF3PCrplZRDsx55kRQ1MRlZv08sYQjh2OQV09v3x95g",
          title: "West Plains Tools",
        },
        {
          key: "Y4bf2CtcgG8cvB9CfZ4PEkAWUkE9jl6pxo3-y2LA8dkE5FOJz1SlsXkJ69I_uwKpCkrLBvn0zw8PwBkRL-kycFwTvWKKiOvmF3PCrplZRDsx55kRQ1MRlZv08sYQjh2OQV09v3x95g",
          title: "West Plains Tools",
        },
      ],
      column4: [
        {
          key: "Y4bf2CtcgG8cvB9CfZ4PEkAWUkE9jl6pxo3-y2LA8dkE5FOJz1SlsXkJ69I_uwKpCkrLBvn0zw8PwBkRL-kycFwTvWKKiOvmF3PCrplZRDsx55kRQ1MRlZv08sYQjh2OQV09v3x95g",
          title: "West Plains Tools",
        },
        {
          key: "Y4bf2CtcgG8cvB9CfZ4PEkAWUkE9jl6pxo3-y2LA8dkE5FOJz1SlsXkJ69I_uwKpCkrLBvn0zw8PwBkRL-kycFwTvWKKiOvmF3PCrplZRDsx55kRQ1MRlZv08sYQjh2OQV09v3x95g",
          title: "West Plains Tools",
        },
        {
          key: "Y4bf2CtcgG8cvB9CfZ4PEkAWUkE9jl6pxo3-y2LA8dkE5FOJz1SlsXkJ69I_uwKpCkrLBvn0zw8PwBkRL-kycFwTvWKKiOvmF3PCrplZRDsx55kRQ1MRlZv08sYQjh2OQV09v3x95g",
          title: "West Plains Tools",
        },
        {
          key: "Y4bf2CtcgG8cvB9CfZ4PEkAWUkE9jl6pxo3-y2LA8dkE5FOJz1SlsXkJ69I_uwKpCkrLBvn0zw8PwBkRL-kycFwTvWKKiOvmF3PCrplZRDsx55kRQ1MRlZv08sYQjh2OQV09v3x95g",
          title: "West Plains Tools",
        },
        {
          key: "Y4bf2CtcgG8cvB9CfZ4PEkAWUkE9jl6pxo3-y2LA8dkE5FOJz1SlsXkJ69I_uwKpCkrLBvn0zw8PwBkRL-kycFwTvWKKiOvmF3PCrplZRDsx55kRQ1MRlZv08sYQjh2OQV09v3x95g",
          title: "West Plains Tools",
        },
        {
          key: "Y4bf2CtcgG8cvB9CfZ4PEkAWUkE9jl6pxo3-y2LA8dkE5FOJz1SlsXkJ69I_uwKpCkrLBvn0zw8PwBkRL-kycFwTvWKKiOvmF3PCrplZRDsx55kRQ1MRlZv08sYQjh2OQV09v3x95g",
          title: "West Plains Tools",
        },
        {
          key: "Y4bf2CtcgG8cvB9CfZ4PEkAWUkE9jl6pxo3-y2LA8dkE5FOJz1SlsXkJ69I_uwKpCkrLBvn0zw8PwBkRL-kycFwTvWKKiOvmF3PCrplZRDsx55kRQ1MRlZv08sYQjh2OQV09v3x95g",
          title: "West Plains Tools",
        },
      ],
    };
  },
};
</script>

<style scoped>
/*title*/
h1 {
  margin-top: 7vw;
  background: linear-gradient(
    138.27deg,
    #000000 0%,
    #001d68 34.98%,
    #1c6b6b 90.98%
  );
  background-clip: text;
  color: transparent;
}

/* For individual photo */
.photoWrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.photoTitle {
  font-size: 1.5rem;
  position: absolute;
  color: white;
  z-index: 4;
  opacity: 0;
  transition-duration: 0.5s;
}

/* Hover */
.column img:hover {
  filter: blur(2px) grayscale(1);
}

.column img:hover ~ .photoTitle {
  opacity: 1;
}

/* Row of columns that sits next to each other */
.row {
  display: flex;
  flex-wrap: wrap;
  padding: 0 4px;
}

.column {
  flex: 25%;
  max-width: 25%;
  padding: 0 4px;
}

.column img {
  margin-top: 8px;
  vertical-align: middle;
  width: 100%;
  transition-duration: 0.5s;
}

/* Responsive layout */
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
