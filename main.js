$(clicked).on('click', function(){
  if(popover.style.display === 'none'){
    $(popover).show()
    $(document).one('click', function(){
      $(popover).hide()
    })
  }else{
    $(popover).hide()
  }

})
$(wrapper).on('click', function(x){
  x.stopPropagation()
})