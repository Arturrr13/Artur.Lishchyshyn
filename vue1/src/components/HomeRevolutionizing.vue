<template>
    <section class="home-revolutionizing">
        <div class="text-box section__wrapper">
            <h2>
                Revolutionizing
            </h2>
            <h1>
                Saving & borrowing  
            </h1>
            <span>
                Uma.Fi is a decentralized finance-based startup built to innovate and reform the native ways of the monetary system.
            </span>
            <a title="Go to documentation" rel="nofollow" id="click" class="button btn__style" href="../assets/doc/whitepaper_decentralized-finance.pdf" download>
                Read Documentation
                <i v-for="index in 6" :key="index" :class="`circle--${index}`"></i>
            </a>
            <span  class="subtext">
                Become early bird and receive up to 7.5% bonus tokens by joining our Whitelist
            </span>
        </div>
        <div class="img img__blur">
            <!-- <img class="lazy" src="data:image/gif;base64,R0lGODlhAwACAIAAAP///wAAACH5BAEAAAEALAAAAAADAAIAAAICjF8AOw==" data-src="./assets/images/jpg/1.jpg" alt=""> -->
            <img src="../assets/image/1.png" alt="">
        </div>    
    </section>
</template>

<script>
export default {
    name: 'HomeRevolutionizing'
}
</script>