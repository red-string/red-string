export interface Thing {
    nuts: string
}

export const mine: Thing = {
  nuts: 'caio baby'
}

export function isNuts (thing: Thing): boolean {
  return true
}

isNuts(mine)
const cool = true
