export const updateObjectInArray = (items, itemsId, objectProperty, newObjProps) => {
    return items.map((item) => {
        if (item[objectProperty] === itemsId) {
            return {...item, ...newObjProps}
        }
        return item;
    })
}

export const setImg = (links, names) => {
    new Array(links)
    new Array(names)
    const arrayImg = new Array()
    for (let i = 0; i <= links.length; i++) {
        arrayImg[i] = new Image()
        arrayImg[i].src = links[i]
        arrayImg[i].name = names[i]
    }
    return arrayImg
}

export const getImg = (arrayImg, comparable) => {
    for (let i = 0; i <= arrayImg.length - 1; i++) {
        if (arrayImg[i].name === comparable) {
            return arrayImg[i].src
        }
    }
}