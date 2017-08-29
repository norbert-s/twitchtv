let tomb=['freecodecamp','ESL_SC2','OgamingSC2','gamesdonequick','comster404 ','cretetion','ramzesdoto','thijshs','yetz','w33haa','gosu','p4wnyhof','iwilldominate','wraxu','freecodecamp','grimmmz','riotgamesjp','habathcx','RobotCaleb','noobs2ninjas','brunofin','imaqtpie'];

$(document).ready(function(){
  
  
  $("button").click(function(event){
    let e = event.target.id;
    buttonPressed(e);
    console.log(e);
  });
  
  buttonPressed=(e)=>{
    if(e === 'all'){
       $(".flex-container").addClass("show-flex");
       $(".offline").addClass("show");
    }  
    if(e === 'online'){
      $(".flex-container").addClass("show-flex").removeClass("hide");
      $(".offline").addClass("hide").removeClass("show");
    }
    if(e === 'off'){
      $(".flex-container").removeClass("show-flex").addClass("hide");
      $(".offline").addClass("show").removeClass("hide");
    }
  }
  $.each(tomb,function(i,value){
    console.log(tomb[i]);
    $.getJSON(`https://wind-bow.glitch.me/twitch-api/streams/${tomb[i]}?callback=?`,function(data){
     let x="" ;
      if(data.stream===null){
         x+= "<div class='offline'><h3 >"+tomb[i]+": "+"<strong>offline</strong> </h3></div>";
        $(".fo").append(x);
      }
      if(data.stream!==null){
        //console.log(data.stream.channel);
        let kep = data.stream.channel.logo;
        console.log(tomb[i]);
        let li="<li class='flex-item'>";
        let liz = "</li>";
        let az = "</a>";
        let ulz = "</ul>";
        let ul="<ul class='flex-container'>";
        let status = data.stream.channel.status;
        let game= data.stream.game;
        let target = "target='_blank'>";
         x+= ul+li+"<img src='"+kep+"'><a href='https://www.twitch.tv/"+tomb[i]+" "+target+li+tomb[i]+liz+az+ li+"<strong>Online</strong>"+liz+li+game+liz+li+status+liz+ulz;
        $(".fo").prepend(x);
        
        
      }
    });//getjson
    
  });
});
  

  




  


  
