const menuOut = () => {
    document.querySelector(".menuHead").classList.add("menuOut");
}

const menuIn = () => {
    document.querySelector(".menuHead").classList.remove("menuOut");
}

const scroll = () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
    
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}


const neroScroll = () => {
    document.querySelector('.neroSpace').addEventListener('scroll', () => {
        if(document.querySelector('.neroSpace').scrollTop >= 100) {
            document.querySelector(".mainNav").classList.add("bg-white");
            document.querySelector(".aboutPointer").style.opacity = "0"
        }else {
          document.querySelector(".mainNav").classList.remove("bg-white");
          document.querySelector(".aboutPointer").style.opacity = "1"
        }
    })
}


export {menuIn, menuOut, scroll, neroScroll}