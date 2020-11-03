export const updateObjectInArray = (items, itemsId, objectProperty, newObjProps) => {
    return items.map((item) => {
        if (item[objectProperty] === itemsId) {
            return {...item, ...newObjProps}
        }
        return item;
    })
}