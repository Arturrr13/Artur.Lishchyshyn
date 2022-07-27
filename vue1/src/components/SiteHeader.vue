<template>
    <section>
        <div class="overlay__blur" ref="blur" @click="displayBlock"></div>
        <header class="header" ref="header">
            <div class="navigation" ref="navigation">
                <div class="logo">
                        <router-link to="/" title="UMF" rel="nofollow" @click="scrollTop" style="height: 100%; position: absolute;">
                            <img src="../assets/image/UMF-Logos.png" alt="">
                        </router-link>
                </div>
                <nav>
                    <ul>
                        <li>
                            <router-link rel="nofollow" to="/" @click="scrollTop">HOME</router-link>
                        </li>
                        <li>
                            <router-link rel="nofollow" to="/about" @click="scrollTop">ABOUT US</router-link>
                        </li>
                        <li class="community">
                            <a rel="nofollow" class="arrow">COMMUNITY</a>
                            <div class="sub__menu">
                                <ul>
                                    <li>Content</li>
                                    <li> 
                                        <a title="Youtube" href="https://www.youtube.com/" target="_blank">Youtube</a>
                                    </li>
                                    <li>
                                        <a target="_blank">Medium</a>
                                    </li>
                                    <li>
                                        <a target="_blank">Blogs</a>
                                    </li>
                                </ul>
                                <ul>
                                    <li>Social</li>
                                    <li>
                                        <a title="Twitter" href="https://www.twitter.com/" target="_blank">
                                            <div class="social">
                                                <span class="icon-twitter"></span>
                                            </div>
                                            <span>Twitter</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a title="Telegram" href="https://www.telegram.com/" target="_blank">
                                            <div class="social">
                                                <span class="icon-telegram" style="font-size: 20px;"></span>
                                            </div>
                                            <span>Telegram</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a title="Instagrame" href="https://www.instagrame.com/" target="_blank">
                                            <div class="social">
                                                <span class="icon-instagram" style="font-size: 18px;"></span>
                                            </div>
                                            <span>Instagrame</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a title="Linkedin" href="https://www.linkedin.com/" target="_blank">
                                            <div class="social">
                                                <span class="icon-linkedin"></span>
                                            </div>
                                            <span>Linkedin</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <router-link rel="nofollow" to="/FAQ" @click="scrollTop">FAQ</router-link>
                        </li>
                    </ul>
                </nav>
                <router-link title="Go to presale" rel="nofollow" to="/presale" id="click" class="button btn__style" @click="scrollTop">
                        Presale
                        <svg width="32" height="20" viewBox="0 0 32 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M30.8839 10.8839C31.372 10.3957 31.372 9.60427 30.8839 9.11612L22.9289 1.16117C22.4408 0.67301 21.6493 0.67301 21.1612 1.16117C20.673 1.64932 20.673 2.44078 21.1612 2.92893L28.2322 10L21.1612 17.0711C20.673 17.5592 20.673 18.3507 21.1612 18.8388C21.6493 19.327 22.4408 19.327 22.9289 18.8388L30.8839 10.8839ZM0 11.25H30V8.75H0V11.25Z" fill="#63AF8F"/>
                        </svg>
                </router-link>
            </div>
                <div class="burger__nav">
                    <div class="menuToggle" @click="toggleActive"></div>
                    <div class="menu">
                        <nav>
                            <ul>
                                <li style="--i:5;">
                                    <router-link rel="nofollow" to="/" @click="displayBlock">HOME</router-link>
                                </li>
                                <li style="--i:4;">
                                    <router-link rel="nofollow" to="/about" @click="displayBlock">ABOUT US</router-link>
                                </li>
                                <li style="--i:3;" class="community">
                                    <a rel="nofollow" class="arrow">COMMUNITY</a>
                                    <div class="sub__menu2">
                                        <ul>
                                            <li style="--i:7;"> 
                                                <a title="Youtube" href="https://www.youtube.com/" target="_blank">Youtube</a>
                                            </li>
                                            <li style="--i:6;">
                                                <a target="_blank">Medium</a>
                                            </li>
                                            <li style="--i:5;">
                                                <a target="_blank">Blogs</a>
                                            </li>
                                            <li style="--i:4;">
                                                <a title="Twitter" href="https://www.twitter.com/" target="_blank">
                                                    <div class="social">
                                                        <span class="icon-twitter"></span>
                                                    </div>
                                                    <span>Twitter</span>
                                                </a>
                                            </li>
                                            <li style="--i:3;">
                                                <a title="Telegram" href="https://www.telegram.com/" target="_blank">
                                                    <div class="social">
                                                        <span class="icon-telegram" style="font-size: 20px;"></span>
                                                    </div>
                                                    <span>Telegram</span>
                                                </a>
                                            </li>
                                            <li style="--i:2;">
                                                <a title="Instagrame" href="https://www.instagrame.com/" target="_blank">
                                                    <div class="social">
                                                        <span class="icon-instagram" style="font-size: 18px;"></span>
                                                    </div>
                                                    <span>Instagrame</span>
                                                </a>
                                            </li>
                                            <li style="--i:1;">
                                                <a title="Linkedin" href="https://www.linkedin.com/" target="_blank">
                                                    <div class="social">
                                                        <span class="icon-linkedin"></span>
                                                    </div>
                                                    <span>Linkedin</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li style="--i:2;">
                                    <router-link rel="nofollow" to="/FAQ" @click="displayBlock">FAQ</router-link>
                                </li>
                                <li style="--i:1;">
                                    <router-link title="Go to presale" rel="nofollow" to="/presale" @click="displayBlock">
                                        Presale
                                        <svg width="32" height="20" viewBox="0 0 32 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M30.8839 10.8839C31.372 10.3957 31.372 9.60427 30.8839 9.11612L22.9289 1.16117C22.4408 0.67301 21.6493 0.67301 21.1612 1.16117C20.673 1.64932 20.673 2.44078 21.1612 2.92893L28.2322 10L21.1612 17.0711C20.673 17.5592 20.673 18.3507 21.1612 18.8388C21.6493 19.327 22.4408 19.327 22.9289 18.8388L30.8839 10.8839ZM0 11.25H30V8.75H0V11.25Z" fill="#63AF8F"/>
                                        </svg>
                                    </router-link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
        </header>
    </section>
