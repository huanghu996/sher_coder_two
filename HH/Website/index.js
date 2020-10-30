                    $(function(){
                        var src_img = new Image();
                        src_img.src = $('#cur_xb').attr('src');
                        var canvas = document.getElementById('canvas');
                        canvas.setAttribute('width', src_img.width);
                        canvas.setAttribute('height', src_img.height);
                        var ctx = canvas.getContext('2d');
                        src_img.onload = function() {
                            ctx.drawImage(src_img, 0, 0);
                            src_img.style.display = 'none';
                        };

                        $('#cur_xb').click(function(){
                            var img_x = $('#img_x').val();
                            var img_y = $('#img_y').val();
                            var pixel = ctx.getImageData(img_x, img_y, 1, 1);
                            var data = pixel.data;
                            var rgba = 'rgba(' + data[0] + ',' + data[1] + ',' + data[2] + ',' + (data[3] / 255) + ')';
                            $('.square').css('background', rgba);
                            $('#rgb_val').text(rgba);
                        });
                    });
                    
                    //获取坐标
                    function getClickPos(e){
                        var xPage = (navigator.appName == 'Netscape')? e.pageX : event.x+document.body.scrollLeft;
                        var yPage = (navigator.appName == 'Netscape')? e.pageY : event.y+document.body.scrollTop;
                        identifyImage = document.getElementById("cur_xb");
                        img_x = locationLeft(identifyImage);
                        img_y = locationTop(identifyImage);
                        var xPos = xPage-img_x;
                        var yPos = yPage-img_y;
                        $('#img_x').val((xPos+520));
                        $('#img_y').val(yPos);
                    }
                    function locationLeft(element){
                        offsetTotal = element.offsetLeft;
                        scrollTotal = 0;
                    
                        if (element.tagName != "BODY"){
                        if (element.offsetParent != null)
                            return offsetTotal+scrollTotal+locationLeft(element.offsetParent);
                        }
                        return offsetTotal+scrollTotal;
                    }
                    function locationTop(element){
                        offsetTotal = element.offsetTop;
                        scrollTotal = 0; 
                    
                        if (element.tagName != "BODY"){
                        if (element.offsetParent != null)
                            return offsetTotal+scrollTotal+locationTop(element.offsetParent);
                        }
                        return offsetTotal+scrollTotal;
                    }