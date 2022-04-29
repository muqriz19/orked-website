<template>
  <div class="fragrancesPageContainer">
    <div class="allPerfumes">
      <div class="orkedHeader headerContainer">
        <p class="headerText">Orked EDP 50ml</p>
      </div>
      <img
        src="@/assets/images/fragrances/all-orked.jpg"
        alt="All Orked EDP 50ML"
        title="All Orked EDP 50ML"
        class="allPerfumesImage"
      />
    </div>

    <div class="singlePerfumesContainer">
      <div class="perfumeContainerWrapper center-item">
        <div class="perfumeContainer gridBoxContainer-3">
          <div
            class="perfumes gridBox"
            v-for="perfume in allPerfumes"
            :key="perfume.id"
          >
            <router-link :to="'/fragrances/' + perfume.id">
              <img
                :src="
                  require('@/assets/images/fragrances/' +
                    perfume.image.folder +
                    '/0.jpg')
                "
                :alt="perfume.name"
                :title="perfume.name"
                class="perfumeImage"
              />

              <div class="perfumeDetails">
                <p class="perfumeName textHeader">{{ perfume.name }}</p>
                <p class="perfumeDescription">{{ perfume.description }}</p>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import { perfumes } from "../shared/orked";
import { formatText } from "../shared/ui";

export default defineComponent({
  name: "FragrancesPage",
  setup() {
    const allPerfumes = reactive(perfumes);

    return {
      allPerfumes,
      formatText,
    };
  },
});
</script>

<style lang="less" scoped>
.fragrancesPageContainer {
  height: inherit;
  padding: 10px;
  .allPerfumes {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    .allPerfumesImage {
      height: 500px;
      width: 500px;
    }
  }
  .singlePerfumesContainer {
    .perfumeContainerWrapper {
      .perfumeContainer {
        a {
          color: unset;

          .perfumes {
            width: 350px;
            .perfumeImage {
              height: 350px;
            }

            &:hover {
              cursor: pointer;
            }

            .perfumeDetails {
              padding: 5px;
            }
          }
        }
      }
    }
  }
}

@media screen and (max-width: 800px) {
  .fragrancesPageContainer {
    .singlePerfumesContainer {
      .perfumeContainerWrapper {
        .perfumeContainer {
          grid-template-columns: repeat(1, 1fr);
        }
      }
    }
  }
}

@media screen and (min-width: 800px) and (max-width: 1024px) {
  .fragrancesPageContainer {
    .singlePerfumesContainer {
      .perfumeContainerWrapper {
        .perfumeContainer {
          grid-template-columns: repeat(2, 1fr);
        }
      }
    }
  }
}
</style>
