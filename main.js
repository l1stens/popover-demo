$(clicked).on('click', function() {
  console.log('1')
  $(popover).show()
  setTimeout(function(){
    $(document).one('click', function() {
      $(popover).hide()
    })
  },0)
})
$(popover).on('click', function(e){
  e.stopPropagation()
})
