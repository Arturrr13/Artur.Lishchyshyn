fetch('assets/JSON/news.json')
    .then(res => {
        return res.json()
    })
    .then(res => news(res))

function news(news) {
    let html = ''
    news.forEach(el => {
        html += `
        <div class="swiper-slide" style="background: none; width:370px; max-height: 514px; height:100%">
        <div style="width:370px; max-height: 514px; height:100vh; background:white" class="news__block">
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
    document.getElementById('a').innerHTML = html
}
