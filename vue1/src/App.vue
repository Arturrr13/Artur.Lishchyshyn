<template>
    <site-header />
     <router-view class="router-view" />
    <site-footer />
</template>
<script>
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'
  
export default {
    components: {
        SiteHeader,
        SiteFooter
    }
}
</script>

<style>
    .router-view {
        animation: pageAnimation 1.3s linear both;
    }

    @keyframes pageAnimation {
      0% {opacity: 0; position: relative; right: -100%;}
      100% {opacity: 1; position: relative; right: 0;}
    }
</style>


