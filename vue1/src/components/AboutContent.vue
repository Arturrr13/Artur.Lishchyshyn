<template>
    <section class="about-content">
        <div class="introduction">
            <div class="text-box">
                <h1>introduction</h1>
                <span>
                    Chit Funds is a Non-Banking Financial Institution originated in India which comes under the RBI Act 1934. "Chit", as characterized by the act, implies an exchange by the method of which a foreman goes into a concurrence with various subscribers that all of them will buy in a specific amount of cash in periodical portions over some period of time i.e. Chit funds are a traditional means of savings and borrowing in which members or subscribers agree to contribute a fixed amount of money for a fixed duration of time. The total amount collected (by foreman) is then auctioned and given out as prize money to the member or subscriber in need. So, this allows the members to save a part of their earnings for the times when needed. <br><br>
                    Chit Funds are beneficial for not only individuals but also small-scale industries that need financial support to expand their businesses. These institutions have been playing a vital role in the National Financial Inclusion program even before banks came into play.
                </span>
            </div>
            <div class="img">
                <img src="../assets/image/4.png" alt="">
            </div>
        </div>
        <div class="about-us">
            <div class="text-box">
                <h1>about us</h1>
                <span>
                     Uma Chit Funds Private Limited is an online-based chit funds company registered under the Companies Act, 2013 (18 of 2013). It is a non-government company handled by private entities located in Maharashtra, India. <br><br>
                    The main motto behind establishing such online chit fund company backed by blockchain technology is to allow its users to save some part of their income for their future needs and expenses. People can move forward towards achieving their dreams by managing their saving in a much more efficient manner. Small scale industries can manage their capital and maximize their profits by investing in this blockchain based chit fund schemes. This will not only help in stabilizing their financial infrastructure but also pave the way for future opportunities of expanding and enlarging their businesses. Encouraging disciplined savings, providing a reliable source of fund for emergencies and financial eventualities, Uma chit Fund will also help the layman in more ways than one.
                </span>
            </div>
            <div class="img">
                <img src="../assets/image/7.png" alt="">
            </div>
        </div>
        <div class="what-makes-us">
            <div class="text-box">
                <h2>What makes us</h2>
                <h1>unique?</h1>
                <span>
                    The thing that makes us unique is the fact that the platform is backed by the highly trending blockchain technology along with enabled smart contracts. By engaging our platform with blockchain technology, we would be able to serve the chit holders with unmatched transparency, scalability, accessibility & affordability. Smart contracts are lines of code that are stored on a blockchain and automatically execute when predetermined terms and conditions are met. 
                </span>
            </div>
            <div class="img">
                <img src="../assets/image/5.png" alt="">
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'AboutContent'
}
</script>

<style lang="scss" scoped>
    .about-content{
        margin-top: 60px;
    }
    .introduction, .about-us, .what-makes-us{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .about-us{
        flex-direction: row-reverse;
    }
    .text-box{
        max-width: 650px;
        margin-top: 50px;
        text-align: justify;
        h1{
            margin-bottom: 50px;
        }
        span{
            font-weight: 500;
            font-size: 18px;
            line-height: 150%;
            letter-spacing: 0.1em;
            text-transform: capitalize;
            color: #FFFFFF;
        }
        h2{
            font-weight: 500;
            font-size: 48px;
            line-height: 100%;
            text-transform: capitalize;}
    }
    .img{
        max-width: 695px;
    }
</style>