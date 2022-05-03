<template>
  <div class="singleFragranceBox">
    <div class="image-section">
      <div class="top-section">
        <h1>{{ theItem.name }}</h1>
      </div>

      <img
        class="slide"
        :src="
          require('@/assets/images/fragrances/' +
            theItemImage +
            numberImage +
            '.jpg')
        "
        :alt="theItem.name"
      />
    </div>

    <div class="meta-section">
      <div class="description">
        <p>
          {{ theItem.description }}
        </p>
      </div>

      <div class="keynotes">
        <p class="keynote-main-header">Keynotes</p>

        <div class="keynotes-wrappers">
          <div class="key top">
            <div class="keynote-header">
              <span>Top</span>
            </div>

            <div class="notes">
              <span v-for="note in theItem.keynotes.top" :key="note">{{
                note
              }}</span>
            </div>
          </div>

          <div class="key mid">
            <div class="keynote-header">
              <span>Mid</span>
            </div>

            <div class="notes">
              <span v-for="note in theItem.keynotes.mid" :key="note">{{
                note
              }}</span>
            </div>
          </div>

          <div class="key base">
            <div class="keynote-header">
              <span>Base</span>
            </div>

            <div class="notes">
              <span v-for="note in theItem.keynotes.base" :key="note">{{
                note
              }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, onBeforeMount, onMounted, onUnmounted, computed } from "vue";
import { perfumes } from "@/shared/orked";
import { allOtherProducts } from "@/shared/otherproducts";
import { random } from "../shared/utils";

export default {
  props: ["id"],
  setup(props: any) {
    let theItem = ref();
    let intervalState: number;
    let theItemImage = ref("");
    let numberImage = ref(0);

    onBeforeMount(() => {
      theItem.value = returnItem(props.id);

      theItemImage.value = theItem.value.image.folder + "/";
    });

    onMounted(() => {
      intervalState = setInterval(() => {
        const currentRandomNumber = random(1, 4);

        if (currentRandomNumber !== numberImage.value) {
          numberImage.value = currentRandomNumber;
        }
      }, 7000);
    });

    onUnmounted(() => {
      clearInterval(intervalState);
    });

    function returnItem(id: any) {
      const items = [...perfumes, ...allOtherProducts];
      let theItem: any;

      for (let p = 0; p < items.length; p++) {
        if (items[p].id === id) {
          theItem = items[p];
          break;
        }
      }

      return theItem;
    }

    return {
      theItem,
      theItemImage,
      numberImage,
    };
  },
};
</script>

<style lang="less" scoped>
.singleFragranceBox {
  height: 100vh;
  width: 100vw;
  .image-section {
    .top-section {
      background-color: rgba(0, 0, 0, 0.7);
      width: 100%;
      padding: 10px;
      letter-spacing: 10px;
      color: #fff;
      text-align: center;
      font-weight: 700;
      font-size: 30px;
    }
  }

  .meta-section {
    padding: 10px;
    width: 100%;
    display: flex;
    flex-direction: column;

    .description {
      text-align: center;
      font-size: 20px;
    }

    .keynotes {
      .keynote-main-header {
        font-size: 25px;
        text-align: center;
        padding: 0;
      }

      .keynotes-wrappers {
        display: grid;
        text-align: center;

        .key {
          margin: 0 10px;
          background-color: #cccccc;
          color: #3a3845;
          min-height: 200px;
        }

        .keynote-header {
          font-weight: 700;
          letter-spacing: 2px;
          border-bottom: 5px solid #fff;
          padding: 10px 0px;
          color: #3a3845;
        }

        .notes {
          display: flex;
          flex-direction: column;
          padding: 10px;
        }
      }
    }
  }
}

@media screen and (min-width: 300px) {
  .keynotes {
    margin-top: 1rem;
  }

  .keynotes-wrappers {
    grid-template-columns: 1fr;
    row-gap: 1rem;
  }
}

@media screen and (min-width: 450px) {
  .keynotes-wrappers {
    grid-template-columns: 1fr 1fr 1fr;
  }
}

@media screen and (min-width: 1024px) {
  .singleFragranceBox {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    height: 50%;

    .keynotes {
      margin-top: auto;
    }
  }
}
</style>
