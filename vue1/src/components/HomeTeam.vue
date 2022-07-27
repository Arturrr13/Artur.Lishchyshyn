<template>
    <section class="home-team section__wrapper">
        <h1>Our team</h1>
        <Carousel :settings="settings" :wrap-around="true" :mouseDrag="false" :breakpoints="breakpoints" style="max-width: 1200px">
            <slide v-for="(item, index) in teamData" :key="index" class="teammate">
                <img :src="require(`@/assets/image/team/${index}.jpg`)" alt="">
                <h3>{{ item.name }}</h3>
                <a :href="`${item.wiki}`" :title="`${item.name}`" target="_blank" class="slideLink"></a>
                <p>{{ item.position }}</p>
                <div class="icon__wraper">
                    <div class="social" v-if="item.twitter !== ''">    
                        <a class="icon-twitter" :href="`${item.twitter}`" target="_blank" title="Twitter"></a>
                    </div>
                    <div class="social" v-if="item.linkedin !== ''">
                        <a class="icon-linkedin" :href="`${item.linkedin}`" target="_blank" title="Linkedin"></a>
                    </div>
                    <span v-else>Not in social networks</span>
                </div>
            </slide>
            <template #addons>
                <navigation />
            </template>
        </Carousel>
    </section>
</template>

<script>
import axios from 'axios'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'

export default {
    data() {
        return {
            teamData: [],
            settings: {
                itemsToScroll: 1,
                itemsToShow: 1,
                snapAlign: 'center'
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
    name: 'HomeTeam',
    components: {
    Carousel,
    Slide,
    Navigation,
    },
    created() {
        axios
        .get('data/ourteam.json')
        .then(res => {
            this.teamData = res.data
        })
    }
}
</script>

<style lang="scss">

    .home-team{
        h1{
            text-align: center;
        }

        .carousel{
            margin: 0 auto;
            margin-top: 40px;
        }
        .slideLink{
            position: absolute;
            width: 100%;
            top: 0;
            height: 470px;
        }
    }

    .carousel__slide{
        padding: 0 25px;
    }

    .teammate{
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        h3{
            font-weight: 500;
            font-size: 30px;
            letter-spacing: 0.01em;
            text-transform: capitalize;
            color: #FFFFFF;
            margin-top: 13px;
        }
        p, span{
            font-style: italic;
            font-weight: 300;
            font-size: 16px;
            letter-spacing: 0.01em;
            text-transform: capitalize;
            color: #63AF8F;
        }
        img{
            height: 100%;
            max-height: 430px;
        }
        span{
            font-size: 25px;
            margin-bottom: 10px;
        }
    }

    .icon__wraper{
        display: flex;
        flex-direction: row;
        gap: 15px;
        margin-top: 21px;
        .social{
            width: 40px;
            height: 40px;
            background: #63AF8F;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 10px;
            &:hover{
                background: #5F3791;
                box-shadow: 0 0 10px #5F3791;
                transform: scale(1.1);
                transition: .5s ease;
                a::before{
                    color: #63AF8F;
                    transform: scale(1.1);
                    transition: .5s ease;
                }
            }
        }
    }
</style>