var x=document.getElementById("userdemo");
var leftImage = document.getElementById('leftImage')
                function getuserLocation(){
                    if (navigator.geolocation) {
                        navigator.geolocation.getCurrentPosition(showuserPosition,showbrowserError);
                    }
                    else{
                        x.innerHTML="Geolocation is not supported by this browser.";
                    }
                }

                function showuserPosition(position) {
                    var latlon=position.coords.latitude+","+position.coords.longitude;
                    var img_url="http://maps.googleapis.com/maps/api/staticmap?center="
                    +latlon+"&zoom=14&size=400x300&sensor=false";
                    var firefoxImg="<img src =img/firefox-logo.jpg />";

                    document.getElementById("mapholder").innerHTML="<img src='"+img_url+"'>";
                    document.getElementById("firefox").innerHTML="<h3>You must be using Firefox</h3>" + firefoxImg + "<p>Im unsure why the location marker isn't displaying</p>";
                }

                function showbrowserError(error){
                    switch(error.code)
                    {
                        case error.PERMISSION_DENIED:
                        x.innerHTML=document.getElementById("mapholder").innerHTMLmap="<p>Tracking your location has failed, due to this application not being run from a server</p>"
                        leftImage.innerHTML=document.getElementById("leftImage").innerHTMLmap="<p>The map should have appeared here, try using Firefox</p><p>I tested running this with a MAMP/Apache server and it worked on Chrome</p>";
                        break;
                        case error.POSITION_UNAVAILABLE:
                        x.innerHTML="Location information is unavailable."
                        break;
                        case error.TIMEOUT:
                        x.innerHTML="The request to get user location timed out."
                        break;
                        case error.UNKNOWN_ERROR:
                        x.innerHTML="An unknown error occurred."
                        break;
                    }
                }