<template>
  <div class="faqPageContainer m-5">
    <div
      class="faq-container mt-5 mb-5"
      v-for="(faq, index) of faqs"
      :key="faq.question"
    >
      <p class="question">{{ index + 1 }} - {{ faq.question }}</p>
      <p class="answer">{{ faq.answer }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { allFAQs } from "../shared/faq";

export default defineComponent({
  setup() {
    const faqs = ref(allFAQs);
    return {
      faqs,
    };
  },
});
</script>

<style lang="less" scoped>
.faqPageContainer {
  height: inherit;

  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  .faq-container {
    padding: 5px;

    .question {
      letter-spacing: 1px;
      font-size: 1.5em;
    }

    .answer {
      letter-spacing: 0.5px;
      font-size: 1em;
    }
  }
}

@media screen and (max-width: 350px) {
  .faqPageContainer {
    margin: unset !important;
  }
}
</style>
