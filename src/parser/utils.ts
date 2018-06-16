import { getPage } from './events'

export const mainRoot =
    'body > div.g-page > div.l-content.m-content > div > div.col70.m-cola > div > div > div.col50.m-cola'

export const selectors = {
    events: `${mainRoot} > article.b-postcard`,
    cities: `${mainRoot} > div.page-head > h1 > select:nth-child(2) > option`,
    topics: `${mainRoot} > div.page-head > h1 > select:nth-child(3) > option`,
}

export function getTags() {
    return getPage({ fromArchive: true }).then(page => {
        if (page) {
            const cities = page(selectors.cities)
                .map((i, el) => el.children[0].data)
                .get()
                .map(str => {
                    if (str === 'онлайн') str = 'online'
                    return str
                })

            const topics = page(selectors.topics)
                .map((i, el) => el.children[0].data)
                .get()

            return { topics, cities }
        }
    })
}

export const tags = {
    topics: [
        '.NET',
        '1C',
        '3D',
        'Agile',
        'AI',
        'Algorithms',
        'Android',
        'APL',
        'BA',
        'big data',
        'Blockchain',
        'C',
        'C++',
        'Clojure',
        'cloud',
        'Data Science',
        'Database',
        'DevOps',
        'Erlang',
        'F#',
        'Flash',
        'Front-end',
        'gamedev',
        'Go',
        'golang',
        'Groovy',
        'hardware',
        'Haskell',
        'highload',
        'HR',
        'iOS',
        'IoT',
        'Java',
        'JavaScript',
        'Kotlin',
        'Linux',
        'Lisp',
        'Lua',
        'Microsoft',
        'ML',
        'mobile',
        'Perl',
        'PHP',
        'PM',
        'Python',
        'QA',
        'R',
        'Ruby',
        'Rust',
        'SaaS',
        'Sales',
        'Scala',
        'Scrum',
        'VR',
        'английский',
        'безопасность',
        'бизнес',
        'благотворительность',
        'вебинар',
        'вечеринка',
        'вечерника',
        'дайджест',
        'дизайн',
        'карьера',
        'клубные встречи',
        'конкурс',
        'конференция',
        'курсы',
        'маркетинг',
        'менеджмент',
        'семинар',
        'сертификация',
        'соревнование',
        'соревнования',
        'стартап',
        'тестирование',
        'технологии',
        'ФП',
        'фриланс',
        'хакатон',
    ],
    cities: [
        'Алушта',
        'Амстердам',
        'Анахейм',
        'Атланта',
        'Афины',
        'Белая Церковь',
        'Берлин',
        'Бостон',
        'Братислава',
        'Брно',
        'Брюссель',
        'Будапешт',
        'Бухарест',
        'Варшава',
        'Вена',
        'Вильнюс',
        'Винница',
        'Вроцлав',
        'Гданьск',
        'Гродно',
        'Днепр',
        'Донецк',
        'Дорнбирн',
        'Екатеринбург',
        'Житомир',
        'Запорожье',
        'Ивано-Франковск',
        'Ирпень',
        'Казань',
        'Киев',
        'Копенгаген',
        'Краков',
        'Краматорск',
        'Кременчуг',
        'Кривой Рог',
        'Кропивницкий',
        'Курортное',
        'Лондон',
        'Луганск',
        'Луцк',
        'Львов',
        'Мариуполь',
        'Мелитополь',
        'Минск',
        'Москва',
        'Мюнхен',
        'Николаев',
        'Новосибирск',
        'Нью-Йорк',
        'Одесса',
        'Оксфорд',
        'Орхус',
        'Осло',
        'Остин',
        'Париж',
        'Познань',
        'Полтава',
        'Прага',
        'Рига',
        'Ровно',
        'Самара',
        'Сан-Франциско',
        'Санкт-Петербург',
        'Санта-Клара',
        'Севастополь',
        'Северодонецк',
        'Симферополь',
        'Сиэтл',
        'Сиэттл',
        'Солигорск',
        'София',
        'Сплит',
        'Спокан',
        'Стамбул',
        'Стокгольм',
        'Сумы',
        'Таллинн',
        'Тель-Авив',
        'Тернополь',
        'Турку',
        'Ужгород',
        'Флоренция',
        'Харьков',
        'Хельсинки',
        'Херсон',
        'Хмельницкий',
        'Челябинск',
        'Черкассы',
        'Чернигов',
        'Черновцы',
        'Чешке-Будейовице',
        'Шацк',
        'online',
    ],
}