</template>

<script>
export default {
    name: 'SiteHeader',
    created () {
        window.addEventListener('scroll', this.handleScroll)
    },
    methods: {
        toggleActive() {
            document.querySelector('.burger__nav').classList.toggle('active') 
            if(document.querySelector('.burger__nav').className === 'burger__nav active'){
                this.$refs.navigation.style.display = 'none'
                this.$refs.header.style.justifyContent = 'flex-end'
                this.$refs.header.classList.remove('scroll')
                document.body.style.overflow = 'hidden'
                document.querySelector('section').style.width = '100vw'
                this.$refs.blur.style.display = 'block'
                this.$refs.blur.style.height = `${document.querySelector('#app').clientHeight}px`
            } else {
                this.$refs.navigation.style.display = 'flex'
                this.$refs.header.style.justifyContent = 'space-between'
                this.$refs.header.classList.add('scroll')
                document.body.style.overflow = ''
                this.$refs.blur.style.display = 'none'
            }
        },
        displayBlock() {
            document.querySelector('.burger__nav').classList.toggle('active') 
            this.$refs.navigation.style.display = 'flex'
            this.$refs.header.style.justifyContent = 'space-between'
            this.$refs.header.classList.add('scroll')
            this.$refs.blur.style.display = 'none'
            document.body.style.overflow = ''
            this.scrollTop()
        },
        handleScroll () {
            window.scrollY > 64 ? document.querySelector('.header').classList.add('scroll') : document.querySelector('.header').classList.remove('scroll')
        },
        scrollTop(){
            window.scrollTo(0, 0)
        }
    },
}
</script>

