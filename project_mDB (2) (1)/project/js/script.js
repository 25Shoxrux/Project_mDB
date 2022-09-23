/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против...",
        "Скотт Пилигрим против..."
    ]
};

let promoImg = document.querySelectorAll('.promo__adv img')
let promo__genre = document.querySelector('.promo__genre')
let promo__bg = document.querySelector('.promo__bg')
let ul = document.querySelector('.promo__interactive-list')


promoImg.forEach((img) => {
    img.remove(img)
})

promo__genre.innerHTML = "Драма"
promo__bg.style.background = "url('./img/bg.jpg')"


movieDB.movies.forEach((item, index) =>{
    let li = document.createElement('li')
    let delet = document.createElement('div')

    li.classList.add('promo__interactive-item')

    li.innerHTML = `${index + 1}.${item}`

    delet.classList.add('delete')

    ul.append(li)
    li.append(delet)
})

