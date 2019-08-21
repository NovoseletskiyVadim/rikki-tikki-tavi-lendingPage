
$(function(){
    var data = [
        { "date": "2019-08-24 09:00:00", "title": "День незалежності України. Вітаємо усіх зі спільним об'єднуючим Святом нації!", "description": "", "url": "" },
        { "date": "2019-08-27 08:00:00", "title": "Відновлення діяльності дитячого клубу повного дня перебування 'Ріккі-Тіккі-Таві'", "description": "", "url": "" },
        { "date": "2019-09-01 09:00:20", "title": "День Знань. Вітаємо наших випускників з новим навчальним роком у школі!", "description": "", "url": "" },
        { "date": "2019-09-02 11:00:00", "title": "Зустріч з дошкільнятами. Запрошуємо дітей-школярів на зустріч з дошкільнятами дитячого клубу 'Ріккі-Тіккі-Таві' для привітання, бесіди, естафети", "description": "", "url": "" },
    ];
    $('#eventCalendar').eventCalendar({
        jsonData: data,
        eventsjson: 'data.json',
        jsonDateFormat: 'human',
        startWeekOnMonday: true,
        openEventInNewWindow: true,
        dateFormat: 'DD-MM-YYYY',
        showDescription: false,
        locales: {
            locale: "ru",
            txt_noEvents: "Відсутні заплановані події",
            txt_SpecificEvents_prev: "",
            txt_SpecificEvents_after: ":",
            txt_NextEvents: "Наступна подія:",
            txt_GoToEventUrl: "Дивитися",
            moment: {
                "months" : [ "Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень",
                "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень" ],
                "monthsShort" : [ "Янв", "Фев", "Мар", "Апр", "Май", "Июн",
                "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек" ],
                "weekdays" : [ "Неділя", "Понеділок","Вівторок","Середа","Четверг",
                "П'ятница","Суббота" ],
                "weekdaysShort" : [ "Нд","Пн","Вт","Ср","Чт",
                "Пт","Сб" ],
                "weekdaysMin" : [ "Нд","Пн","Вт","Ср","Чт",
                "Пт","Сб" ]
            }
        }
    });
});