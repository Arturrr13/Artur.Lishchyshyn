<template>
    <header>
        <div class="logo">
                <router-link to="/" title="UMF" rel="nofollow" class="anchor">
                    <img src="../assets/image/UMF-Logos.png" alt="">
                </router-link>
        </div>
        <nav>
            <ul>
                <li>
                    <router-link title="follow up" rel="nofollow" to="/">HOME</router-link>
                </li>
                <li>
                    <router-link title="follow up" rel="nofollow" to="/about">ABOUT US</router-link>
                </li>
                <li>
                    <router-link title="follow up" rel="nofollow" to="/">COMMUNITY</router-link>
                </li>
                <li>
                    <router-link title="follow up" rel="nofollow" to="/">FAQ</router-link>
                </li>
            </ul>
        </nav>
        <button type="button" title="Go to presale">
            Presale
            <svg width="32" height="20" viewBox="0 0 32 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M30.8839 10.8839C31.372 10.3957 31.372 9.60427 30.8839 9.11612L22.9289 1.16117C22.4408 0.67301 21.6493 0.67301 21.1612 1.16117C20.673 1.64932 20.673 2.44078 21.1612 2.92893L28.2322 10L21.1612 17.0711C20.673 17.5592 20.673 18.3507 21.1612 18.8388C21.6493 19.327 22.4408 19.327 22.9289 18.8388L30.8839 10.8839ZM0 11.25H30V8.75H0V11.25Z" fill="#63AF8F"/>
            </svg>
        </button>
    </header>
</template>

<script>
export default {
    name: 'SiteHeader'
}
</script>

<style scoped lang="scss">
    header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        .logo{
            width: 78px;
            height: 90px;
        }
        nav ul{
            display: flex;
            flex-direction: row;
            li a{
                padding: 25px 18px;
                font-weight: 600;
                font-size: 16px;
                line-height: 25px;
                letter-spacing: 0.1em;
                color: rgba(255, 255, 255, 0.8);
                border-bottom: 1px solid rgba(255, 255, 255, 0.8);
                &:hover{
                    color: #63AF8F;
                    border-bottom: 2px solid #63AF8F;
                    padding: 24px 18px;
                }
            }
        }
        button{
            width: 192px;
            display: flex;
            align-items: center;
            justify-content: center;
            svg{
                margin-left: 21px;
            }
        }
    }
</style>