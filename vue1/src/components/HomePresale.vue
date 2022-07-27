<template>
    <section class="home-presale"> 
        <div class="text-box">
            <h1>
                Presale  
            </h1>
            <span>
                UmaChitFund is a blockchain-based Chit Industry built on Defi to innovate & reform the ways of the Decentralized Monetary System.
            </span>
            <router-link title="Go to presale" rel="nofollow" to="/presale" class="button btn__style" id="click">
                Join Presale whitelist
                <i v-for="index in 6" :key="index" :class="`circle--${index}`"></i>
            </router-link>
        </div> 
        <div class="img">
            <img src="../assets/image/2.png" alt="">
        </div>  
    </section>
</template>

<script>
export default {
    name: 'HomePresale'
}
</script>