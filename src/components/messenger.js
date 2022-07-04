import React, {useEffect} from 'react';
const facebookAppId = "111770361318819";
{/*
<!-- Messenger Plug-in Discussion Code -->
    <div id="fb-root"></div>

    <!-- Your Plug-in Discussion code -->
    <div id="fb-customer-chat" class="fb-customerchat">
    </div>

    <script>
      var chatbox = document.getElementById('fb-customer-chat');
      chatbox.setAttribute("page_id", "111770361318819");
      chatbox.setAttribute("attribution", "biz_inbox");
    </script>

    <!-- Your SDK code -->
    <script>
      window.fbAsyncInit = function() {
        FB.init({
          xfbml            : true,
          version          : 'v13.0'
        });
      };

      (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = 'https://connect.facebook.net/fr_FR/sdk/xfbml.customerchat.js';
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));
    </script>
    */}

export default function CustomerChat(){
  useEffect(()=>{
    window.fbAsyncInit = function() {
      window.FB.init({
        xfbml            : true,
        version          : 'v13.0'
      });
    };
    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = 'https://connect.facebook.net/fr_FR/sdk/xfbml.customerchat.js';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  })
  return(
    <>
      <div id="fb-root" />
      <div
        className="fb-customerchat"
        attribution="setup_tool"
        page_id={facebookAppId}
      />
    </>
  )
}