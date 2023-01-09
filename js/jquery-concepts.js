//This function implements hiding of the <p> elements when clicked
// $(document).ready(function(){
//     $("p").click(function(){
//             $(this).hide()
// })
//  })   

//This function implements hiding of the <p> elements when double clicked
//  $(document).ready(function(){
//     $("p").dblclick(function(){
//             $(this).hide()
// })
//  })   

// $(document).ready(function(){
//     $(".row").mouseenter(function(){
//         $(this).css("background-color", "blue")
//     })
//     $(".row").mouseleave(function(){
//         $(this).css("background-color", "white")
//     })
// })

// $(document).ready(function(){
//     $(".my-image:first").mouseenter(function(){
//         $(".my-image:first").animate({},"slow")
//     })   
// })
$(document).ready(function(){

    $(".my-image").each(function(index){

        var originalImage = $(this).attr("src")
        var alternativeImage = $(this).data("alternative-image")
        $(this).mouseenter(function(){
            $(this).attr('src', alternativeImage)
        })
        $(this).mouseleave(function(){
            $(this).attr('src', originalImage)
        })
        
    });

    //first image
    $(".my-image1").mouseenter(function(){
        var alternativeImage = $(this).data("alternative-image");
        console.log(`Alternative image source: ${alternativeImage}`);
        $(".my-image1").attr('src', alternativeImage)
        // $(".my-image1").animate({width: '450px', height: '400px'}, 3000)
    })
    $(".my-image1").mouseleave(function(){
        $(".my-image1").attr('src',"design8.jpeg")
        $(".my-image1").animate({width: '350px', height: '350px'}, 3000)
    })
    //second image
    $(".my-image2").mouseenter(function(){
        var alternativeImage = $(this).data("alternative-image");//alternative image is taken as the variable
        $(".my-image2").attr('src', alternativeImage)
        // $(".my-image2").animate({width: '450px', height: '450px'}, 3000)
    })
    $(".my-image2").mouseleave(function(){
        $(".my-image2").attr('src',"design7.jpeg")
        $(".my-image2").animate({width: '350px', height: '350px'},3000)
    })
    //third image
    $(".my-image3").mouseenter(function(){
        $(".my-image3").attr('src',"design3(iii).jpg")
        // $(".my-image3").animate({width: '450px', height: '450px'}, 3000)
    })
    $(".my-image3").mouseleave(function(){
        $(".my-image3").attr('src',"design3.jpg")
        $(".my-image3").animate({width: '350px', height: '350px'},3000)
    })
    //fourth image
    $(".my-image4").mouseenter(function(){
        $(".my-image4").attr('src',"design4(iv).jpeg")
        // $(".my-image4").animate({width: '450px', height: '450px'}, 3000)
    })
    $(".my-image4").mouseleave(function(){
        $(".my-image4").attr('src',"design4.jpeg")
        $(".my-image4").animate({width: '350px', height: '350px'},3000)
    })
    // //fifth image
    // $(".my-image5").mouseenter(function(){
    //     $(".my-image5").attr('src',"design5(v).jpeg")
    //     $(".my-image5").animate({width: '450px', height: '450px'}, "slowly")
    // })
    // $(".my-image5").mouseleave(function(){
    //     $(".my-image5").attr('src',"design5.jpg")
    //     $(".my-image5").animate({width: '350px', height: '350px'}, "slowly")
    // })
    // //sixth image
    // $(".my-image6").mouseenter(function(){
    //     $(".my-image6").attr('src',"design2(ii).jpg")
    //     $(".my-image6").animate({width: '450px', height: '450px'}, "slowly")
    // })
    // $(".my-image6").mouseleave(function(){
    //     $(".my-image6").attr('src',"design2.jpg")
    //     $(".my-image6").animate({width: '350px', height: '350px'}, "slowly")
    // })
})
