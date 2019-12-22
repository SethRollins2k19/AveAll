import {WFMComponent} from "../../framework";
import {templateComponent} from "./template.component";
import {appHeaderTop} from "../common/app.header-top";
import {accountComponent} from "./account-page.component";
import { wfm } from "../../framework/tools/unit";

class RegistrationComponent extends WFMComponent {

    constructor(config) {
        super(config)
        this.isLoggined = false;
        this.cardsInfo = [{src:"assets/img/card-photo-man3.png",
                            name: "ave classic sweatshirt",
                            cost: '32.11',
                            description: "Lorem ipsum dolor sit amet eras facilisis consectetur adipiscing elit lor, integer lorem consecteur dignissim laciniqui. Elementum metus facilisis ut phasellu."},
                            {src:"assets/img/card-photo-man3.png",
                            name: "ave classic sweatshirt",
                            cost: '32.11',
                            description: "Lorem ipsum dolor sit amet eras facilisis consectetur adipiscing elit lor, integer lorem consecteur dignissim laciniqui. Elementum metus facilisis ut phasellu."}]
    }

    events(){
        return {
            'click .login__button': "getRegisterInfo",
            'click .registration__button': "setRegisterInfo"
        }
    }

    getRegisterInfo(){

        let email = document.querySelector('#email-login').value
        let password = document.querySelector("#password-login").value

        let body = {
            "email":`${email}`,
            "password":`${password}`
        }

        if ((email != "")|| (password !="")){
        wfm.sendRequest('POST','/login', body).then(data => {
            // console.log(data)
            let elem = document.querySelector('.login-post')
                if (data == 1 || data == "1") {

                    if (elem.classList.contains('error')) {
                        elem.classList.remove('error')
                    }
                    elem.classList.add('success')
                    elem.textContent = "Access successful"
                    elem.style.display = 'block'
                    document.getElementById('header-top')
                        .parentElement.innerHTML = `        
                                                <div class="top-header--login" id="header-top">		 
                                                    <div class="container">
                                                        <div class="top-header--login__inner">
                                                            <div class="profile--login">
                                                                <a href="#account" class="profile__item--login item--account">account</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                        `

                    accountComponent.template = `
                                <div class="container">
                                    <div class="account">
                                         <div class="account-title">
                                             account info                 
                                        </div>
                                         <div class="account-info">
                                              <div class="account-email">
                                                   <span>Username:</span> ${email}                       
                                               </div>
                                        </div>   
                                        <div class="account-info">              
                                            Here will be information when it will be realised 
                                      </div>
                                    </div>
                                </div>`
                } else {
                    if (elem.classList.contains('success')) {
                        elem.classList.remove('success')
                    }
                    elem.classList.add('error')
                    elem.textContent = "Error in username or password"
                    elem.style.display = 'block'
                }
            })
            } else {
                let elem = document.querySelector('.login-post')
                if (elem.classList.contains('success')) {
                    elem.classList.remove('success')
                }
                elem.classList.add('error')
                elem.textContent = "Error in username or password"
                elem.style.display = 'block'
            }
        wfm.delay(1500).then(()=>{
            window.location.hash = "account"
        })

    }


    setRegisterInfo(){
        let email = document.querySelector('#email-register').value
        let password = document.querySelector("#password-register").value
        let passwordRepeat = document.querySelector("#password-register-repeat").value

        if ((email != ""|| password !="" || passwordRepeat != "") & (passwordRepeat == password)){
            let body = {
                "email": `${email}`,
                "password": `${password}`,
                "password-repeat": `${passwordRepeat}`
            }
            wfm.sendRequest('POST', '/register', body).then(data => {
                let elem = document.querySelector('.register-post')
                if (data == 1 || data == "1") {

                    if (elem.classList.contains('error')) {
                        elem.classList.remove('error')
                    }
                    elem.classList.add('success')
                    elem.textContent = "User's registered, now sign-in with auth form"
                    elem.style.display = 'block'

                } else {
                    if (elem.classList.contains('success')) {
                        elem.classList.remove('success')
                    }
                    elem.classList.add('error')
                    elem.textContent = "Some error, check up every field, may be there're mistakes"
                    elem.style.display = 'block'
                }
            })
        } else {
            let elem = document.querySelector('.register-post')
            if(elem.classList.contains('success')){
                elem.classList.remove('success')
            }
            elem.classList.add('error')
            elem.textContent = "Some error, check up every field, may be there're mistakes"
            elem.style.display = 'block'
        }
        document.querySelector('#email-register').value = ""
        document.querySelector("#password-register").value = ""
        document.querySelector("#password-register-repeat").value = ""
    }
    enterAllInfo(){
        return this.enterCards(this.cardsInfo)
    }

    enterCards(data){
        let result = ``;
        for(let i = 0; i < data.length; i++){
            result+= this.createBlock(data[i])
        }
        return result
    }
    createBlock(data){
        return `<div class="lookbook__item"  data-src="${data.src}"
                                               data-name="${data.name}"
                                               data-cost="${data.cost}"
                                               data-description="${data.description}">
                            <img src="${data.src}" alt="" class="lookbook__img">
                            <div class="lookbook-info">
                                  <p class="lookbook-info__cost">£${data.cost}</p>
                                  <i class="fas fa-search lookbook__icon"></i>
                                  <div class="lookbook-info__overview">${data.description}</div>
                        </div>
                    </div>
                   `
    }
}

export const registrationComponent = new RegistrationComponent({
    selector: 'app-registration',
    template: `  
        <div class="container">
             <div class="registration">
                  <section class="registration__sign-in">
                      <div class="registration__title">sign in</div>        
                      <div  class="registration__form">
                           <input type="email" id="email-login" placeholder="Enter your username here" class="registration__input" name="email">
                           <input type="password" id="password-login" placeholder="Enter your password here" class="registration__input" name="password">\
                           <div>
                            <button type="submit" class="button login__button">sign in</button>
                           </div> 
                    </div>    
                     <div class="login-post">Неправильный логин или пароль</div>
                </section>
                <section class="registration__sign-up">
                      <div class="registration__title">register</div>         
                      <div  class="registration__form">
                          <input type="email" id="email-register" placeholder="Enter your username here" class="registration__input" name="email">                
                          <input type="password" id="password-register" placeholder="Enter your password here" class="registration__input" name="password">
                          <input type="password" id="password-register-repeat" placeholder="Enter your password here" class="registration__input" name="password-repeat">      
                          <div>
                            <button type="submit" class="button registration__button">create account</button>   
                           </div> 
                    </div>      
                        <div class="register-post"></div>                             
                </section>       
            </div>   
        </div>     
    `
})