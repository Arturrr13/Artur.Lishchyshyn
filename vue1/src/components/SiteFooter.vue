<template>
    <footer>
        <div class="footer__content__wrapper">
            <div class="left-wrapper">
                <h1>join our community</h1>
                <img src="../assets/image/UMF-Logos.png" alt="">
            </div>
            <div class="right-wrapper">
                <span>Sign up for our newsletters</span>
                <form action="#" method="post" @submit.prevent="checkingEmail">
                    <input type="text" placeholder="Enter your E-mail address" title="Enter your E-mail" ref="email">
                    <button type="submit" title="Submit E-mail" id="click">Submit</button>
                </form>
                <p ref="message" class="message">{{ message }}</p>
                <div class="footer-nav">
                    <div class="nav-wrapper">
                        <p>Learn</p>
                        <router-link rel="nofollow" to="/about" @click="scrollTop">About Us</router-link>
                        <router-link rel="nofollow" to="/presale" @click="scrollTop">Buy UCF</router-link>
                        <router-link rel="nofollow" to="/FAQ" @click="scrollTop">FAQ</router-link>
                    </div>

                    <div class="nav-wrapper">
                        <p>Resources</p>
                        <a>Media Kit</a>
                        <a>Support</a>
                        <a>Contact Us</a>
                    </div>

                    <div class="nav-wrapper">
                        <p>Other</p>
                        <router-link rel="nofollow" to="/privacy-policy" @click="scrollTop">Privacy Policy</router-link>
                        <router-link rel="nofollow" to="/cookies-policy" @click="scrollTop">Cookie Policy</router-link>
                        <router-link rel="nofollow" to="/disclaimer" @click="scrollTop">Disclaimer</router-link>
                    </div>
                </div>

                <div class="social-wrapper">
                    <div class="social">
                        <a class="icon-instagram" title="Instagram" href="https://www.instagram.com/" target="_blank"></a>
                    </div>
                    <div class="social">
                        <a class="icon-facebook" title="Facebook" href="https://www.facebook.com/" target="_blank"></a>
                    </div>
                    <div class="social">    
                        <a class="icon-twitter" title="Twitter" href="https://www.twitter.com/" target="_blank"></a>
                    </div>
                    <div class="social">
                        <a class="icon-linkedin" title="Linkedin" style="padding-left: 3px;" href="https://www.linkedin.com/" target="_blank"></a>
                    </div>
                    <div class="social">
                        <a class="icon-telegram" title="Telegram" style="font-size: 20px;" href="https://www.telegram.com/" target="_blank"></a>
                    </div>
                    <div class="social">
                        <a class="icon-reddit" title="Reddit" href="https://www.reddit.com/" target="_blank"></a>
                    </div>
                </div>
            </div>
        </div>

        <div class="copyright">
            <span>Copyright &#169; 2022</span>
        </div>
    </footer>
</template>

<script>
export default {
    data(){
        return{
            message: '',
            BOT_API_ID: '5572284297:AAGcIYixFO0cFESbgoNVYlsHlEsSf5vDcpU',
            CHAT_ID: '-1001798307154',
        }
    },
    name: 'SiteFooter',
    methods: {
        checkingEmail(){
            let email = this.$refs.email.value
            if(email.length > 0 && Boolean(email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) !== false) {
                this.$refs.message.style.display = 'none'
                const text_form = "<i>Form data</i>"+
                "%0a<b>Email: </b>"+email
                fetch(`https://api.telegram.org/bot${this.BOT_API_ID}/sendMessage?chat_id=${this.CHAT_ID}&text=${text_form}&parse_mode=HTML`)
            } else {
                this.$refs.message.animate([
                { opacity: .3, transform: 'translateX(100px)' },
                { display: 'block', opacity: 1, transform: 'translateX(0px)' }
            ], {
                duration: 500,
                fill: 'both'
            })
                this.message = 'Incorrect E-mail'
            }
        },
        scrollTop(){
            window.scrollTo(0, 0)
        }
    }
}
</script>
