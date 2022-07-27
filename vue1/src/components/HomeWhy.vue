<template>
    <section class="home-why">
            <div class="section__wrapper">
                <h2>
                Why
                </h2>
                <h1>
                    UMA.fi? 
                </h1>
                <span>
                    Backed by Blockchain Technology, UmaChitFund integrates the Chit Events with Staking Protocols to maximize the benefits for the lenders while offering low/zero prime rates to the borrowers (or even making them eligible to yield interest (profit) on their borrowing while completely nullifying the prime rate).
                </span>

                <Carousel :settings="settings" :wrap-around="true" :breakpoints="breakpoints" style="max-width: 1200px">
                    <slide v-for="index in 5" :key="index">
                        <div class="card">
                            <div class="svg-box">
                                <img src="../assets/image/Group.svg" alt="">
                            </div>
                            <span>coming soon</span>
                            <p>No. of Chit Events completed</p>
                        </div>
                    </slide>
                    <template #addons>
                        <pagination />
                    </template>
                </Carousel>

            </div>
            <div class="clouds">
                <img src="../assets/image/clouds/cloud-02.png" style="--i:2;" alt="">
                <img src="../assets/image/clouds/cloud-01.png" style="--i:2.5;" alt="">
                <img src="../assets/image/clouds/cloud-03.png" style="--i:3; height: 100%;" alt="">
                <img src="../assets/image/clouds/cloud-04.png" style="--i:4; max-width: 1500px;" alt="">
                <img src="../assets/image/clouds/cloud-02.png" style="--i:5;" alt="">
            </div>
    </section>
</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination } from 'vue3-carousel'
export default {
    data() {
        return {
            teamData: [],
            settings: {
                itemsToScroll: 1,
                itemsToShow: 1,
                snapAlign: 'start'
            },
            breakpoints: {
                740: {
                    itemsToShow: 2,
                    snapAlign: 'start',
                },
                1250: {
                    itemsToShow: 3,
                    snapAlign: 'start',
                }
            }
        }
    },
    name: 'HomeWhy',
    components: {
        Carousel,
        Slide,
        Pagination
    },
}
</script>

<style lang="scss">
    .home-why{
        max-width: 100%;
        position: relative;
        padding-top: 350px;
        .carousel__track {
            display: flex;
            margin: 0;
            padding: 0;
            position: relative;
            height: 400px;
        }
        .section__wrapper{
            position: relative;
            z-index: 5;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            align-items: center;
            max-width: 1010px;
            padding-bottom: 50px;
        }
        .clouds{
            position: absolute;
            z-index: 1;
            transform: rotate(180deg);
            width: 100%;
            object-fit: cover;
            img{
                position: absolute;
                top: 0;
                animation: cloud calc(8s * var(--i)) linear infinite;
            }
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
    }

    .carousel__pagination-button{
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: #63AF8F;
    }

    .carousel__pagination {
        gap: 10px;
        margin-top: 15px;
    }

    .carousel__pagination-button--active{
        background: #5F3791;
    }

    @keyframes cloud {
        0% {
            transform: translateX(-100%);
        }
        100% {
            transform: translateX(100%);
        }
    }

    .carousel__slide{
        padding: 0 25px;
    }

    .card{
        height: 343px;
        width: 100%;
        max-width: 280px;
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
</style>