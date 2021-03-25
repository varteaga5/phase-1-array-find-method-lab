function superbowlWin (record) {
    const x = record.find(isW)
    if (x) {
    return x.year
    } else {
        return undefined
    }
}

function isW(element, index, array) {
    return (element.result === 'W')
}
