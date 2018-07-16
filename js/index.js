function preload() {
    const imagesList = [
                   "./img/wave.jpg",
                       "./img/wild.jpg",
                     "./img/heat.jpg"];

    const images = [];
    for (let i = 0; i < imagesList.length; i++) {
        images[i] = new Image();
        images[i].src = imagesList[i];
    }

    console.log('Images preloaded : \n\t ${images[0].src} \n\t ${images[1].src} \n\t ${images[2].src}');
};

window.addEventListener("load", preload);

var btnlist = document.querySelectorAll("button");

var obj = {
    wave: {
        headingcont:'wave',
        bodytxt: "Wave power is the capture of energy of wind waves to do useful work – for example, electricity generation, water desalination, or pumping water. A machine that exploits wave power is a wave energy converter (WEC).",
        imgurl: './img/wave.jpg',
        imgAlt: 'wave'
    },
    wind: {
        headingcont: 'wind',
        bodytxt: "Wind power is the use of air flow through wind turbines to provide the mechanical power to turn electric generators. Wind power, as an alternative to burning fossil fuels, is plentiful, renewable, widely distributed, clean, produces no greenhouse gas emissions during operation, consumes no water, and uses little land.[2] The net effects on the environment are far less problematic than those of nonrenewable power sources.",
        imgurl: './img/wind.jpg',
        imgAlt: 'wind'
    },
    heat: {
        headingcont: 'heat',
        bodytxt: "Geothermal energy is thermal energy generated and stored in the Earth. Thermal energy is the energy that determines the temperature of matter. The geothermal energy of the Earth's crust originates from the original formation of the planet and from radioactive decay of materials (in currently uncertain[1] but possibly roughly equal proportions). The geothermal gradient, which is the difference in temperature between the core of the planet and its surface, drives a continuous conduction of thermal energy in the form of heat from the core to the surface. The adjective geothermal originates from the Greek roots, meaning earth,thermos meaning hot.",
        imgurl: './img/heat.jpg',
        imgAlt: 'heat'
    },
}

var ref = document.getElementsByClassName("content");

btnlist[0].setAttribute("id", "active");

ref[0].innerHTML = `<h1>${obj.wave.headingcont}</h1>
                      <img src ="${obj.wave.imgurl}" alt="${obj.wave.imgAlt}" style="width:350px; height:350px;">;
                      <p>${obj.wave.bodytxt}</p>`;

function contenthandler(e) {
    for (let i = 0; i < btnlist.length; i++) {
        if (btnlist[i].hasAttribute("id")) {
            btnlist[i].removeAttribute("id");
        }
    }

    e.target.setAttribute("id", "active");
    /*
       Use the element-object method setAttribute() to set the id active-button
       to the currently clicked button. */


    for (let i = 0; i < btnlist.length; i++) {
        if (btnlist[i].hasAttribute("id")) {
            if (i == 0) {
                ref[0].innerHTML = `<h1>${obj.wave.headingcont}</h1>
                              <img src ="${obj.wave.imgurl}" alt="${obj.wave.imgAlt}">;
                              <p>${obj.wave.bodytxt}</p>`;
            }
            if (i == 1) {
                ref[0].innerHTML = `<h1>${obj.wind.headingcont}</h1>
                              <img src ="${obj.wind.imgurl}" alt="${obj.wind.imgAlt}" >;
                              <p>${obj.wind.bodytxt}</p>`;
            }
            if (i == 2) {
                ref[0].innerHTML = `<h1>${obj.heat.headingcont}</h1>
                              <img src ="${obj.heat.imgurl}" alt="${obj.heat.imgAlt}" >;
                              <p>${obj.heat.bodytxt}</p>`;
            }
        }
    }

    /*
    Use conditional and event-object to check which button is clicked
    and based on that, create HTML with the data inside the backticks:
    `<h1>${headingContent}</h1>
     <img src="${imgUrl}" alt="${imgAlt}">
     <p>${bodyText}</p>`
    Assign this content to to your HTML-container that will
    be dynamically loaded (you already got the reference to
    this container before you started the function handleSelection) */

}

for (let i = 0; i < btnlist.length; i++) {
    btnlist[i].addEventListener("click", contenthandler);
}
window.addEventListener("click", contenthandler);
