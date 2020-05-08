<template>
  <div>
    <bounce-loader :loading="isLoading" :color="'#068d391'" :size="100"></bounce-loader>
    <px-assets-table v-if="!isLoading" class="flex items-center" :assets="assets"/>
  </div>
</template>

<script>
import api from '@/api'
import { BounceLoader } from '@saeris/vue-spinners'
import PxAssetsTable from '@/components/PxAssetsTable'
export default {
  name: 'Home',
  components: {
    PxAssetsTable,
    BounceLoader
  },
  data () {
    return {
      assets: [],
      isLoading: false
    }
  },
  created () {
    this.isLoading = true
    api.getAssets()
      .then(assets => (this.assets = assets))
      .finally(() => (this.isLoading = false))
  }
}
</script>
