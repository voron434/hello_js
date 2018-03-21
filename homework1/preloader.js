let preloader = document.getElementById("preloader_preload")

const fadeOutnojquery = (el) => {
  el.style.opacity = 1;
  let interpreloader = setInterval( () => {
      el.style.opacity = el.style.opacity - 0.05
      if (el.style.opacity <=0.05) {
        clearInterval(interpreloader)
        preloader.style.display = "none"
      }
    }
    ,16
  )
}

window.onload = () => setTimeout(
  () => fadeOutnojquery(preloader),1000
)
