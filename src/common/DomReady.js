
//domReady
const DomReady = function (fn) {
	let readyRE = /complete|loaded|interactive/
	if (readyRE.test(document.readyState)) {
		setTimeout(fn, 0)
	} else {
		document.addEventListener('DOMContentLoaded', fn)
	}
	return this
}

//ready(()=>{
// 
//})

module.exports = DomReady