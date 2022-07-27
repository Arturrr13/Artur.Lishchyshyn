<template>
    <section class="404">
        <h1>404 <h2>this page is not found</h2></h1>
        <div class="rain">
            <span v-for="index in 50" :key="index=Math.random() * (55 - 5) + 5" :style="`--i:${index}`"></span>
        </div>
        <img src="../assets/image/404.png" alt="">
    </section>
</template>

<script>
export default {
    name: 'MyErr'
}
</script>

<style lang="scss" scoped>
    h1{
        display: flex;
        flex-direction: row;
        align-items: flex-end;
        font-size: 120px;
        animation: ErrAnimation 6s infinite;
        text-shadow: 0 0 25px #5F3791;
        h2{
            color: #63AF8F;
        }
    }

    img{
        max-width: 500px;
        filter: grayscale(1);
    }
    .rain{
        position: relative;
        display: flex;
        z-index: 1;
        span{
            position: relative;
            width: 10px;
            height: 10px;
            background: rgba(136, 145, 213, 0.57);
            margin: 0 2px;
            border-radius: 50%;
            animation: rain 7s linear infinite;
            animation-duration: calc(15s / var(--i));
        }
    }

    @keyframes ErrAnimation {
       0%{color: #5F3791;}
       3%{color: rgba(9, 255, 0, 0);} 
       6%{color: #5F3791;}
       9%{color: rgba(9, 255, 0, 0);} 
       12%{color: #5F3791;}    
       100%{color: rgba(255, 0, 0, 0);} 
    }

    @keyframes rain {
       0%{transform: translateY(0) scale(1)} 
       70%{transform: translateY(800px) scale(1)} 
       100%{transform: translateY(800px) scale(0)} 
    }

    @media  screen and (max-width:1120px){
    h1{
        flex-direction: column;
        align-items: center;
        gap: 15px;
        h2{
            line-height: 50px;
        }
    }

    @media  screen and (max-width:620px){
    h1 h2{
            font-size: 30px;
        }
    }
}
</style>