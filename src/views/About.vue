<template>
  <div class="aboutPageContainer">
    <div class="columns">
      <div
        class="column text-content-box"
        v-for="text of textContents"
        :key="text.heading"
      >
        <p class="heading">{{ text.heading }}</p>
        <img
          class="image"
          :src="text.image"
          :alt="text.heading"
          :title="text.heading"
        />
        <p class="content">{{ text.content }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { aboutUsTextContent } from "../shared/textual-content";

export default defineComponent({
  name: "aboutPage",
  setup() {
    const textContents = ref(aboutUsTextContent);

    return {
      textContents,
    };
  },
});
</script>

<style lang="less" scoped>
.aboutPageContainer {
  padding: 10px;
  height: inherit;
  .text-content-box {
    padding: 10px;
    width: 500px;

    .heading {
      text-align: center;
      font-size: 2em;
      letter-spacing: 1px;
      font-weight: 700;
    }

    .image {
      width: 250px;
      height: 250px;
      margin: 0 auto;
    }

    .content {
      text-align: justify;
      letter-spacing: 0.5px;
      padding: 15px 0px 10px 0;
    }
  }
}

@media screen and (max-width: 769px) {
  .aboutPageContainer {
    .text-content-box {
      width: 250px;
      margin: 0 auto;
      .heading {
        font-size: 1.5em;
      }
    }
  }
}

@media screen and (min-width: 769px) and (max-width: 1024px) {
  .aboutPageContainer {
    .text-content-box {
      margin: 0 auto;
      .heading {
        font-size: 1.1em;
      }
    }
  }
}
</style>
