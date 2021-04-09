
let overlayDiv = document.getElementById('image-overlay');


let imagesContainer = document.getElementById('images-container');

let image2 = document.getElementById('image_2');
let width = imagesContainer.offsetWidth;

// dodaj na onload
image2.style.width = imagesContainer.offsetWidth - 8 + "px";



// window.addEventListener('resize', changeOverlayWidth);


window.addEventListener('onload', compareImages(overlayDiv));


    function compareImages(img) {

      let pos = 0;
      window.addEventListener('resize', changeOverlayWidth);

      function changeOverlayWidth() {
        image2.style.width = imagesContainer.offsetWidth  - 8 + "px";
        if (pos > imagesContainer.offsetWidth) {
         
          slider.style.left = (imagesContainer.offsetWidth) - (slider.offsetWidth / 2) + "px";
          console.log('slider: ' + slider.style.left);
          overlayDiv.style.width = imagesContainer.offsetWidth  - 8 + "px"

        };

      }

     
      var slider, img, clicked = 0, w, h;
      /*get the width and height of the img element*/
      w = img.offsetWidth;
      h = img.offsetHeight;
      /*set the width of the img element to 50%:*/
      img.style.width = (w / 2) + "px";
      /*create slider:*/
      slider = document.createElement("DIV");
      slider.setAttribute("class", "image-slider");
      /*insert slider*/
      img.parentElement.insertBefore(slider, img);
      /*position the slider in the middle:*/
      slider.style.top = (h / 2) - (slider.offsetHeight / 2) + "px";
      slider.style.left = (w / 2) - (slider.offsetWidth / 2) + "px";
      /*execute a function when the mouse button is pressed:*/
      slider.addEventListener("mousedown", slideReady);
      /*and another function when the mouse button is released:*/
      window.addEventListener("mouseup", slideFinish);
      /*or touched (for touch screens:*/
      slider.addEventListener("touchstart", slideReady);
      /*and released (for touch screens:*/
      window.addEventListener("touchend", slideFinish);
      
      function slideReady(e) {
        /*prevent any other actions that may occur when moving over the image:*/
        e.preventDefault();
        /*the slider is now clicked and ready to move:*/
        clicked = 1;
        /*execute a function when the slider is moved:*/
        window.addEventListener("mousemove", slideMove);
        window.addEventListener("touchmove", slideMove);
    
      }
      function slideFinish() {
        /*the slider is no longer clicked:*/
        clicked = 0;

     
      }
      function slideMove(e) {
        // var pos;
        /*if the slider is no longer clicked, exit this function:*/
        if (clicked == 0) return false;
        /*get the cursor's x position:*/
        if(e.type == "mousemove") {
          // If the type of event is mousemove get cursor position, if not get touch position
          pos = getCursorPos(e);
          console.log("Pos_2 " + pos);
        } else {
          pos = getTouchPos(e);
        }
        /*prevent the slider from being positioned outside the image:*/
        if (pos < 0) pos = 0;
        if (pos > imagesContainer.offsetWidth) pos = imagesContainer.offsetWidth;

        // if (pos > w) pos = w;
        /*execute a function that will resize the overlay image according to the cursor:*/
        // console.log("pos: " + pos);
        slide(pos);

      }

      function getTouchPos(e) {
        var a, x, y = 0;
        e = e || window.event;
        /*get the x positions of the image:*/
        a = img.getBoundingClientRect();
        /*calculate the cursor's x coordinate, relative to the image:*/
        y = parseInt(e.touches[0].clientX);
        /*consider any page scrolling:*/
        x = x - window.pageXOffset;
        return y;
      }

      function getCursorPos(e) {
        var a, x, y = 0;
        e = e || window.event;
        /*get the x positions of the image:*/
        a = img.getBoundingClientRect();
        /*calculate the cursor's x coordinate, relative to the image:*/
       
        x = e.pageX - a.left;

        
        // x = e.pageX;
        // y = e.pageX;
        // console.log("Y: " + y);
        /*consider any page scrolling:*/
        x = x - window.pageXOffset;
  
        return x;
      }
      function slide(x) {
        /*resize the image:*/
        img.style.width = x + "px";
        /*position the slider:*/
        slider.style.left = img.offsetWidth - (slider.offsetWidth / 2) + "px";

      }

      window.addEventListener('resize', function() {
        
        // if (pos > imagesContainer.offsetWidth) {
         
        //   slider.style.left = imagesContainer.offsetWidth + "px";
        //   console.log('slider: ' + slider.style.left);
        // };
      })

    }
  // }
// W3Schools Code ends here

// Image upload functions

let button_1 = document.getElementById('upload-button-1');
let button_2 = document.getElementById('upload-button-2');

// Function call on window load
window.addEventListener('load', imageUpload());

// Upload button (page refresh)
document.getElementById('reset').addEventListener('click', function(){ location.reload();});

// Image Upload function
function imageUpload() {
    
    let img_1 = document.getElementById('image_2');
    let img_2 = document.getElementById('image_1');
    //  call function on event change

    // Add event listeners on buttons, Get image URLs on img src tag

    button_1.addEventListener('change', function(){
        if (this.files && this.files[0]) {
            img_1.onload = () => {
                URL.revokeObjectURL(img_1.src);
            }
            img_1.src = URL.createObjectURL(this.files[0]);
        }
    });

    button_2.addEventListener('change', function(){
        if (this.files && this.files[0]) {
            img_2.onload = () => {
                URL.revokeObjectURL(img_2.src);
            }
            img_2.src = URL.createObjectURL(this.files[0]);
        }
    })


}

// File upload button label customization

let file_1Label = document.getElementById('file-1-label');
let file_2Label = document.getElementById('file-2-label');

button_1.addEventListener('change', function(){
    file_1Label.textContent = this.files[0].name;
});

button_2.addEventListener('change', function(){
    file_2Label.textContent = this.files[0].name;
});

// Add border button 

let borderButton = document.getElementById('border-button');

borderButton.addEventListener('click', function() {
  overlayDiv.classList.toggle('slider-border');
  changeLabel();
});

// Change border button label

function changeLabel() {
  if(overlayDiv.classList.contains('slider-border'))
    { borderButton.innerHTML = "Remove border"; }
    else {borderButton.innerHTML = "Add border"};
}

