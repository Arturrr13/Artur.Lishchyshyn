<template>
  <div class="about">
    <div class="blur__on__responsive"></div>
    <about-content />
  </div>
</template>


<script>
import AboutContent from '@/components/AboutContent.vue'

export default {
  name: 'MyAbout',
  components: {
    AboutContent,
  }
}
</script>