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
    scrollInit(target,isScroll){
	    if(isScroll == 0){
	        isScroll = 1;
            this.scrollToPosition(target)
        } else return;
    },
    scrollToPosition(selector, isScroll){
    let ourPos = pageYOffset;
    let contPos = document.querySelector(selector.dataset.scrollId).getBoundingClientRect().top + pageYOffset - 50;
    if(ourPos > contPos){
        let timer = setInterval(()=>{
            if (pageYOffset < contPos){
                clearInterval(timer);
                isScroll = 0;
            } else {

                ourPos-=10;
            }}, 5)
    } else {
        let timer = setInterval(() => {
            if (pageYOffset > contPos ){
                clearInterval(timer);
                isScroll = 0;
            } else {
                scrollTo(0, ourPos);
                ourPos+=10;
            }
        }, 5)
    }
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