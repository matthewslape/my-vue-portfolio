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
          key: "U06VLuf0zg7tYlFqBg-XwDjEh3HyoY3hSnteG-WSklLLvixLNol54ZyBDCrsgzeLcgyhtFZgpZREWW3ZdAexw4B7UpfLoTfqRKHAJYBqPJ-v_YQk-67TuGQmiNYsHj71MKmFbT4LkA=w2400",
          title: "Do Good Illustration",
        },
        {
          key: "OIqMjQBUocF_zQpNRs13N_wl6BJbCA15V4p1FkoFMpWYpVwygvsc-R-zQ_SJrDXALltYkiuhm80yv6D683s9iLTSWwDTGcj6NlWoKvkmRrNUfMqecVFD76lBQ_4cyRGXIcLLEkQhoQ=w2400",
          title: "Coffee Skull",
        },
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
      ],
      column2: [
        {
          key: "dJUV9Ve4bO5lrM62y-uxQPPSvfG2k9HpaLxJMX9kjdmroJ_ujbvtuV5bC12GQ3Vwc8pe8VDHjyl2zQsqNVkRomcF9VS7iYw4Q-XBhRft_jojqtJasWWQ4aNcpGWkSbeZ0ipl9Ng0tA=w2400",
          title: "Just AiM Tiger",
        },
        {
          key: "UjtfsM28LqQ8w1pttIPec783G5z7K1KR71fFSfbv9Ar0O6xVDDpEBXxo7Kt6V-7J7aYoibT6cpGujCoCSqJSwygkKuBN9sSq0AGdt0dW54edJBXBY-v6ebM4nW4jwzBpjJLTaGFdbA=w2400",
          title: "Made & Told Logo",
        },
        {
          key: "fRGg448bK5K_XUwxSjneoXqZ-dTfvJ6BQniA5twJS3PnX9A4MA4okh1-WpA3C7mfkP-gk42-9DVrbKP3DLYugdnmNS--Xvxmj8ekv8rzDzgHyA441vJAd3LcZA-U6Kp9dFfEICEwzA=w2400",
          title: "Spokane WA. Lettering",
        },
        {
          key: "1GBnv581pSKLAfCpweng-PI87dNv-IZJFROc9xikoPzBwIu72z5aIu9DjLpEY-qKgsJ4lTlidegPb9YQJQXAD1bUTFX0mDgnvXctMw0ofp4XVMSnbl-1azc6qTu3yn0mWtn6ma3PFw=w2400",
          title: "Made & Told Logo",
        },

        {
          key: "t1-s1tv-W9f4WcFTMdS7SprJgGe7x9RaM93tW1eL4If9SDmdyJXTzm7gQ6FPSe59cxK_Tp7cGvnffg1hNWb5YODmdJE6L8vreag2gY1kLaUapVktZeSpqV1MIAbw98FchE38ClNdqQ=w2400",
          title: "Nike Wrestling Shoe",
        },
        {
          key: "C-u0G5Yf2H31J-iTsFPnMDtqgqa8q-t-ZVygovxYF95qI7rCzaxLFlffEzc3mWXGu9B5oqzbBOFWavlz6e7JMvcUsU_UOZQjh_2dkEVhURAUolq8E8LoZWS4X99eGG1qG7AkuW_Inw=w2400",
          title: "WA. Mark",
        },
        {
          key: "QCs67C9SLFczVnKeJb7DwIjbIf59AzoFqJXEjwsS1pmAdX49G8YhTtxCaTmzuyie4vxQnhUdYJHONf3KjR8YS5Ndnl2rEYpqC3RB_SoYXlpfGV2eb3NDsbnvyqsgqusj5GhJLX1diA=w2400",
          title: "Futuristic EWU Logo",
        },
      ],
      column3: [
        {
          key: "XdPYJqlqCIdw74xcmlGpBL-P-wc6WqgqTlzXloLi8uD1_xwCIU7C96SjIWIxuO-21L_fMnNVoBDjgogHGC2q7n6Rg6HwiwCed7JooJ__LQw6ONlC1zACWO57fly9F1ZC7LgBCpVpQQ=w2400",
          title: "West Plains Stickers",
        },
        {
          key: "FDyAIX-Mln8NpE_9YmY168rMOfAQrf7VUCZh3KvhYL3pCws07uMqADZW7H7YZTkd04OqkTav3jQqUHPKgZXb7GMllANVJQAdpL-4OGglXFDPKy93U_sV5YomxB28v4uuYSNTV7885g=w2400",
          title: "Permanence Type (Bible)",
        },
        {
          key: "V_LVDfDhmZcf7AYRPOwoKqvMcbDyUCJh91WJUPZ_sn4_DOvSQ7r2iFoWXQkcZJ03-rhxqTnQ-VnYVPosk1khh0nYLo-YiqLpuIAYmPeRNj80dIyBKFsU-ngOxiJ_ht_syU96lZ5zJA=w2400",
          title: "PNW Love",
        },
        {
          key: "Qqkowv5bezf8TiFtBs6lZPL9z5IjZI4vTzOEjghKvAiLDaEapQ2LF5YqZTf6F3UR1U2y7XE6MEbO8JVdJl_NOo1Djm1opzQE37JmvYtjZyzAvZs68nEhS9tWk-LklbCSkOBf4xNHBw=w2400",
          title: "Fight Your Flesh (Bible)",
        },
        {
          key: "Fr-jClrOu_dUDcauzpmuGSTBlHqqda24SLWd9UVlQqqMVz0aTAbcbE2ABeSK33Z2YMct_Km63yq41GgUlePL-htt59oRdLp1qZYuhQHqt3REpxRgEJNfS1mlRzmwl4tDD4byq2gNew=w2400",
          title: "Bear Line Illustration",
        },
        {
          key: "Rom4gcvcg-E3UNn4Txs-5q85u9tkAMIDk78yuZ5pIaywdE9qok1DxvUP6bYsF1g0ZQCZljatFJHNqSboJk3IX6BbF9iyyFv-AKuSLoYYozuVrJsqC1SOdP3W_A6sIX5GeD-YYE41tg=w2400",
          title: "Eagle Line Illustration",
        },
        {
          key: "L6GXdD9KNlaM8ZOQvBqzsOHsSNp58y1id6poGQ2FwaR8U-LS0ZV0bre6SBn6oTNaRr4a4AslD2oVb1mO6T20VuDZ99IU_OSz82R6cjjx9XU8K1rozwpWnHIjF81QHFiuc_cwgSq2jA=w2400",
          title: "Washington State Logo (1)",
        },
      ],
      column4: [
        {
          key: "rp9Jjfk0Uuq8YwRFDRnNiH--7h9I9oKf6FHmSmQ8qJUFs9R7d6Els75OojS81mpY67gAvqLZ8FVScdqJSw9eW4UBnmEh8oo_zZ2GC-2qFXzAKX3MD3oWjyzgfryCgNjOuqOOcHDSSw=w2400",
          title: "Mount Rainier Logo",
        },

        {
          key: "_U4xviWYNRuFMB0JKpvajdlKhzHkVHa38FYSPTT3uIojTLfGofkufpuRnWlxLq2TnBNx6WqWEDZXoT-OjdluBmqTMWH6YFlKCVoPtFoQUwc4eWspzkPyaYyXIRt6Zb5A_dgZtDGXxw=w2400",
          title: "MS Monogram",
        },
        {
          key: "0-QZJgl-WbQYWEj7Uyu-pQT8jZ1ftqRnQi2T1L_y-e-zwPGhzzrHYw3NqIvPsVFfZ0cVGCXWHMPVjBpbX7qmKbnddt1yeu_EhhD40TuHTzpT4byfjX3J9BOxDyjZVal0Ep4H5ouq5Q=w2400",
          title: "WA. Sticker",
        },
        {
          key: "N8y-LjUexWD2LBSzBv6FcvGk3nm0iomPDKYbJwnvOmHvy4dgq15NO3q8i17O1sKMoa2AI2UcXdFLlmU4LNJmPjFjiDqAlYAkvkEFT5WwcCo0dw-phdbNUHZr-feNo4LcJkiZKqf3dg=w2400",
          title: "Roots Coffee Logo",
        },
        {
          key: "rQSv_mtnSJ6fCOujS3HN1MYGjfqOdHA6lFqWGSIdfBg1Xxjej0dEztTPAilK9fiSuuXqN6-uReQOzRRSRlc6cED4ovu55jQ6kH9bwzuAmzipWQtuRmcRO7EopOP1NqZJtfAiV-eEgw=w2400",
          title: "Psalm 1 Tree (Bible)",
        },

        {
          key: "b3GCdPqmOESJ3IlL-B4pzqY5FQQDNb4q-Yj9eibwopjDCh5_zLWn8RrzBxuxsXfhzw-ZZ7Kuq5qas3KM777zVsegRjeP_kNwI9JM2LhmNMtBBJxfAMxig9Nb4khuUhTR5NIiQqxOtw=w2400",
          title: "Coffee Type",
        },
        {
          key: "3NCxybedeqwuPFct3yYtKWvAvlPnxLKmE3-CzTNJjPbs_Xjer4au8vEPef2wgF48QU66vX0mu3JOywdhHHB6HGN60Gpm_F8dZgpl74--5mqyb4FVKl77I2OkaNNzx-YZL8P2v67UEg=w2400",
          title: "Hard Work Type",
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
  background: #dea511;
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
