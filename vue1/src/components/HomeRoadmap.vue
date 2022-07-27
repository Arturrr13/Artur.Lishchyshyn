<template>
    <section class="home-roadmap section__wrapper">
        <div class="components__wrapper">
            <h1>Roadmap</h1>
            <div class="circular__list" v-html="currentCircleHTML" />
            <div class="buttons__wrapper">
                <button class="pre" @click="switching(0)"></button>
                <button class="next" @click="switching(1)"></button>
            </div>
        </div>
        <div class="position__wrapper">
            <div class="wrapper__circle" ref="wrapper">
                <svg>
                    <circle cx="420" cy="420" r="420"></circle>
                </svg>
                <div v-for="(circle, index) in circularData" :key="index" class="circle__content" :class="{active: el === index}" :style="`--num:${index*12.5};`" @click="lol(index)">
                    <span :class="{active: el === index}">{{ circle.title }}</span>
                </div>
            </div>
        </div>    
    </section>
</template>

<script>
import axios from 'axios';
export default {
    data () {
        return {
            el: 0,
            rotate: 0,
            circularData: [],
        }
    },
    computed: {
        currentCircle () {
            return this.circularData[this.el]
        },
        currentCircleHTML () {
            let html = `<h3>${this.currentCircle?.title}</h3>
            <ul>`
            this.currentCircle?.list.forEach(element => {
                html += `<li>${element}</li>`
            });
            html += '</ul>'
            return html
        }
    },
    name: 'HomeRoadmap',
     created () {
        axios
        .get('data/circular.json')
        .then(res => {
            this.circularData = res.data
        })
    },
    methods: {
        switching(dr){
            if((this.rotate === 360) || (this.rotate === -360)){
                this.$refs.wrapper.style.transform = `rotate(0deg)`
                this.rotate = 0
            }
            const rotate = dr === 1 ? this.rotate-45 : this.rotate+45
            this.$refs.wrapper.animate([
                {transform: `rotate(${this.rotate}deg)`},
                { transform: `rotate(${rotate}deg)`}
            ], {
                duration: 500,
                fill: 'both'
            })
            this.rotate = rotate
            const rotate_part = this.rotate / 45
            this.el = this.rotate === -360 ? 0 : this.rotate > 0 ? 8 - rotate_part : -rotate_part
        },
        lol(ind){
            console.log(ind)
            let rotate = ind * 45
            this.$refs.wrapper.style.transform = `rotate(${rotate}deg)`
            this.rotate = rotate
            this.el = ind
        }
    },
}

</script>

<style lang="scss">
.circular__list{
    margin: 260px 0 10px 0;
    height: 430px;
    li, h3{
        position: relative;
        animation: listAnimation .5s linear both;
        font-weight: 300;
        font-size: 24px;
        line-height: 120%;
        letter-spacing: 0.025em;
        text-transform: capitalize;
        color: #FFFFFF;
        &:last-child{
            display: none;
        }
    }
    li{
        list-style: inside;
        padding-left: 15px;
    }
    h3{
        font-weight: 700;
        font-size: 36px;
        margin-bottom: 35px;
    }
}
@keyframes listAnimation {
    0%  {opacity: 0; left: 50px;}
    100% {opacity: 1; left: 0;}
}
</style>

<style lang="scss" scoped>
    .home-roadmap{
        padding: 117px 0 172px 0;
        overflow: hidden;
        display: flex;
    }
    .components__wrapper{
        display: flex;
        flex-direction: column;
        max-width: 450px;
    }
    .position__wrapper{
        position: relative;
        width: 100%;
        transform: rotate(-90deg);
    }
    .buttons__wrapper{
        display: flex;
    }
    .wrapper__circle{
        position: absolute;
        width: 990px;
        height: 990px;
        top: 100px;
        right: 20px;
        svg{
            position: relative;
            width: 840px;
            height: 840px;
            transform: translate(75px, 75px);
            border-radius: 50%;
            border: 3px dashed #63AF8F;
            circle{
                width: 100%;
                height: 100%;
                fill: transparent;
            }
        }
    }
    .circle__content{
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        transform: rotate(calc(3.6deg * var(--num)));
        &::before{
            content: '';
            position: absolute;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 150px;
            height: 150px;
            background: #0F100F;
            border-radius: 50%;
        }
        span{
            position: absolute;
            top: 0;
            left: 50%;
            transform: translateX(-50%); 
            font-weight: 700;
            font-size: 30px;
            line-height: 120%;
            text-align: center;
            letter-spacing: 0.01em;
            text-transform: capitalize;
            color: #FFFFFF;
            width: 100px;
            height: 150px;
            display: flex;
            align-items: center;
            justify-content: center;
            &.active{
                animation: spanAnimation .5s linear .5s both;
                transform: rotate(90deg);
                height: 200px;
                left: 46%;
                color: #0F100F;
            }
        }
        &.active{
            &::before{
            animation: circleAnimation .5s linear both;
            content: '';
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            background: #63AF8F;
            border-radius: 50%;
            }
        }
    }
    .pre, .next{
        position: relative;
        background: #353735;
        box-shadow: 5px 5px 7px rgba(0, 0, 0, 0.5);
        border-radius: 5px;
        width: 107px;
        height: 107px;
        border: none;
        display: flex;
        align-items: center;
        &::before{
            content: '';
            border-top: 5px solid #63AF8F;
            border-left: 5px solid #63AF8F;
            height: 45px;
            width: 45px;
            position: absolute;
            transform: rotate(135deg);
        }
    }
    .pre::before{
        transform: rotate(-45deg);
        left: 38px;
    }
    .next{
        margin-left: 48px;
        &::before{
            transform: rotate(135deg);
            right: 38px;
        }
    }

    @media  screen and (min-width:1251px){
        @keyframes circleAnimation {
          0%  {opacity: .5; width: 150px; height: 150px; top: 0;}
          100% {opacity: 1; width: 318px; height: 318px; top: -50px;}
        }
        @keyframes spanAnimation {
          0%  {opacity: 0; color: #FFFFFF;}
          100% {opacity: 1; color: #0F100F; font-size: 48px;}
        }
    }
    @media  screen and (max-width:1250px){
        @keyframes circleAnimation {
          0%  {opacity: .5; width: 150px; height: 150px; top: 0;}
          100% {opacity: 1; width: 170px; height: 170px; top: -10px;}
        }
        @keyframes spanAnimation {
          0%  {opacity: 0; color: #FFFFFF;}
          100% {opacity: 1; color: #0F100F; font-size: 34px;}
        }
    }
    @media  screen and (max-width:900px){
        @keyframes circleAnimation {
          0%  {opacity: .5; width: 100px; height: 100px; top: 0;}
          100% {opacity: 1; width: 120px; height: 120px; top: 10px;}
        }
        @keyframes spanAnimation {
          0%  {opacity: 0; color: #FFFFFF;}
          100% {opacity: 1; color: #0F100F; font-size: 24px;}
        }
    }
</style>

