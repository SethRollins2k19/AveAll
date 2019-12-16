export const wfm = {
	delay (ms = 1000) {
		return new Promise ((resolve,reject)=>{
			setTimeout(() => {
			  resolve();
			}, ms)
		})	
	},

	isUndefined (definition) {
	    return typeof definition === 'undefined'
    },
    scrollInit(selector){
        // if(isScroll == 0) {
            // isScroll = 1;

            scrollToPosition(selector)
        // } else return;
        console.log(selector);
        function scrollToPosition(selector){
            let ourPos = pageYOffset;
            console.log(ourPos);
            let contPos = document.querySelector(selector.dataset.scrollId).getBoundingClientRect().top + pageYOffset - 50;
            console.log(contPos);
            if(ourPos > contPos){
                let timer = setInterval(()=>{
                    if (pageYOffset < contPos){
                        clearInterval(timer);
                        // isScroll = 0;
                    } else {
                        scrollTo(0, ourPos);
                        ourPos-=10;
                    }}, 5)
            } else {
                let timer = setInterval(() => {
                    if (pageYOffset > contPos ){
                        clearInterval(timer);
                        // isScroll = 0;
                    } else {
                        scrollTo(0, ourPos);
                        ourPos+=10;
                    }
                }, 5)
            }
        }
        console.log(selector);
    }
}
// export class Scroll {
//
//
//     constructor(config){
//         this.isScroll = false;
//         this.selector = config.selector;
//         // this.data = this.selector.data.scrollId;
//     }
//
//
// }