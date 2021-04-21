/*********************************************************
 *  VUE SLIDER
 *********************************************************/

const app = new Vue({
    el: '#app',
    data: {
        title: 'THE CRYPTO WORLD',
        // IMAGES ARRAY
        photos: [
            './img/1.jpg',
            './img/2.jpg',
            './img/3.jpg',
            './img/4.jpg',
        ],
        
        // INITIAL INDEX
        indexPhoto: 0,
    },
    methods: {
        // CLICK PREV PHOTO
        prevPhoto () {
            this.indexPhoto -= 1;

            // CHECK END
            if(this.indexPhoto < 0) {
                this.indexPhoto = this.photos.length -1
            }
        },
        // CLICK NEXT PHOTO
        nextPhoto () {
            this.indexPhoto += 1;

            // CHECK END
            if(this.indexPhoto > (this.photos.length -1) ) {
                this.indexPhoto = 0;
            }
        },
        // SET PHOTO
        setPhoto (index) {
            this.indexPhoto = index;
        }
    }
});

