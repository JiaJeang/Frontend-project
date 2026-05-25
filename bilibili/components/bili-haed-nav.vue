<script setup>
</script>

<template>
  <div class="box">
    <img src="../assets/banner.avif" alt="" />
    <a href="https://www.bilibili.com/?spm_id_from=333.1007.0.0" class="logo">
        <img alt="B站 b站" width="162" height="78" src="../assets/second.png">
    </a>
  </div>
</template>

<style scoped lang="less">
.box {
  position: relative;
  height: 155px;
  border-radius: 6px 6px 0 0;
  overflow: hidden;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  min-width: 1000px;
  min-height: 155px;
  height: 9.375vw;
  max-height: 240px;
  background-color: #e3e5e7;
  background-position: center 0;
  background-size: cover;
  background-repeat: no-repeat;
  img {
    height: 100%;
  }
  .logo {
    position: absolute;
    top: 0;
    left: 0;
  }
}
</style>