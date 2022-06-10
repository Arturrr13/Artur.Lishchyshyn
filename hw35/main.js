$(function(){
    $('.tabs').css({
        background: '#2B3040', 
        width: 600,
        height: 120,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 75
    })
    $('.tabs div').on('click', function(){
        if(!$(this).hasClass('active')){
            $('.tabs div.active, .tab_box.active').removeClass('active')
            $(this).addClass('active')
            $('.tab_box[cont-id = "'+$(this).attr('id')+'"]').addClass('active')
        }
    })
    $('.star').on('mouseover', function(){
        $(this).prevAll().children().addClass('star-acrive')
        $(this).children().addClass('star-acrive')
        $(this).nextAll().children().removeClass('star-acrive')
    })
    $('.star').on('click', function(){
        $(this).prevAll().children().addClass('star-acrive--always')
        $(this).children().addClass('star-acrive--always')
        $(this).nextAll().children().removeClass('star-acrive--always')
    })
    $('.percent').css({
        position: 'relative',
        width: 85,
        height: 85
    })
    $('.percent svg').css({
        position: 'relative',
        width: 85,
        height: 85,
        transform: 'rotate(270deg)'
    })
    $('.percent svg circle').css({
        width: '100%',
        height: '100%',
        fill: 'transparent',
        strokeWidth: 4,
        transform: 'translate(5px,5px)',
    })
    $('.percent svg circle').eq(0).css({
        strokeWidth: 2,
        transform: 'translate(7px,6px)',
        stroke: '#B7BACD'
    })
    $('.number').css({
        position: 'absolute',
        inset: 0,
        display: 'flex',
        justifyContent:'center',
        alignItems: 'center',
        flexDirection: 'column',
        fontFamily: 'Lato',
        fontSize: 14,
        lineHeight: 22,
        color:' #B7BACD'
    })
})

