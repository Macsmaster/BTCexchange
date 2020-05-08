<template>
  <button @click="click" class="bg-trasparent">
      <p v-show="!isLoading">
           <slot></slot>
      </p>
    <beat-loader :loading= "isLoading" :color="'#68d391'" :size="8" />
  </button>
</template>

<script>
export default {
  name: 'PxButton',
  props: {
    isLoading: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    click () {
      this.$emit('click')
    }
  }
}
</script>
