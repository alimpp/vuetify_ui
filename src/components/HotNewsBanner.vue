<template>
  <div class="hot-news-banner bg-red">
    <div class="news-banner">
      <div class="banner"
        >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia repellat sed
        div saepe tenetur molestias
      </div>
      <div class="banner"
        >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia repellat sed
        sint saepe tenetur molestias
      </div>
      <div class="banner"
        >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia repellat sed
        sint saepe tenetur molestias
      </div>
      <div class="banner"
        >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia repellat sed
        sint saepe tenetur molestias
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.hot-news-banner {
  width: 100%;
  overflow: hidden;
  .news-banner {
    display: flex;
  }
  .banner{
    box-sizing: border-box;
    padding: 10px;
    text-align: center;
    flex-shrink: 0;
    animation: banner 30s infinite;
  }
}

@keyframes banner {
  0% {
    transform: translate3d(100%, 0, 0);
  }
  100% {
    transform: translate3d(-400%, 0, 0);
  }
}
</style>
