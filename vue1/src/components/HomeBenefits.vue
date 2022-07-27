<template>
    <section class="home-benefits">
        <div class="section__wrapper">
            <h1>Benefits <h2>For Chit Participants</h2> </h1>
            <Carousel :settings="settings" style="max-width: 860px" :breakpoints="breakpoints" :wrap-around="true">
                <slide v-for="(item, index) in sliderData" :key="index">
                    <div class="carousel__style">
                        <div class="icon">
                            <img :src="require(`@/assets/image/sliderIcon/${index}.svg`)" alt="">
                        </div>
                        <h3>{{ item.title }}</h3>
                        <span>{{ item.info }}</span>
                    </div>
                    
                </slide>

                <template #addons>
                    <navigation />
                </template>
            </Carousel>
        </div>
        <div class="img__wrapper">
            <img src="../assets/image/UMF-LogosBig.png" alt="">
            <img src="../assets/image/3.png" alt="">
        </div>
    </section>
</template>

<script>

import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Navigation } from 'vue3-carousel';
import axios from 'axios';

export default {
    data() {
        return {
            sliderData: [],
            settings: {
                itemsToShow: 1,
                itemsToScroll: 1,
                snapAlign: 'start'
            },
            breakpoints: {
                870: {
                    itemsToShow: 2,
                    snapAlign: 'start',
                }
            }
        }
    },
    name: 'HomeBenefits',
    components: {
    Carousel,
    Slide,
    Navigation,
    },
    created () {
        axios
        .get('data/slider.json')
        .then(res => {
            this.sliderData = res.data
        })
    }
}
</script>

<style lang="scss">

    .home-benefits{
        margin-top: 150px;
        position: relative;
        padding-bottom: 400px;
        .carousel__slide{
            padding: 0 25px;
                .carousel__style{
                height: 500px;
                background: #0F100F;
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                align-items: flex-end;
                padding: 15px;
                border-radius: 5%;
                .icon{
                    width: 100%;
                    max-width: 100px;
                }
                h3, span{
                    line-height: 124%;
                    text-transform: capitalize;
                    color: #FFFFFF;
                    text-align: start;
                    width: 100%;
                }
                h3{
                    font-weight: 700;
                    font-size: 26px;
                    margin: 35px 0 30px 0;
                }
                span{
                    font-weight: 500;
                    font-size: 18px;
                    letter-spacing: 0.1em;
                }
            }
        }
    }

    .carousel{
        margin: 56px 0 0 0;
    }

    .carousel__next, .carousel__prev{
        background: #353735;
        box-shadow: 5px 5px 7px rgba(0, 0, 0, 0.5);
        border-radius: 5px;
        width: 70px;
        height: 68px;
        top: 118%;
        svg{
            display: none;
        }
        &::before{
            content: '';
            border-top: 2px solid #63AF8F;
            border-left: 2px solid #63AF8F;
            height: 20px;
            width: 20px;
            position: absolute;
        }
    }

    .carousel__prev{
        left: 60px;
        &::before{
            transform: rotate(-45deg);
            left: 27px;
        }
    }

    .carousel__next{
        left: 80px;
        &::before{
            transform: rotate(135deg);
            right: 27px;
        }
    }

    .img__wrapper{
        img:nth-child(2){
            max-width: 770px;
            position: absolute;
            bottom: 0;
            right: -6px;
        }
        img:nth-child(1){
            max-width: 340px;
            position: absolute;
            bottom: 249px;
            right: 169px;
        }
    }

    @media  screen and (max-width:700px){
        .home-benefits{
            padding-bottom: 200px;
        }
    }


    @media  screen and (max-width:500px){
        .home-benefits{
            padding-bottom: 100px;
        }
        .home-benefits .carousel__slide .carousel__style {
            height: 100%;
            padding: 20px 15px;
            h3{
                margin: 25px 0;
                font-size: 23px;
                line-height: 115%;
            }
        }
    }
</style>