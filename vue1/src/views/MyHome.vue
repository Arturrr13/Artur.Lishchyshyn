<template>
    <div class="home">
        <div class="blur__on__responsive"></div>
        <home-revolutionizing />
        <home-presale />
        <home-why />
        <home-benefits />
        <home-roadmap />
        <home-team />
        <home-secured />
        <home-partnerships />
    </div>
</template>


<script>
import HomeRevolutionizing from '@/components/HomeRevolutionizing.vue'
import HomePresale from '@/components/HomePresale.vue'
import HomeWhy from '@/components/HomeWhy.vue'
import HomeBenefits from '@/components/HomeBenefits.vue'
import HomeRoadmap from '@/components/HomeRoadmap.vue'
import HomeTeam from '@/components/HomeTeam.vue'
import HomeSecured from '@/components/HomeSecured.vue'
import HomePartnerships from '@/components/HomePartnerships.vue'

export default {
    name: 'MyHome',
    components: {
        HomeRevolutionizing,
        HomePresale,
        HomeWhy,
        HomeBenefits,
        HomeRoadmap,
        HomeTeam,
        HomeSecured,
        HomePartnerships
    }
}
</script>
