let photo = ['Images/photo1.jpg', 'Images/photo2.jpg', 'Images/photo3.jpg',
    'Images/photo4.jpg', 'Images/photo5.jpg', 'Images/photo6.jpg', 'Images/photo7.jpg',
    'Images/photo8.jpg', 'Images/photo9.jpg',]
// console.log(photo)
let title = ['Tavasz Japánban', 'Bory-vár', 'Ködben', 'Hubertlaki-tó', 'Giewont',
    'Disznócska', 'Nagy-Hárs-hegy', 'Bakulya-sori szélmalom', 'Prédikálószék',]
// console.log(title)
let description = ['Szép kert az első napon Kyoto-ban', 'Egy szép nap a székesfehérvári Bory-várban',
    'Pásztor kunyhók a Nagy-Bihar alatt', 'A bakonyi "Gyilkos-tó"', 'Pihenő a Giewont-nyereg alatt',
    'Felejthetetlen túra a Lengyel-Tátrában', 'Kilátás a János-hegyre a Kaán Károly kilátóból',
    'Elhagyott szélmalom a Békés megyei Örménykút közelében', 'A Dunakanyar a Prédikálószéki-kilátóból']
// console.log(description[4])

// let data = {
//     photo: 'Images/photo1.jpg',
//     title: 'Tavasz Japánban',
//     description: 'Szép kert az első napon Kyoto-ban',
// };

// console.log(data)

//   $('#photo').attr('src', data.photo);
//   $('#photo-title').text(data.title);
//   $('#photo-description').text(data.description);


// let currentPhoto = 0;
// let imagesData = [photo[currentPhoto], title[currentPhoto], description[currentPhoto]];
// console.log(imagesData)
let currentPhoto = 0;

let loadPhoto = (photoNumber) => {

    let imagesData = [photo[currentPhoto], title[currentPhoto], description[currentPhoto]];
    $('#photo').attr('src', imagesData[0]); // imagesData 0 = fotó elérési út, 1 = cím, 2 = leírás
    $('#photo-title').text(imagesData[1]);
    $('#photo-description').text(imagesData[2]);
    $('.thumbs').removeClass('active')      // kiemeli az aktív thumbnailt
    $(`.thumbs[data-index=${currentPhoto}]`).addClass('active')
}

loadPhoto(currentPhoto);

$('#right-arrow').click(() => {     /* előre lapozás */
    if (currentPhoto < 8) {
        currentPhoto++;
        loadPhoto(currentPhoto);
    } else {
        currentPhoto = 0;
        loadPhoto(currentPhoto);
    }
})
$('#left-arrow').click(() => {      /* vissza lapozás */
    if (currentPhoto > 0) {
        currentPhoto--;
        loadPhoto(currentPhoto);
    } else {
        currentPhoto = 8;
        loadPhoto(currentPhoto);
    }
})

// console.log(photo)

photo.forEach((item, index) => {    /* betölti a képeket a thumbnailekbe */
    // console.log(item + index)
    // $('.thumbnails').append(`<div class="box" photo-index="${index}">
    // ${item} (photo-index="${index}")</div>`);
    $('.thumbnails').append(`<div class="thumbcont"><div class="thumbtitle">${title[index]}</div><img class="thumbs" data-index="${index}"
     id="thumb${index}" src="${item}"></div>`)


    $('img.thumbs').click(() => {       /*thumbnail kattintást végrehajtja */
        let indexClicked = $(event.target).attr('data-index');
        let numberIndex = parseInt(indexClicked);
        currentPhoto = numberIndex
        loadPhoto(currentPhoto);
        // $('#thumb'+currentPhoto).css('border-width', '3px')
        
    })


});
$(`.thumbs[data-index=${currentPhoto}]`).addClass('active')