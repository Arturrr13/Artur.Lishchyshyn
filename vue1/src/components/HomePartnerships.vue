<template>
    <section class="home-partnerships section__wrapper">
        <h1>partnerships <h2>& Press Releases</h2></h1>
        <div class="partnerships__wrapper">
            <div class="partnership" v-for="(item, index) in partnershipsData" :key="index">
                <img :src="require(`@/assets/image/partnerships/${index}.png`)" alt="" :style="`width: ${item.width}px`" class="lol">
                <a :href="`${item.link}`" :title="`${item.title}`" target="_blank"></a>
            </div>
        </div>
    </section>
</template>

<script>
import axios from 'axios';

export default {
    name: 'HomePartnerships',
    data() {
        return {
            partnershipsData: [],
        }
    },
    created () {
        axios
        .get('data/partnerships.json')
        .then(res => {
            this.partnershipsData = res.data
        })
    }
}
</script>

<style lang="scss">
    .home-partnerships{
        padding: 107px 0 107px 0;
        h1{
            text-align: end;
        }
    }
    .partnerships__wrapper{
        position: relative;
        display: flex;
        flex-direction: row;
        align-content: center;
        justify-content: center;
        gap: 80px;
        margin-top: 100px;
        .partnership{
            position: relative;
            animation: partnerships 10s linear infinite;
            a{
                position: absolute;
                width: 100%;
                height: 100%;
                left: 0;
                &:hover{
                    animation: imgFilter .5s both;
                }
            }
            img{
                filter: grayscale(1);
            }
            &:hover img{
                transition: all 1s ease;
                filter: none;
                transform: scale(1.1);
            }
        }
        &:hover .partnership{
            animation: stopAnimation 1.5s linear both;
        }
    }

    @keyframes partnerships {
      0% {right: 70%;}
      100% {right: -70%;}
    }

    @keyframes imgFilter {
      0% {display: none;}
      100% {display: block;}
    }

    @keyframes stopAnimation {
        0%   {right: 60%;}
        100% {right: 0;}
    }
</style>