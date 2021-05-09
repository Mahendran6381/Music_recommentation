var ID;

$("#happy").click(function(e){
      ID = 'feel happpy'
  });
$("#love").click(function(){
    ID = 'Lovesongs hollywood'
  });
$("#angry").click(function(){
    ID ='Angry management'
  });
$("#nothing").click(function(){
   ID ='Motivate'
  });
  var car;

  setTimeout(function(){
      var API_KEY = "AIzaSyCnvQYBiAZW-CFlHdpB2o9eBkeisPlMl2M"
      var search  = ID
      var MAX_RESULT = 10
      var video =''
      
      
      videoSearch(API_KEY,search,MAX_RESULT,video)
            
  },3000)

  function videoSearch(key,search,max,video){
       $.get("https://www.googleapis.com/youtube/v3/search?part=snippet&key="+key+"&maxResults"+max+"&type=video&q="+search,
       function(data){
           console.log(data)
           data.items.forEach(item => {
               video =`
               <iframe width="420" height="315" src="https://www.youtube.com/embed/${item.id.videoId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
               
               `
               $('#videos').append(video)
               
           });
       });
    }