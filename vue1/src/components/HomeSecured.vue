<template>
    <section class="home-secured section__wrapper">
        <h1>Audited <h2>& Secured by</h2></h1>
        <div class="wrapper__secured">
            <div class="TechReat">
                <img src="../assets/image/secured/TechReat.png" alt="">
                <p>TechReat</p>
            </div>
            <div class="CoinTool">
                <img src="../assets/image/secured/CoinTool.png" alt="">
                <p>CoinTool</p>
            </div>
        </div>
            <!-- <template>
              <img v-lazy="assets/image/secured/CoinTool" />
            </template>
            <img v-lazy="{ src: '/assets/image/secured/CoinTool.png' }"/> -->
    </section>
</template>

<script>
export default {
    name: 'HomeSecured'
}
</script>

<style lang="scss">
    .home-secured{
        margin-top: 219px;
    }
    .wrapper__secured{
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 182px;
        margin-top: 138px;
        p{
            font-weight: 500;
            font-size: 36px;
            line-height: 120%;
            letter-spacing: 0.01em;
            text-align: center;
            margin-top: 27px;
            text-transform: capitalize;
            color: #FFFFFF;
        }
    }
</style>