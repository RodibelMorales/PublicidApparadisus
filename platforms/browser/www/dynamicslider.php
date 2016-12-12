<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js">        </script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<title></title>
<script>
    onload=function(){

       /* for(var m=3;m>=0;m--)
        {
            var path="file_uploads/"+m+".jpg";
            $(".carousel-indicators").after("<li data-target='#carousel-example-generic' data-slide-to=\""+m+"\"></li>");
            $(".carousel-inner").after("<div class='item'><img src='"+path+"' alt='"+m+"'></div>");             
        }*/

        $(".carousel-indicators li:first").addClass("active");
        $(".carousel-inner .item:first").addClass("active");
        $('.carousel').carousel();
    }
    function add(){

       for(var m=6;m>=4;m--)
        {
            var path="uploads/promo"+m+".png";
            $(".carousel-indicators").append("<li data-target='#carousel-example-generic' data-slide-to=\""+m+"\"></li>");
            $(".carousel-inner").append("<div class='item'><img src='"+path+"' alt='"+m+"'></div>");             
        }

    
        $('.carousel').carousel();
    }
</script>
</head>
<body>
  <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
  <!-- Indicators -->
    <ol class="carousel-indicators">
    <?php
        for( $m=3;$m>=0;$m--)
        {
            echo "<li data-target='#carousel-example-generic' data-slide-to='".$m."''></li>";
        }
        ?>
    </ol>
    <!-- Wrapper for slides -->
    <div class="carousel-inner"> 
    <?php
        for( $m=3;$m>=0;$m--)
        {
             $path="uploads/promo".$m.".png";
            echo "<div class='item'><img src='".$path."' alt='".$m."'></div>";
        }
        ?>      

    </div>

    <!-- Controls -->
    <a class="left carousel-control" href="#carousel-example-generic" data-slide="prev">
        <span class="glyphicon glyphicon-chevron-left"></span>
    </a>
    <a class="right carousel-control" href="#carousel-example-generic" data-slide="next">
        <span class="glyphicon glyphicon-chevron-right"></span>
    </a>
  </div>
    <a href="javascript:void(0);" onclick="add()">agregar</a>
</body>
</html> 