
var mortySelected = mortys
                        .filter(morty => morty.dimension === 'unknown')
                        .map(morty => morty.name)
                        .join('');