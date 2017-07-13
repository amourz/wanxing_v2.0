
//domReady
const plusReady = function (fn) {
	 if (window.plus) {
      setTimeout(fn, 0)
    } else {
      document.addEventListener("plusready", fn, false)
    }
	//return this
}

//plusReady(()=>{
// 
//})

module.exports =  plusReady