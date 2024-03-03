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
          key: "pw/AP1GczPhbBm4bY7onwmn1qedpQAe7s-lmsSk_k_Qp-7_L5A15xNaW4CqFAY8Z252X9iYf_z3yR4pWFMqVXvPGRiRwwPiMqkJXLlveu0kafQfJgWOFCdM9ns=w2400",
          title: "PNW Bear",
        },
        {
          key: "pw/AP1GczOapRs9UD3Rwh4InXB63I6tOGUqt7eARdY5vVC0zKc9McenOtRPFEYlUliy6PX1-OpWDtfP7C6xA_okdfj2jbfOEW13WnI6dyd0cE7MbzY8tnqwDjo=w2400",
          title: "PNW Air Freshener",
        },
        {
          key: "pw/AP1GczNO2BOFODIXuvfydEsoK3Oo_h2fDWYmlfnQHGdSvkZnNsO_zT5jbPbrN8cOhSnmGc763UNZv8QHWD11ZxFQkRQ7khK6elR36YJhJcxNoZKC-UZ8mTI=w2400",
          title: "Campfire Mountain",
        },

        {
          key: "rp9Jjfk0Uuq8YwRFDRnNiH--7h9I9oKf6FHmSmQ8qJUFs9R7d6Els75OojS81mpY67gAvqLZ8FVScdqJSw9eW4UBnmEh8oo_zZ2GC-2qFXzAKX3MD3oWjyzgfryCgNjOuqOOcHDSSw=w2400",
          title: "Mount Rainier Logo",
        },
        {
          key: "pw/AP1GczPCSRMgL-TMMQ2rbWoAjuVNQc2GWJyA0lB9WPFFd1sSqSsFT7s6tbCxjT-0WYIZvTDEInSLV5GBIARiepPs3v1bfRjJUX8PmnkMpQ_c6T336HGXsfY=w2400",
          title: "Cowgirl Boot",
        },
        {
          key: "pw/AP1GczNdYG4Wc-Bc-FOXr0GSF6r6E-7jB1q2g2MCEOoYknOA5aGKfGVFevvGWhQI8d0Wi2WACu4b_N_hkSllIf1A882Hz5lFwcvlh9c5pxLGD4oQSIGlZ2s=w2400",
          title: "PNW Abstraction",
        },

        {
          key: "pw/AP1GczOWXqaHZgzSzkm1DqLBxLole1otizwU6sIPn3GytZID8c16Vyr7HDPEDAKXR7L23Nlj9bQ2T9JRP4RjlXSWFz5-KOnMXSRd398XZcizP0ULSrtklKk=w2400",
          title: "Corefit Gym Tee Design",
        },
        {
          key: "Fr-jClrOu_dUDcauzpmuGSTBlHqqda24SLWd9UVlQqqMVz0aTAbcbE2ABeSK33Z2YMct_Km63yq41GgUlePL-htt59oRdLp1qZYuhQHqt3REpxRgEJNfS1mlRzmwl4tDD4byq2gNew=w2400",
          title: "Bear Line Illustration",
        },
        {
          key: "L6GXdD9KNlaM8ZOQvBqzsOHsSNp58y1id6poGQ2FwaR8U-LS0ZV0bre6SBn6oTNaRr4a4AslD2oVb1mO6T20VuDZ99IU_OSz82R6cjjx9XU8K1rozwpWnHIjF81QHFiuc_cwgSq2jA=w2400",
          title: "Washington State Logo",
        },
        {
          key: "FDyAIX-Mln8NpE_9YmY168rMOfAQrf7VUCZh3KvhYL3pCws07uMqADZW7H7YZTkd04OqkTav3jQqUHPKgZXb7GMllANVJQAdpL-4OGglXFDPKy93U_sV5YomxB28v4uuYSNTV7885g=w2400",
          title: "Permanence Type (Bible)",
        },
      ],
      column2: [
        {
          key: "pw/AP1GczMgMYT3OhzD9c25ocWluVTSzD9NLYiZnrz7SRTij6jvczc6dT9BzdgdMqPKbMaEOvtkpJooaOVFttDrdDxn_0W_UmuUV2xOIOLb268zKmr0ItJUQhs=w2400",
          title: "Lucky Horseshoe",
        },
        {
          key: "pw/AP1GczPnlJpgewmXW7OkMlr-1a4CFhN-rYfmHvoWngWiPdWBYjyYTuFxxg_XHTlkMEaVeB0wGCQi8_MzuyLo_pm_bNX5zv4jOfQp_18TN8wTTLE9uPcC8Lw=w2400",
          title: "Pike St. Coffee Tee",
        },
        {
          key: "pw/AP1GczMdnulke135fwIICMxCNgNWrbDeQgyw61BOjM8mg8-CVgrjnhVaa8YOjIwJbq_9CK1Fgd2hKL015gVY2-WUVUp-YMW4eyAUqGz8vspNZkhSuBtJjyc=w2400",
          title: "Sinful Hearts",
        },
        {
          key: "pw/AP1GczOks0TB3t-I5_REUBejNygyv0dkdV8SrhOFlW-weorNITQCJX3TA4Vi0IOJrNHIIk2OG0NVehVgsKV5cLexxteKWVrdrqUHXvdjBtuKsJuKjdmW_hE=w2400",
          title: "Pike St. Coffee Biker",
        },

        {
          key: "/pw/AP1GczNA7ZI49lGhPK0Lhhr5HQ4gpmy4MyqNsywa_v6inxgAjk2NUVaLmwpvHmMgUbGMxvkgmLSsGvOJlOoDMKkJmsAQnR1q8hZbrohCEC400j_-yp60hYY=w2400",
          title: "Rejoice Type",
        },
        {
          key: "pw/AP1GczPqRoOmpstHouqgnYC6xkjmx7UUo_nSJVPYQMu2Xs9GfAX9Qjp83zYuo--Rv4iP58kQiRw8efigQdtHTzFdKqobDBY6SMCwVmmxt0AyYBCyJjq4MbY=w2400",
          title: "Pike St. Coffee Pigeon",
        },

        {
          key: "pw/AP1GczNhw_x078h4UrO4vt_PXMXu1Lr25XdqlgI_zbEp6Jbz6gkK8e6-izNercRIkrX8H1574WS3XAPmc49bcJUntITfjd-OuKoVRu-t0vTzH0d6xlUp1rg=w2400",
          title: "Longhorn Skull",
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
      column3: [
        {
          key: "/pw/AP1GczMQKEA80e54_Foap6YY1MngrPj87ycteBljp3RrD60H6w03k0TDaYw64xDH__X_1ccKcPPRSGTaphPQbQ6borKG1JFasE5Xcp8XnYAl-D_KZWqpDMA=w2400",
          title: "Big Foot Print",
        },
        {
          key: "/pw/AP1GczP6Fdy1TiFBJZj9-Du_T6yHTt146Sd77s4X0-WzHTSmjxn6ecV19zCnEqWYzGbU01Y6iVgKc7phR2WQnOCCZVgWLDUTPkct_sPV2oTyMt3_dg1hYes=w2400",
          title: "RHBC Tee",
        },

        {
          key: "U06VLuf0zg7tYlFqBg-XwDjEh3HyoY3hSnteG-WSklLLvixLNol54ZyBDCrsgzeLcgyhtFZgpZREWW3ZdAexw4B7UpfLoTfqRKHAJYBqPJ-v_YQk-67TuGQmiNYsHj71MKmFbT4LkA=w2400",
          title: "Do Good Illustration",
        },
        {
          key: "OIqMjQBUocF_zQpNRs13N_wl6BJbCA15V4p1FkoFMpWYpVwygvsc-R-zQ_SJrDXALltYkiuhm80yv6D683s9iLTSWwDTGcj6NlWoKvkmRrNUfMqecVFD76lBQ_4cyRGXIcLLEkQhoQ=w2400",
          title: "Coffee Skull",
        },

        {
          key: "pw/AP1GczMjebYw5re0WjfsGCzwrnGrqeaGAGCOJ-slR27mDs6dNaSjoqq-R7hXYmtJUjg5n8by8ze3OcbcDumvjSFozrNKXSYKuzTvmzWzjLGzOA-MjIEYzWE=w2400",
          title: "Print Cowboy",
        },
        {
          key: "/pw/AP1GczNNVZ8vccH81ajra6nM_4GU1Cjk3Pgy3mFvaCl_Wuj0agnKteklSx8BABZIdwoZAIOHZsY7XhH946YaEExShKQ7bQPSS9KXsWfatp1_iyOL7ehO6Vs=w2400",
          title: "JS Trucking Assets",
        },
        /*{
          key: "uAzds0pHq7422gCn2PqMAbGyLL6TdYsB_b64wQNQrAQnLMkO78011H3zE0NQolpYYQmfUOcM3kaf5o9sPjchyZ8hjwH4_83c2KriJZRPp4dWiYSN8GcXxy-2HvxT4KaUvs4WgUZltA=w2400",
          title: "Cheney WA. Sticker",
        },*/
        {
          key: "hNcj9L9LFSRR8eUaOD9Jy0HuAsAc51Pq7PbFa2o9AwQNQcsM7hx9vSLSlXwT0s2yXKDJInzYpv_0YXthhS9UFBSlqQHdGFesozluVCTcJqfy9ca-Sun3qICzD2lWuYRZKZBKFhKXxw=w2400",
          title: "Bully Breed Logo",
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
          key: "V_LVDfDhmZcf7AYRPOwoKqvMcbDyUCJh91WJUPZ_sn4_DOvSQ7r2iFoWXQkcZJ03-rhxqTnQ-VnYVPosk1khh0nYLo-YiqLpuIAYmPeRNj80dIyBKFsU-ngOxiJ_ht_syU96lZ5zJA=w2400",
          title: "PNW Love",
        },
      ],
      column4: [
        {
          key: "dJUV9Ve4bO5lrM62y-uxQPPSvfG2k9HpaLxJMX9kjdmroJ_ujbvtuV5bC12GQ3Vwc8pe8VDHjyl2zQsqNVkRomcF9VS7iYw4Q-XBhRft_jojqtJasWWQ4aNcpGWkSbeZ0ipl9Ng0tA=w2400",
          title: "Just AiM Tiger",
        },
        {
          key: "pw/AP1GczOYCMvgYHNPHsw6vYdzOX3o-1zvDmepUnIitmDSeLvnb8J0RmEfcRlbA8Ks1079o4jPSjajQWxhIsNf99EXSJGS0LWZvqM6FsmjXTTJUsXw5Kr7qB8=w2400",
          title: "Stay Wild Wolf",
        },

        {
          key: "Qqkowv5bezf8TiFtBs6lZPL9z5IjZI4vTzOEjghKvAiLDaEapQ2LF5YqZTf6F3UR1U2y7XE6MEbO8JVdJl_NOo1Djm1opzQE37JmvYtjZyzAvZs68nEhS9tWk-LklbCSkOBf4xNHBw=w2400",
          title: "Fight Your Flesh (Bible)",
        },
        {
          key: "XdPYJqlqCIdw74xcmlGpBL-P-wc6WqgqTlzXloLi8uD1_xwCIU7C96SjIWIxuO-21L_fMnNVoBDjgogHGC2q7n6Rg6HwiwCed7JooJ__LQw6ONlC1zACWO57fly9F1ZC7LgBCpVpQQ=w2400",
          title: "West Plains Stickers",
        },
        {
          key: "C-u0G5Yf2H31J-iTsFPnMDtqgqa8q-t-ZVygovxYF95qI7rCzaxLFlffEzc3mWXGu9B5oqzbBOFWavlz6e7JMvcUsU_UOZQjh_2dkEVhURAUolq8E8LoZWS4X99eGG1qG7AkuW_Inw=w2400",
          title: "WA. Mark",
        },
        {
          key: "1GBnv581pSKLAfCpweng-PI87dNv-IZJFROc9xikoPzBwIu72z5aIu9DjLpEY-qKgsJ4lTlidegPb9YQJQXAD1bUTFX0mDgnvXctMw0ofp4XVMSnbl-1azc6qTu3yn0mWtn6ma3PFw=w2400",
          title: "Made & Told Logo",
        },

        {
          key: "QCs67C9SLFczVnKeJb7DwIjbIf59AzoFqJXEjwsS1pmAdX49G8YhTtxCaTmzuyie4vxQnhUdYJHONf3KjR8YS5Ndnl2rEYpqC3RB_SoYXlpfGV2eb3NDsbnvyqsgqusj5GhJLX1diA=w2400",
          title: "Futuristic EWU Logo",
        },
        {
          key: "t1-s1tv-W9f4WcFTMdS7SprJgGe7x9RaM93tW1eL4If9SDmdyJXTzm7gQ6FPSe59cxK_Tp7cGvnffg1hNWb5YODmdJE6L8vreag2gY1kLaUapVktZeSpqV1MIAbw98FchE38ClNdqQ=w2400",
          title: "Nike Wrestling Shoe",
        },
        {
          key: "_U4xviWYNRuFMB0JKpvajdlKhzHkVHa38FYSPTT3uIojTLfGofkufpuRnWlxLq2TnBNx6WqWEDZXoT-OjdluBmqTMWH6YFlKCVoPtFoQUwc4eWspzkPyaYyXIRt6Zb5A_dgZtDGXxw=w2400",
          title: "MS Monogram",
        },

        {
          key: "UjtfsM28LqQ8w1pttIPec783G5z7K1KR71fFSfbv9Ar0O6xVDDpEBXxo7Kt6V-7J7aYoibT6cpGujCoCSqJSwygkKuBN9sSq0AGdt0dW54edJBXBY-v6ebM4nW4jwzBpjJLTaGFdbA=w2400",
          title: "Made & Told Logo",
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
  color: white;
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
