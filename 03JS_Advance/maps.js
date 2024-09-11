const details = new Map()
details.set('In','India')
details.set('Us','Usa')
details.set('cn','China')

for (const [key, value] of details) {
    console.log(key,':-',value);   
}

// Cannot apply forin loop as it is not iterable