const sr = ScrollReveal ({
  distance: '60px',
  duration : 2500,
  delay : 400,
  reset:true
})

sr.reveal('.head-text',{
  delay:800,
  origin:'left'
})
sr.reveal('.map-embed',{
  delay:200,
  origin:'bottom'
})

sr.reveal('.sort',{
  delay:400,
  origin:'top'
})