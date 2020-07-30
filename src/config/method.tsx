import _ from 'lodash';

export const generateRandom = function (min, max) {
    var ranNum = Math.floor(Math.random() * (max - min + 1)) + min;
    return ranNum;
};

export function paginate(items, pageNumber, pageSize) {
    const startIndex = (pageNumber - 1) * pageSize; // 자를 배열의 시작점

    /* 배열을 lodash wrapper로 변형 */
    return _(items)
        .slice(startIndex) // 시작점부터 배열을 자르되
        .take(pageSize) // pageSize만큼의 배열을 취함
        .value(); // lodash wrapper 객체를 regular 배열로 변환
}
