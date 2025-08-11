export function selectFrom (e) {
    const cityFrom = document.getElementById('city-from')
    const cityTo = document.getElementById('city-to')
    
    if (cityFrom.value == 'vvo') {
        cityTo.innerHTML = `
            <option value="pek" selected>Пекин</option>
            <option value="hrb">Харбин</option>
            <option value="sha">Шанхай</option>
            <option value="can">Гуанчжоу</option>
        `
    } else {
        cityTo.innerHTML = `
            <option value="pek">Пекин</option>
            <option value="hrb">Харбин</option>
            <option value="sha">Шанхай</option>
            <option value="can" selected>Гуанчжоу</option>
        `
    }
}

export function selectTo (e) {
    const cityFrom = document.getElementById('city-from')
    const cityTo = document.getElementById('city-to')

    if (cityTo.value == 'can') {
        cityFrom.innerHTML = `
            <option value="vvo">Владивосток</option>
            <option value="msk" selected>Москва</option>
        `
    } else {
        cityFrom.innerHTML = `
            <option value="vvo" selected>Владивосток</option>
            <option value="msk">Москва</option>
        `
    }
}