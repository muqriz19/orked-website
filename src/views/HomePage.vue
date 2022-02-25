<template>
  <div class="homePageContainer">
    <div class="orkedContainer">
      <img
        src="@/assets/images/main/orked-logo.png"
        alt="Orked Logo"
        title="Orked Logo"
        class="orkedLogo"
      />

      <div class="orkedTagLine">
        <p class="tagLine">
          Bringing nature closer to you with the scents of fresh chypre, fruity,
          floral and woody.
        </p>

        <a class="discoverMoreLink">Discover More</a>
      </div>
    </div>

    <div class="linkBoxContainer">
      <div v-for="link of links" :key="link.title" class="linkBoxWrapper">
        <router-link :to="link.path">
          <div
            class="linkBox mt-2 mb-2 mr-2 ml-2"
            :style="spitCSSImageStyle(link.image)"
          >
            <p class="linkText">{{ link.title }}</p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomeView",
  setup() {
    const links = [
      {
        title: "Fragrances",
        image: require("@/assets/images/fragrances/all-orked.jpg"),
        path: "/fragrances",
      },
      {
        title: "Giftsets",
        image: require("@/assets/images/misc/orked-giftset.jpg"),
        path: "/otherproducts",
      },
      {
        title: "The Brand",
        image: require("@/assets/images/misc/lavendar.jpg"),
        path: "/about",
      },
    ];

    function spitCSSImageStyle(linkImage: string) {
      return {
        background: `no-repeat center url(${linkImage})`,
        "background-size": "100% 100%",
      };
    }

    return {
      links,
      spitCSSImageStyle,
    };
  },
});
</script>

<style lang="less" scoped>
.homePageContainer {
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: @white;
  height: inherit;

  .orkedContainer {
    background: no-repeat url("@/assets/images/main/orked-bg.png");
    background-size: 100% 100%;
    height: 450px;
    width: 700px;
    margin: 25px;

    .orkedLogo {
      height: 30%;
      width: 30%;
      position: relative;
      top: 25%;
      left: 10%;
    }

    .orkedTagLine {
      position: relative;
      top: 10%;
      right: 5%;
      padding: 10px;
      background-color: @white;
      max-width: 300px;
      height: 350px;
      float: right;

      display: flex;
      flex-direction: column;

      .tagLine {
        font-size: 1.5em;
        text-align: start;
        flex: 1;
      }

      .discoverMoreLink {
        text-align: end;
        letter-spacing: 0.5px;
        color: @black;
        font-weight: 600;
        transition: ease-out 0.2s;

        &:hover {
          color: @hover-link;
          transition: ease-in 0.2s;
        }
      }
    }
  }

  .linkBoxContainer {
    display: flex;

    .linkBox {
      width: 300px;
      height: 300px;

      display: flex;
      flex-direction: column-reverse;

      transition: ease-in 0.1s;

      .blendLinkBox();

      .linkText {
        display: inline;
        font-size: 1.5em;
        text-align: center;
        padding: 5px;
        color: @white;
        text-shadow: 1px 1px 15px @black;
        letter-spacing: 0.5px;
        transition: ease-in-out 0.2s;
      }
    }
  }
}

// media queries
@media screen and (max-width: 300px) {
  .homePageContainer {
    .orkedContainer {
      .orkedLogo {
        top: 5%;
        left: 33%;
      }

      .orkedTagLine {
        height: 150px;
        max-width: 250px;
        right: 33%;
        top: 50%;
        .tagLine {
          font-size: 0.9em;
        }
      }
    }

    .linkBoxContainer {
      flex-direction: column;

      .linkBox {
        height: 145px;
        width: 250px;
      }
    }
  }
}

@media screen and (min-width: 300px) and (max-width: 500px) {
  .homePageContainer {
    .linkBoxContainer {
      flex-direction: column;

      .linkBox {
        height: 150px;
        width: 250px;
      }
    }
  }
}

@media screen and (min-width: 500px) and (max-width: 700px) {
  .homePageContainer {
    .linkBoxContainer {
      flex-direction: column;

      .linkBox {
        height: 150px;
        width: 250px;
      }
    }
  }
}

@media screen and (min-width: 700px) and (max-width: 1024px) {
  .homePageContainer {
    .linkBoxContainer {
      flex-wrap: wrap;
      justify-content: center;
      .linkBox {
        height: 150px;
        width: 250px;
      }
    }
  }
}

@media screen and (min-width: 300px) and (max-width: 1024px) {
  .homePageContainer {
    .orkedContainer {
      .orkedLogo {
        top: 5%;
        left: 33%;
      }

      .orkedTagLine {
        height: 150px;
        max-width: 250px;
        right: 33%;
        top: 50%;
        .tagLine {
          font-size: 0.9em;
        }
      }
    }

    .linkBoxContainer {
      flex-wrap: wrap;
      justify-content: center;
      .linkBox {
        height: 150px;
        width: 250px;
      }
    }
  }
}
</style>
