



  //nav menu bar
    const toggleBtn =document.querySelector('.toggle_btn')
    const toggleBtnIcon =document.querySelector('.toggle_btn i')
    const dropDownMenu =document.querySelector('.dropdown_menu')

     toggleBtn.onclick = function name(params){
        dropDownMenu.classList.toggle('open')
        const isOpen = dropDownMenu.classList.contains('open')
         toggleBtnIcon.classList =isOpen
         ? 'fa-solid fa-xmark'
         : 'fa-solid fa-bars'
     }
   



     window.addEventListener('scroll', function() {
  var header = document.getElementById('header');
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});
//******************************


      // play/pause video
      let video = document.querySelector('.video-wrapper video');
            document.getElementById('play-btn').addEventListener('click', () => {
                if(video.paused){
                    video.play();
                } else {
                    video.pause();
                }
            });




//popup masge get int patner
const popupButton = document.getElementById('popup-button');
const popupMessage = document.getElementById('popup-message');
const yesButton = popupMessage.querySelector('.yes');
const noButton = popupMessage.querySelector('.no');
const counterDisplay = document.getElementById('counter-display');
let counter = 2104;

popupButton.addEventListener('click', () => {
    popupMessage.classList.add('active');
});

yesButton.addEventListener('click', () => {
    counter++;
    counterDisplay.querySelector('#counter').textContent = counter;
    popupMessage.classList.remove('active');
});
noButton.addEventListener('click', () => {
    popupMessage.classList.remove('active');
});

//*****************************************


//vue js commen section ************************
    new Vue({
        el: '#app',
        data: {
            comments: [
                {
                    initial: 'N',
                    nickname: 'NIsal',
                    text: 'Beautiful scenery captivates, leaving serene minds amid nature\'s embrace.'
                }
                // Add more comments here if needed
            ],
            newComment: {
                user: '',
                comment: ''
            }
        },
        methods: {
            submitForm() {
                if (this.newComment.user && this.newComment.comment) {
                    this.comments.push({
                        initial: this.newComment.user.charAt(0).toUpperCase(),
                        nickname: this.newComment.user,
                        text: this.newComment.comment
                    });
                    this.newComment.user = '';
                    this.newComment.comment = '';
                } else {
                    alert('Please fill in both fields.');
                }
            },
            reply(index) {
                // Handle reply functionality if needed
                console.log('Reply to comment at index', index);
            }
        }
    });
