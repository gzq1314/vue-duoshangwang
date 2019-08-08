<template>
    <div>
        <van-stepper v-model="value" input-width="45px" />
    </div>
</template>
<script>
export default {
  data() {
    return {
      value: 1
    };
  }
};
</script>
