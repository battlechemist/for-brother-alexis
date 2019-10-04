import {format, parseISO, isToday, isYesterday} from 'date-fns';
import {ru} from "date-fns/locale";

export function formatDate(date, dateFormat) {
    let parsedDate = date;

    if (typeof date === 'string') {
        parsedDate = parseISO(date);
    }

    return format(parsedDate, dateFormat, { locale: ru })
}

export function getDateForTitle(date, dateFormat) {
    const parsedDate = parseISO(date);

    if (isToday(parsedDate)) {
        return 'Сегодня';
    }

    if (isYesterday(parsedDate)) {
        return 'Вчера';
    }

    return formatDate(parsedDate, dateFormat);
}