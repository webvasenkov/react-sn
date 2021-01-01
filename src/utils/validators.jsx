export const requiredField = (value) => {
    return !value ? ('Field is required') : (undefined)
}

const maxLength = (length) => (value) =>{
    if (value.length > length) {
        return `Max length is ${length} symbols`
    } else
        return undefined
}

export const maxLength30 = maxLength(30)
