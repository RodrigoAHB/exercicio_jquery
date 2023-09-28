$(document).ready(function(){
    const list = $('#list')

    $('#register').click(function(e){
        e.preventDefault();
        const task = $('input')
        let newLi = $(`<li class = 'item'>${task.val()}</li>`)
        newLi.appendTo(list)
    })

    list.on('click', 'li', function(){
        $(this).addClass('listItem')
    })
})
``
