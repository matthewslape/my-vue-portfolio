<template>
  <div class="photoAndVideo">
    <h1 class="title">Photo and Video</h1>
    <div class="row">
      <div class="column">
        <div class="photoWrapper" v-for="item in column1_1" :key="item">
          <img
            :src="`https://lh3.googleusercontent.com/${item.key}`"
            alt="Photo"
          />
          <h3 class="photoTitle">{{ item.title }}</h3>
        </div>
        <div class="video">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/yBKeVEA56hI"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div class="photoWrapper" v-for="item in column1_2" :key="item">
          <img
            :src="`https://lh3.googleusercontent.com/${item.key}`"
            alt="Photo"
          />
          <h3 class="photoTitle">{{ item.title }}</h3>
        </div>
      </div>
      <div class="column">
        <div class="photoWrapper" v-for="item in column2_1" :key="item">
          <img
            :src="`https://lh3.googleusercontent.com/${item.key}`"
            alt="Photo"
          />
          <h3 class="photoTitle">{{ item.title }}</h3>
        </div>
        <div class="video">
          <iframe
            src="https://www.youtube.com/embed/A-9DythyBkc"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div class="photoWrapper" v-for="item in column2_2" :key="item">
          <img
            :src="`https://lh3.googleusercontent.com/${item.key}`"
            alt="Photo"
          />
          <h3 class="photoTitle">{{ item.title }}</h3>
        </div>
      </div>
      <div class="column">
        <div class="photoWrapper" v-for="item in column3_1" :key="item">
          <img
            :src="`https://lh3.googleusercontent.com/${item.key}`"
            alt="Photo"
          />
          <h3 class="photoTitle">{{ item.title }}</h3>
        </div>
        <div class="video">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/1TuM-2OS79M"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div class="photoWrapper" v-for="item in column3_2" :key="item">
          <img
            :src="`https://lh3.googleusercontent.com/${item.key}`"
            alt="Photo"
          />
          <h3 class="photoTitle">{{ item.title }}</h3>
        </div>
        <div class="video">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/xjQoReBtuQA"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>

        <div class="photoWrapper" v-for="item in column3_3" :key="item">
          <img
            :src="`https://lh3.googleusercontent.com/${item.key}`"
            alt="Photo"
          />
          <h3 class="photoTitle">{{ item.title }}</h3>
        </div>
      </div>
      <div class="column">
        <div class="photoWrapper" v-for="item in column4_1" :key="item">
          <img
            :src="`https://lh3.googleusercontent.com/${item.key}`"
            alt="Photo"
          />
          <h3 class="photoTitle">{{ item.title }}</h3>
        </div>
        <div class="video">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/q7Fqlp9RoZ4"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div class="photoWrapper" v-for="item in column4_2" :key="item">
          <img
            :src="`https://lh3.googleusercontent.com/${item.key}`"
            alt="Photo"
          />
          <h3 class="photoTitle">{{ item.title }}</h3>
        </div>
        <div class="video">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/7TnVSn3ngBc"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      column1_1: [
        {
          key: "34LE4BLJseE4ghraMHxO_iSHTQh6dT5X2cT2yZ9icz2bpkIfLYJXrBowkIL79UYrt0iSt0OppIuTRonhkHzJg9-q5IDzWq5PCZQJBE7x5ny_bFGDrNdTEkSAoqDz56i-F8RU-uLvyQ=w2400",
          title: "Cheney Grain 6.2021",
        },

        {
          key: "EmQgXmUxC2sy6ppuNAjztwx6uqzb-Z3q_fJgCekm1HRf_D3P6b2p71NFarOqVPATNBWwXIek5v4JITahmtTF2bR9w2u8dXMYXWnQeU8Vsje8fFgN_mCG2l8ZpzErB1bqs5aA-zFH2g=w2400",
          title: "Airplane (2) 4.28.2022",
        },
        {
          key: "N5VgqqB8fZK4EhSIXNg8mWK5PcA0oUHAK-6BzJCvOFzTfUOHHQ_0_x5zXWEev-1V7kF-QbSQwevEVBdZ5nrCzMSFNscLxiUtx0JecwVNmHQARI728MrDdGq3C0qRq2fhWrYFFacJcw=w2400",
          title: "Spokane 4.28.2022",
        },
        {
          key: "O7Ryu_FlTeSZGkkOar62rARp2fhQjYSD_KDxTn0-Pqp191KN8OVcdj3qyrFDjixfgLwR89f63NdLsOU4n9WDtlAh_AL9jE8W6AH29Y52uBaZ-WNxiqFJNSGPmBbIc1BeQuZIxx4MfA=w2400",
          title: "Product Color (1) 11.2019",
        },
        {
          key: "g6IATe8EWyClWZo6BSt4H2uxMBHFdZJZeYXC5qwQuQHUTcGi7U-MLDS8LBj7E75Zk_oYfK_TJP_1pnF-_X8k_696BVjjxp4766Oy7iX3aMQloxNfsMURM1bu7AHR31JBOMWk-XfWtA=w2400",
          title: "Product Color (2) 11.2019",
        },
        {
          key: "vxJrp7uf8hQWR1KgnP_8h4stBEftwXlDiAHTI1xQJNP6-WA6Sy75SZiOy0oXjJppmRRdUfwfv8nlsajERczGlf4EarRLLPAFNEbDeRl_3UVyKz_jXQ71BI90dv4RF0nFu3abBK-wKw=w2400",
          title: "Lake CDA 6.2021",
        },
        {
          key: "0vutp5aaJ4T4IzLI1fALitq5ApeI6CSuggKWv9WFnCPTiUCXCAdGjbzBaIRvAHfzJ_4s7lT67NDWR2bnItuVaqJgFeaGcEnfPlqmDl8l6QUxDPP4VPNrpLTRWYkw5EOTxEPRtoXWnA=w2400",
          title: "Airplane (1) 4.28.2022",
        },
        {
          key: "ByAud86gpJSeSklMD-LodOnE9qc4l_ZKs3Q1BV9dBZ7sWHJ38H8vlpInp-gmZXxougm6jGPI-yyhI1ajFBj5cK_1iqn795tdNyYMs3Sz-mowWJE091EnuxvQCzrg3ww7mVZLa-_e-A=w2400",
          title: "LC bball (1) 3.25.2022",
        },
        {
          key: "dAih77ev1s14PjhAEonhAhekedokHGaMO1KyTjgNCrrHa8VV2kSKCsPEOYhlhKsIkcAmt-0s52izgyBKqpRaNkzmfRVOq95FIzxOTzaFY24zYmK0ZF0mxJUAZwinsEDrbwugDf18Ww=w2400",
          title: "LC bball (2) 3.25.2022",
        },
        {
          key: "gBFVyiCsI54QL8Pg67CtFh8oVLAYMFIHeKxd-XPm4Jibjdp219uogAPxPHBSWoJ0MKnGw5On5mLNWPirp6kmXWbqoVKUlEcNf21EWHcAKUrOXXtGvlgr9tOeHZzChe7-uSHP7Ml45A=w2400",
          title: "LC bball (3) 3.25.2022",
        },
        {
          key: "nv3ZBmEHJX8DcS_f7aQCrnZ5Td66hZOpd5mfmLy6sCNgtQHI8TzKvUtwq9ObJ0kmhASeaTafIyTVVKlGF0eAxovolFwiqjuyoOvxHSITTRaad-bMFQvQfUenhvkAyY2SMGmv2cNAHQ=w2400",
          title: "Meta Type (2) 8.2019",
        },
        /*{
          key: "17hNh5q_WaPYsif40mOl0RWP5QQCR0uaSnKOfriafNRNXU-G1tgFAzjzg8e3JT-t3mx7p4uGNN8463VdgEbMB8pq1zJh9JkhHot4zgJl0BMVGZtYtf1-k27cNrMGQ0YqEg6RJrO3tw=w2400",
          title: "Adna Baseball (1) 3.22.2022",
        },*/
      ],
      column1_2: [
        {
          key: "erBS2dItwhJtPeQ6BBAcjqHspgU828IRrmMYXzHFfNBLnEml24SBLGOREr75QOEqXkgOEw82vihG0JfGLjRlxb-GiYuqJDWeLbUzLE2SXM9LfWsVOMCKllDUCMWRQmhcDCoh0tJcAw=w2400",
          title: "Jeep 11.20.2020",
        },
      ],
      column2_1: [
        {
          key: "A0xO5peDfaAyL1UTygdZFkKl78rnfRpPm9MYEaKMxFZl3PojAMmWiqh2nocjwxMUQbrB_Z9OEDvr2QlUBZ3UmiImJ9qZSxPpgOIn73HDUQtAYBJg08O9E2J7JhOdXy5Xqevuo7u8Tw=w2400",
          title: "Wenatchee (2) 8.25.2021",
        },
        {
          key: "KU7I6esn-4Wq1DNOSiLVKxEfxd4hocwBqQC4wVtKZimlw8VbT7MXJ1a7zx3LdZgjvTPF30p4kt0l7NStRX4l__SbStrNgGg_wlBMgAfQWSyftCx9mmBE6MemRrvDky6EIyqUegcVwQ=w2400",
          title: "Leavenworth (2) 10.26.2020",
        },
        {
          key: "RWjZHouC3IIFnaG4f3f-1YckO2g6CdjevQOc92b0SOzl0PAsa4mKt5NogA8dHRBqY35ya8Rxl_8CH5kWZ_uAKa27tNak6IdFI1wY1L8yvGBYXMxeJhL2a8oUxaTyqP7NXa4IuVoM4Q=w2400",
          title: "Wenatchee 8.25.2021",
        },
        {
          key: "iaHvT0yMr-hC75qgZlkbzXMI8xBPE7_XbpSYUmPojomT290A8iVCuUTZoj4Bhoq1ktrhMMvmmUuOY6HfmThC_eKdsIrUhzwsJKfDT8_WoEhOFS1rcOU9SczeIncjuoJCDhhLzCag-Q=w2400",
          title: "Adna Baseball (2) 3.22.2022",
        },
        {
          key: "OT5JuBPbGv23mKaK6gwJU9_tji34Hdorv3flt3VR3ZVVBLbnuq8xDZZ5uvsmxXlY1vo9rlqy0PIzcIGOTVuDdtLJ-0QDUhZwaHt0PFnYbTzlZGYxdQqzCqjPF4B0nT0CqBgKK5gb9Q=w2400",
          title: "Turnbull 4.14.2021",
        },
      ],
      column2_2: [
        {
          key: "MwF6_M0U0UmFItV-QP26RakFRLgfqX-lmN1XLUQYSBecSj0YPTk3Lei7t8hTB9hkIzscTiWeZbvT6UkV_qKfu3DxLq2QB4FC_KT4Hcuskh-LsMQUKa0t3Rn_9La2kKtTISS-Qknu_A=w2400",
          title: "Home (3) 12.27.2021",
        },

        {
          key: "9h7hNyJ7QAOlesVqJC65hPoNQiFhfN_WjKo45Vcfup8R2y1J0W3cle2laK0mR70c0v7C_e2_QqBZFn0wRxq29Faoeve5DXnFSuImw3a2cvXy5XDuWNmx6s91zNkBTZfRkfR2RD25ag=w2400",
          title: "Jeep 10.7.2021",
        },
        {
          key: "MzCGY81WMPLq-oGLfozkt8Tm84v54ShxcYIlcLfShnl-ri8pbfUD1YvnB_dDmRKPVoKWOH6LfB_9XphTXeEhCL-NZPaO0lLiDV6QtcXePou_TqnngToJe6hcRQrdkTLIBWSOk8vyDA=w2400",
          title: "Adna Baseball (3) 3.22.2022",
        },
        {
          key: "xVIZYk5snH7YjTSLIWqh4ifjW3k0JeOdX5QIbC9J-MXHOuy0l5-1VrQ4KLML-uFaeqzx8gAjNqnLSZXJQWoBzFIx8o6AlM_SueoS1bRxbXq29neoLF06jq5JeIHEtOBhbmBV0VcoWQ=w2400",
          title: "Meta Type (3) 8.2019",
        },
        {
          key: "htTFJxZtxqFyTPPoS3cU-y7zWOyRGWmDm9s4mHm3oZ5fujgITLm-eg16T4jvdXodOSmq3xu0WrXgfGQ98DPdYCeMYXaeIFBwgFj7oUH7gwuM1TkTwImQmuEayfMrfZaOhJIdo68h2A=w2400",
          title: "Camping 8.2021",
        },
        {
          key: "R5yog_71Uhp65aC9IoHP9weijKJ8PrTyllWDCTIztdNq5GP8asFc_EWuGpo3N52OIM9Uwd-UQmUTklNDXGnCw5Fra_eBJ5Axlq1ik7uXsn7kRDB7TEIBr9NZXkwN4upgxFIuaPACTQ=w2400",
          title: "Wenatchee (3) 8.25.2021",
        },
        {
          key: "CnHw9nyRAXE9VifxW0nvBMJVbm3_0fQm_EcIA-_nwYPF0mY3euIg2HI0OJj-7p07YO1Vvq-daZ2Oo3XgkYGTiiyHTvKz_X91KpiMBWgps7vL1pcUYnwagH-dBTO3F_HhsUgN_MpVrA=w2400",
          title: "Ellis (1) 9.22.2021",
        },
      ],
      column3_1: [
        {
          key: "C5M7HVwngGAOjwvgJdNzsOyfz5cC1kbiuOKYpBHZ2ja_xh7EO4XKjUdqwETtsB0pCfyxoMlZSIWzWs0NbloIAyPBVGzUBAQ4IwBoWz2s7t9Af4V8jJJd3ZOnYUOl_aFYl7DyVS2jvg=w2400",
          title: "Home (1) 12.27.2021",
        },
        {
          key: "_B0V2VwsEiOgNcRUz-R5Z-FcgQ_6abr7iCON5nXTm8ePQzpDs5wT6c0qv8MQ3Vka37C8habn8TtJpuUxMfpP-sEKmGB19Yy_BFw9Z-Mc7rFSjsxB_AozYGXsZruFasrvrgNBD_eUJQ=w2400",
          title: "Ellis (2) 9.22.2021",
        },
      ],
      column3_2: [
        {
          key: "667RQoHXdcffcm38WEZgvusFa6xAW5CDKSMcfv-Ut7zP41nKySnxfZ54pA74EkosJyM39Q7HyQDipVNT7tHDXM7KKQHy3kkxj8U3WuiGqaBzz2aSdJN0JaBBwdXCji6T9E3gDj_F5Q=w2400",
          title: "Bow 9.20.2021",
        },
        {
          key: "pdYdGTnuenaUSAQcAppyWxSnPiZyousc5hAZRhWPnGyJepspXq232ZC3Iy7IgdEHrRP4iuvW8XgiPsE8eofJ33BTwO2QYWG1ijn9b6q-Du6tH-jaEs20LybOyX7HZ2LuoKhbaap0cA=w2400",
          title: "Downtown (2) 7.2021",
        },
        {
          key: "RVOf8eY41V32S6yNh5iaFGsRUaC_sVXzXJESNpNg5ghMRIwjGA6Bxl3NEzSpWYsYuODopk0bTY5fTl_FxN6ADrptYuhJSL_gs7YggKIr-mhmsM0Y6m1z5am4UlWey9mLQJReJ-cmaQ=w2400",
          title: "Downtown (1) 7.2021",
        },
        {
          key: "BF0YLXVBYkbdPo8jorPSkKaMWvjS0guYymOeJaYF-zwMZPpbu1aq6RomoYwysaZ8OJJSu0xbnFaTdj1QF5FKnDt_CO3som1mSjcVHKUhxg-YxMOPFameVx6Vcl8kTBEvN3cjnZrpqw=w2400",
          title: "Downtown (3) 7.2021",
        },
        {
          key: "aEnoxdtuI9GfnKzHqAPcHt_iG44RU6C7r43ERrxpN5huAnlGRRD1_UEcMNNx7MhyUkksqcIRpUkuNNFloCXeZGrnthvxbRNdU610ebQfODlDel54kyzT1nE3P_aAp8KuycUBS-vQ0w=w2400",
          title: "Mountian 4.17.2021",
        },
        {
          key: "CkkZlWPZRanxFOP9O0Ht0igsaC2vujC1Z2xPwr532MUiTEzhEdSovF6jVsDmavtBbbB4W9yXCqPKx-SsE7gGlTxVMhpxdld5xYMg2nwY_7nYLt7siwtOz9sqhZgGYBS29KPDMhrtww=w2400",
          title: "Moses Lake 3.2021",
        },
      ],
      column3_3: [
        {
          key: "DLQFMq-OteB4j9J_BHOjQlXYCENZCY6aOKPmg4a8ihrQKDnfb1TH5f8rmkjYNIrqHfVM0IKqj-Fj77ZWzVYdcd6hcktVTeh8ppBM2BQNcKs9_fp_vrCr-MPmk1rqwgAT05ii6sTcog=w2400",
          title: "Meta Type (4) 8.2019",
        },
        {
          key: "O1PTyblILzU9asWrBx9iRdXR_XEIBUKTRXgZpGyQi4KQPlXIfxrFuX45IrAo6xnHxBbQx0k1K1Mlfmm491O3I3XoBFD-k6Ha3mgI14hUgOrxgoE4o8ywwlh99Gjtu1IVqrLUf9ZVZg=w2400",
          title: "Leavenworth (1) 10.26.2020",
        },
        {
          key: "QDiXHDGSWVsK-ALCHfrU9YsePlcpn55vH3hDoL1EaVbFaCCAvo2xO7q8GbO5po7dxTE5L4DB7nlSv4pEbYL-R37K5Lntd4xp1HtUpn8Qa5I9tC1X9hmSRRQ4O93xR7UKgXDBanFR3g=w2400",
          title: "Cheney Cross 6.2021",
        },
      ],
      column4_1: [
        {
          key: "CqC-Vxe_wcmQj0OuP5ia6sMAJ_-o_MCjE7suOruhLWAWs32PAZxqoy2Mu9nWqsAGFTH5MTmrEQSvhvEwKrb1xTpMEqIX06b9eOtHFQdz4KwV1zsw1CYipx-vYyhby71OmX9w_Q2l-Q=w2400",
          title: "Cheney 9.2022",
        },
        {
          key: "zljkQSTvB9BnEct2XfJeqLHhtGJpOgoGuCsvQJvvaVqot7xyT9Wr5FMWM2VfJmB2tO3NtsSiWRQp4z7xNsoz6FZZQvLeialNvc1D5EPN9LTwz3OZOq7jxf4QeD4hHCn4HaH6sCR4DA=w2400",
          title: "Hot Air 7.2019",
        },
        {
          key: "xh1jUhYG9pAc5hAmfPTFw7ppZKAFdaNQz8VtwkFy24VYJbTloqwSQ9PYjBzve5_YF11RK4fWsUTivFBdvycTtD3GUGhGOpbQzRHaS2iAjKuI5a1ePNSfNz9hbab_2lbSL-XV1tgAMg=w2400",
          title: "Downtown (4) 7.2021",
        },
      ],
      column4_2: [
        {
          key: "rvnSKsLLBJ_mRSG_NE3TmzbUNz59xANh2x-jbI-uXdXIVy3EAHqYT_3tYrjFUrnz3-v_-ACCsudRCibselztjlRQWzovVyPLeG7Kqf6wenKeLkzjbDBB8ineE5B5xg55kTCTA65mNg=w2400",
          title: "Lake Wenatchee 3.28.2021",
        },
        {
          key: "z17e-YK5H-TqHaJICtBLOjR-HY5X9Vz2Wk7Mx6gFWB-u69ezg6tdn-GVlB4r7qhbMVymRxg23k2jnC8xThgWujnnduWuwFaiYkC0ckvmrcPa67iNFqZ__TxAQYi1OAUBDo9xLoQBHA=w2400",
          title: "Bus 10.25.2021",
        },
        {
          key: "vuHSKCzCxfsyDj2XJPKrv5byW4ddcQ5VvTgrwrHM7TXKQc8R5FB-FMNh8B98tNerDtdITp51wAjjypLTithtOr8_we1zFPBEgf-Gmi6GBY8Zs2UcBHnydZCEsHCruGPEyljoXel4vg=w2400",
          title: "Cheney Sunset 4.2021",
        },
        {
          key: "WqMBHBTvMJ8Xq2K87kFt3Ph9tHE4o42EKX86jUbH_KnsI_rDUg3WrLxw1S-4Fqmb3QNK_OmaRvgVzHbxyKuVtuVq5BkX-Uz-FI8PRM16cz7zEqS0T0HLQe9xRLOyYc6Cow2WUYv76g=w2400",
          title: "LC Football 3.2021",
        },
        {
          key: "ORIdh0fzPVAlOCLdPwfHzMxEmyoBwkObOl1LGxewq9g7pjq3o5F7Uet7tTo690JC7xQXrJXBNzKsgpy0oWaOjAvvESlkUUzQMrKUuOIlyzuiLJrVasLzXRlr6F-DniWoQier7lCh5A=w2400",
          title: "Views 4.28.2022",
        },
        {
          key: "mAWFRKbVJdGnSeiW2PP-sXBoaufapl1G8uo6J7L1AtxqmvOhEWAwLIQESJ56wR4Bxw2FVOYU3CGuNBNkw9dkD7OzBMXVWhptJGJRb8OahJN93NW6uX_ofIcNzdG2fUCpA9_RSORDvQ=w2400",
          title: "Cheney Sun 10.28.2021",
        },
        {
          key: "4DyrGadKU0RVKwOrBRkb0zo1mvq8cE4v6zbL3-RWlkJ94z4lWL3JMwE_L-NG3NwZ89gZNBhlm6wYpU4La04aCS10thXaoBeLGbW4oJafqin79TdPElIZkhn9OOXHxQRikTE3OawDVA=w2400",
          title: "Meta Type (1) 8.2019",
        },
        {
          key: "wBPyqh7OmbGvKZG393QNx4gIJtx887ci7D1nYoOqlqw98NwJRu__8n15jivxYJPPe5ciDfGtEhZ2f2FOrLvW_aWhWXiQ_ViuFwY-j15xxggpaFCaN5_94Nft4VultVujMnTx72NqvA=w2400",
          title: "Home (2) 12.27.2021",
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

/* Row of columns that sits next to each other */
.row {
  display: flex;
  flex-wrap: wrap;
  padding: 0 4px;
  padding-bottom: 5rem;
}

.column {
  flex: 25%;
  max-width: 25%;
  padding: 0 4px;
}

.column img,
.column iframe {
  margin-top: 8px;
  vertical-align: middle;
  width: 100%;
  transition-duration: 0.5s;
}

/*videos*/
.video {
  position: relative;
  padding-bottom: 66.66666%; /* 3:2, for an aspect ratio of 1:1 change to this value to 100% */
  margin-bottom: 8px;
}
.video iframe {
  margin-top: 8px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
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
    flex: 50%;
    max-width: 50%;
  }
}
</style>
