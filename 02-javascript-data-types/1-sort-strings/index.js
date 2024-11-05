/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
    const clonedArr = Array.from(arr);

    if (param === 'asc') {
        return toAscSort(clonedArr);
    } else if (param === 'desc') {
        return toDeskSort(clonedArr);
    }
}

function toAscSort(array) {
    return array.sort((currentElem, nextElem) => 
        currentElem.localeCompare(nextElem, ['ru', 'en'], {caseFirst: 'upper'}));
}

function toDeskSort(array) {
    return array.sort((currentElem, nextElem) => 
        nextElem.localeCompare(currentElem, ['ru', 'en'], {caseFirst: 'upper'}));
}