<style scoped lang="scss">
    section .overlay__blur{
        animation: overlayBlur 1.5s linear both;
        position: absolute;
        top: 0;
        width: 100vw;
        height: 100%;
        background: #0e0421d4;
        z-index: 10;
        display: none;
        backdrop-filter: blur(4px);
    }

    header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        height: 90px;
        margin-top: 64px;
        position: relative;
        z-index: 1000;
        .logo{
            width: 78px;
            height: 90px;
        }
        .navigation{
            display: flex;
            justify-content: space-between;
            align-content: center;
            align-items: center;
            width: 100%;
            max-width: 1400px;
            margin: 0 auto;
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
                transition: .5s;
                &:hover{
                    color: #63AF8F;
                    border-bottom: 2px solid #63AF8F;
                    padding-top: 24px;
                    padding-bottom: 24px;
                }
            }
        }
        .button{
            width: 192px;
            display: flex;
            align-items: center;
            justify-content: center;
            svg{
                margin-left: 21px;
            }
        }
    }
    .header{
        &.scroll{
            background: linear-gradient(25deg, rgba(99,175,143,.6) 14%, rgba(112,101,169,.6) 34%, rgba(95,55,145,.6) 53%, rgba(0,0,0,.6) 82%);
            box-shadow: 1px 2px 10px #63AF8F;
            backdrop-filter: blur(5px);
            margin-top: 0;
            position: fixed;
            width: 100%;
            z-index: 1000;
            top: 0;
            left: 0;
        }
    }
    .community{
        position: relative;
        z-index: 5;
        .arrow{
            padding-right: 30px;
            position: relative;
            &::before{
                content: '';
                position: absolute;
                right: 11px;
                top: 27px;
                transform: rotate(-45deg);
                border-bottom: 2px solid #FFFFFF;
                border-left: 2px solid #FFFFFF;
                width: 11px;
                height: 11px;
            }
            &:hover{
                cursor: pointer;
            }
        }
        &:hover .sub__menu{
            animation: subMenu .5s linear both;
            display: flex;
            justify-content: space-between;
            padding: 16px;
            ul{
                animation: subMenuUl .5s linear .7s both;
            }
        }
        .sub__menu{
            position: absolute;
            top: 35px;
            display: none;
            box-shadow: 2px 4px 4px 1px rgba(0, 0, 0, 0.25);
            border-radius: 10px;
            ul li:nth-child(1){
                font-size: 20px;
                line-height: 22px;
                letter-spacing: 0.1em;
                text-transform: uppercase;
                color: #FFFFFF;
                margin-bottom: 10px;
                padding-bottom: 10px;
                border-bottom: 1px solid #63AF8F;
            }
            ul{
                display: flex;
                flex-direction: column;
                gap: 10px;
                li:hover{
                    a, a span, a span::before{
                        color: #63AF8F;
                        transform: scale(1.1);
                        transition: .5s ease;
                    }
                    .social{
                        background: #000000;
                        box-shadow: 0 0 10px #63AF8F;
                        transform: scale(1.1);
                        transition: .5s ease;
                    }
                }
            }
            ul li a{
                padding: 0 0 5px 0;
                display: flex;
                align-items: center;
                gap: 10px;
                border-bottom: none;
                .social{
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    background: #555457;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
            }
        }
    }

    @keyframes subMenu {
      0% {width: 150px; height: 0px; background: linear-gradient(25deg, rgba(99,175,143,.6) 34%, rgba(112,101,169,.8) 64%);}
      50% {width: 150px; height: 290px; background: linear-gradient(25deg, rgba(99,175,143,.6) 14%, rgba(112,101,169,.8) 34%, rgba(95,55,145,.9) 83%, rgba(0,0,0,1) 100%);}
      100% {width: 310px; height: 290px; background: linear-gradient(25deg, rgba(99,175,143,.6) 14%, rgba(112,101,169,.8) 34%, rgba(95,55,145,.9) 83%, rgba(0,0,0,1) 100%);}
    }

    @keyframes subMenuUl {
      0% {opacity: 0;}
      100% {opacity: 1;}
    }

    @keyframes overlayBlur {
      0% {opacity: 0;}
      100% {opacity: 1;}
    }
</style>