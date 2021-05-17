<template>
  <div class="wrap-app blue-grey lighten-5">
    <router-view />
  </div>
</template>

<script>
// import messages from '@/utils/messages'

export default {
  computed: {
    error() {
      return this.$store.getters.error
    }
  },
  watch: {
    // error(fbError) {
    //   this.$error(messages[fbError.code] || 'Что-то пошло не так')
    // }
  }
}
</script>
