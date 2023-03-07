<template>
  <section class="headerbar">
    <section class="left">
      <div class="coll" @click="$emit('on-coll-change')">
        <Icon type="md-menu" size="26" class="sider-trigger-a" />
      </div>
      <div class="breadcrumb">
        <BreadcrumbItem to="">主页</BreadcrumbItem>
      </div>
    </section>
    <div class="user">
      <slot></slot>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.headerbar {
  display: flex;
  justify-content: space-between;

  .left {
    display: flex;

    .coll {
      cursor: pointer;
      transform: translateY(2.6px);
    }

    .breadcrumb {
      margin-left: 20px;
      font-weight: 600;
      font-size: 16px;
    }
  }
}
</style>