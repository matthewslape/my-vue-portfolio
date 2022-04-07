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
          key: "gHRIFCSl6qabeeTDd1K7VGFshu1fv0qbzLIEKF6EDe3bt8w6OA76-mjFc8DwsJJGu-oM3kGtx2CG2Jb55nTUMA46enU4EJ-cs8HT1FTDTJNhnzksm69K8mNzPpGhyz9-OxkD2QqPMA=w2400",
          title: "West Plains Tools",
        },
        {
          key: "IZXrYlz4d2FEeUW7687kaZpkSXvJP1qyxyP8KQC6CR5mKIn84QiR8kc6lMBg4AIOeCCJB6eOw7_sWg9PAr_fnzkvSbChhfvN0rBWosklbHI3FBUzL3PCpgW15U9ZLFLzFrSBmXgfxw=w2400",
          title: "West Plains Tools",
        },
        {
          key: "uAzds0pHq7422gCn2PqMAbGyLL6TdYsB_b64wQNQrAQnLMkO78011H3zE0NQolpYYQmfUOcM3kaf5o9sPjchyZ8hjwH4_83c2KriJZRPp4dWiYSN8GcXxy-2HvxT4KaUvs4WgUZltA=w2400",
          title: "Cheney WA. Sticker",
        },
        {
          key: "hNcj9L9LFSRR8eUaOD9Jy0HuAsAc51Pq7PbFa2o9AwQNQcsM7hx9vSLSlXwT0s2yXKDJInzYpv_0YXthhS9UFBSlqQHdGFesozluVCTcJqfy9ca-Sun3qICzD2lWuYRZKZBKFhKXxw=w2400",
          title: "Bully Breed Logo",
        },
        {
          key: "OIqMjQBUocF_zQpNRs13N_wl6BJbCA15V4p1FkoFMpWYpVwygvsc-R-zQ_SJrDXALltYkiuhm80yv6D683s9iLTSWwDTGcj6NlWoKvkmRrNUfMqecVFD76lBQ_4cyRGXIcLLEkQhoQ=w2400",
          title: "Coffee Skull",
        },
        {
          key: "U06VLuf0zg7tYlFqBg-XwDjEh3HyoY3hSnteG-WSklLLvixLNol54ZyBDCrsgzeLcgyhtFZgpZREWW3ZdAexw4B7UpfLoTfqRKHAJYBqPJ-v_YQk-67TuGQmiNYsHj71MKmFbT4LkA=w2400",
          title: "Do Good Illustration",
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
  /*TEXT SHADOW*/
}

.column img {
  opacity: 1;
}

/* Hover */
.column img:hover {
  /*STILL MESSING WITH!
  filter: blur(2px) grayscale(1);*/
  opacity: 0.1;
}

.column img:hover ~ .photoTitle {
  opacity: 1;
  color: black;
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
