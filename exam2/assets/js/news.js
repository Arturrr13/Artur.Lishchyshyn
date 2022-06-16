fetch('assets/JSON/news.json')
    .then(res => {
        return res.json()
    })
    .then(res => {
        news(res)
    })

function news(news) {
    let html = '<div class="swiper mySwiper2" style="max-width:1170px; height:584px"><div class="swiper-wrapper">'
    news.forEach(el => {
        html += `
        <div class="swiper-slide" style="margin-right:30px; background: none;width:370px; max-height: 514px; height:100%">
        <div style="width:370px; max-height: 514px; height:100%;  background:white" class="news__block">
            <img src="${el.img}" style="width:100%; max-height:240px"/>
            <p>
                ${el.title}
            </p>
            <p>
                ${el.text}
            </p>
            <div class="autor">
                <img src="${el.avatar}"/>
                <div>
                <span>${el.name}</span>
                <p>${el.date}</p>
                </div>
            </div>
        </div>
        </div>
        `
    });
    html += '</div><div class="swiper-pagination"></div></div><div class="swiper-button-next" id="next__sl--2"></div><div class="swiper-button-prev"></div>'
    document.getElementById('news').innerHTML = html
}
