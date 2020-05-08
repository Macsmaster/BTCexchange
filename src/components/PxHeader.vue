<template>
  <div class="">
    <header class="shadow-w-screen">
      <nav>
        <nav
          class="flex items-center justify-between flex-wrap bg-green-400 p-6"
        >
          <div class="flex items-center flex-shrink-0 text-white mr-6 ">
          <router-link to="/">  <span class="font-semibold text-xl tracking-tight"
              >BTCexchange</span
            >
            </router-link>
          </div>
        </nav>
        <div
          class="hidden sm:block w-full block flex-grow lg:flex lg:items-center lg:w-auto"
        >
          <div class="text-sm lg:flex-grow">
            <router-link :to="l.to" v-for="l in links" :key="l.title"
            class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            {{l.title}}</router-link>
          </div>
        </div>
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  name: 'PxHeader',
  data: () => {
    return {
      title: 'title'
    }
  },
  props: {
    links: {
      type: Array,
      default: () => {
      }
    }
  }
}
</script>
