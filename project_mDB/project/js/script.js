/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';


//1
let adv = document.querySelectorAll('.promo__adv img'),
    genre = document.querySelector('.promo__genre'),
    img = document.querySelector('.promo__bg'),
    films = document.querySelector('.promo__interactive-list');

let advRemover = () => {
    adv.forEach(item => {
        item.remove();
    })
}

advRemover();

let makeChanges = () => {
    genre.innerHTML = 'Драма';
    img.style.backgroundImage = "url('img/bg.jpg')";

};

makeChanges();


const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Искупление",
        "Скотт Пилигрим против..."
    ]
};

let sortArr = (arr) => {
    arr.sort();
}

//let sorted = movieDB.movies.sort();


function createMovieList(arr, parent) {
    parent.innerHTML = '';
    sortArr(arr);

    arr.forEach((item, i) => {
        parent.innerHTML += `<li class="promo__interactive-item">${i+1}. ${item}
                <div class="delete"></div>
            </li>`;
    });
}

createMovieList(movieDB.movies, films);





/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

let form = document.querySelector('.add'),
    input = form.querySelector('.adding__input'),
    button = form.getElementsByTagName('button')[0],
    trash = document.querySelectorAll('.delete'),
    box = form.getElementsByTagName('input')[1];

let nameFilm;

button.addEventListener('click', function(e) {
    e.preventDefault();
    nameFilm = input.value;
    let checkbox = box.checked;

    if (nameFilm) {
        movieDB.movies.push(nameFilm);

        sortArr(movieDB.movies);
        console.log(movieDB);

        createMovieList(movieDB.movies, films);
    }

    if (checkbox) {
        console.log('Добавляем любимый фильм');
    }

    if (nameFilm.length > 20) {
        nameFilm = nameFilm.slice(0, 21) + '...';
    }

    form.reset();

    // for (let i = 0; i < movieDB.movies; i++) {
    //     if (sorted[i] != movieDB.movies[i]) sorted.splice(i, 0, movieDB.movies[i])
    // }

    //     console.log(sorted);
    //     films.innerHTML += `<li class="promo__interactive-item">${sorted.length}. ${nameFilm}
    //     <div class="delete"></div>
    // </li>`;

});


trash.forEach((film, i) => {
    film.addEventListener('click', function(e) {
        film.parentElement.remove();
        movieDB.movies.splice(i, 1);
        createMovieList(arr, parent);
        //let parent = e.target.parentElement;
    });
});




//let a = 0;

// box.addEventListener('click', function(e) {
//     if (a % 2 == 0) {
//         e.target.setAttribute('checked', 'checked');
//         a++;

//     } else {
//         e.target.removeAttribute('checked');
//         a++;
//     }

//     if (box.hasAttribute('checked')) console.log('Добавляем любимый фильм');

// });