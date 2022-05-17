import * as laxJs from "https://cdn.skypack.dev/lax.js@2.0.3";
// //lax js init
// window.onload = function() {
// 	lax.setup() // init

// 	const updateLax = () => {
// 		lax.update(window.scrollY)
// 		window.requestAnimationFrame(updateLax)
// 	}

// 	window.requestAnimationFrame(updateLax)
// }

  window.onload = function () {
    lax.init()

    // Add a driver that we use to control our animations
    lax.addDriver('scrollY', function () {
      return window.scrollY
    })

    // Add animation bindings to elements
    lax.addElements('.lax', {
      scrollY: {
        translateX: [
          [0, '20'],
          [0, '670'],
        ]
      }
    })
  }