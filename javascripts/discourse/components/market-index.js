import Component from "@glimmer/component";
import { computed, action } from '@ember/object';
import Service from '@ember/service';

export default class SubscriptionBar extends Component {
    //@tracked isMobile = false;

    @computed
    get isMobile() {
      return /Mobi|Android/i.test(navigator.userAgent);
    }
  
    @action
    handleClick() {
        this.fetchData();

    }

    async fetchData() {
        try {

          const buttonText = document.getElementById("market-bar__button_text");
          buttonText.innerHTML = "Checking...";

          
          const response3 = await fetch(settings.apiUrl, 
            { 
              method: "GET",
              headers: {
                  'Content-Type': 'application/json',
                  "Authorization": `Bearer ${settings.apiKey}`,
                  'Accept': 'application/json'
              }}
          );
          const data3 = await response3.json();
          console.log(data3);
          
          
          //alert(token);
          try{
            if(this.isMobile){
              window.location.href = settings.url_subscription + "?token=" + token;
            }else{
              window.open(settings.url_subscription + "?token=" + token,"_blank");
            }
          }catch (e) {
            alert(error);
          }
          
          
          //console.log('Third fetch result:', data3);
        } catch (error) {
          console.error('Error during fetch:', error);
        }
      }
}