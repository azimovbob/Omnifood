            $(document).ready(function(){
                /*For sticky navigation bar on scroll*/
                $('.js--section-features').waypoint(function(direction){
                        if(direction == "down"){
                            $('nav').addClass('sticky');
                        }else{
                            $('nav').removeClass('sticky');
                        }
                    },{offset: '10%'
                })
                /*Scroll to plans*/
                $('.js--scroll-to-plans').click(function(){
                    $('html, body').animate({scrollTop: $('.js--section-plans').offset().top},1000);
                })
                
                /*scroll to start*/
                $('.js--scroll-to-start').click(function(){
                    $('html, body').animate({scrollTop: $('.js--section-features').offset().top},1000);
                })
                
                /*anchor scrolling*/
                $(function() {
                  $('a[href*="#"]:not([href="#"])').click(function() {
                    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                      var target = $(this.hash);
                      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                      if (target.length) {
                        $('html, body').animate({
                          scrollTop: target.offset().top
                        }, 1000);
                        return false;
                      }
                    }
                  });
                });
                
                
                /*animation on scroll*/
                $('.js--wp-1').waypoint(function(){
                    $('.js--wp-1').addClass('animate__fadeIn');
                },{offset:'50%'});
                
                $('.js--wp-2').waypoint(function(){
                    $('.js--wp-2').addClass('animate__fadeInUp');
                },{offset:'50%'});
                
                $('.js--wp-3').waypoint(function(){
                    $('.js--wp-3').addClass('animate__fadeIn');
                },{offset:'50%'});
                
                $('.plan-box').waypoint(function(){
                    $('.plan-box').addClass('animate__pulse');
                },{offset:'50%'});
                
               
                /*mobile nav toggle*/
                $('.mobile-nav-icon').click(function(){
                    var nav = $('.main-nav');
                    var icon = $('.mobile-nav-icon ion-icon'); 
                    nav.slideToggle(200);
                    
//                    
                    if(icon.hasClass("js--nav-icon")){
                        icon.removeAttr('name');
                        icon.attr('name', 'close');
                        icon.addClass("js--close-icon");
                        icon.removeClass('js--nav-icon');
                    }else{
                        icon.addClass('js--nav-icon');
                        icon.removeAttr('name');
                        icon.attr('name', 'reorder-three');
                        icon.removeClass('js--close-icon');
                    }
                   
                })
                
            });
         