<template>
    <section class="home-why">
            <h2>
                Why
            </h2>
            <h1>
                UMA.fi? 
            </h1>
            <span>
                Backed by Blockchain Technology, UmaChitFund integrates the Chit Events with Staking Protocols to maximize the benefits for the lenders while offering low/zero prime rates to the borrowers (or even making them eligible to yield interest (profit) on their borrowing while completely nullifying the prime rate).
            </span>
            <div class="cards">
                <div class="card" v-for="i in 3" :key="i">
                    <div class="svg-box">
                        <img src="../assets/image/Group.svg" alt="">
                    </div>
                    <span>coming soon</span>
                    <p>No. of Chit Events completed</p>
                </div>
            </div>  
    </section>
</template>

<script>
export default {
    name: 'HomeWhy'
}
</script>

<style lang="scss" scoped>
    .home-why{
        margin: 0 auto;
        margin-top: 506px;
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 1010px;
    }
    h2{
        font-weight: 400;
        font-size: 48px;
        line-height: 110%;
        letter-spacing: 0.055em;
        text-transform: capitalize;
    }
    span{
        font-weight: 500;
        font-size: 18px;
        line-height: 145%;
        text-align: center;
        letter-spacing: 0.12em;
        color: #FFFFFF;
        margin: 52px 0;
    }
    .cards{
        display: flex;
        gap: 80px;
        .card{
            width: 280px;
            height: 343px;
            background: #0F100F;
            box-shadow: 5px 4px 10px 10px #000100;
            border-radius: 10px;
            display: flex;
            flex-direction: column;
            align-items: center;
            .svg-box{
                width: 169px;
                height: 162px;
                margin-top: 62px;
            }
            span{
                font-weight: 700;
                font-size: 24px;
                line-height: 110%;
                letter-spacing: 0.01em;
                text-transform: uppercase;
                color: #FFFFFF;
                margin: 35px 0 0 0;
            }
            p{
                font-weight: 400;
                font-size: 16px;
                line-height: 110%;
                text-align: center;
                letter-spacing: 0.01em;
                text-transform: capitalize;
                color: #FFFFFF;
                margin-top: 3px;
            }
        }
    }
</style>