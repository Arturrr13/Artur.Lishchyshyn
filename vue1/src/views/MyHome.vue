<template>
  <div class="home">
    <home-revolutionizing />
    <home-presale />
    <home-why />
    <home-benefits />
  </div>
</template>


<script>
import HomeRevolutionizing from '@/components/HomeRevolutionizing.vue'
import HomePresale from '@/components/HomePresale.vue'
import HomeWhy from '@/components/HomeWhy.vue'
import HomeBenefits from '@/components/HomeBenefits.vue'

export default {
  name: 'MyHome',
  components: {
    HomeRevolutionizing,
    HomePresale,
    HomeWhy,
    HomeBenefits
  }
}
</script>
