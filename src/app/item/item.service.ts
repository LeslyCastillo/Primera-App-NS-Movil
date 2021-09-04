import { Injectable } from '@angular/core'

import { Item } from './item'

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  private items = new Array<Item>(
    { id: 1, name: 'Lesly Castillo', descripcion: 'Unica e imcomparable y esponjosa.', role: 'Reina' },
    { id: 2, name: 'Karol Castillo', descripcion: 'Comida los tres tiempos', role: 'Cocinera' },
    { id: 3, name: 'Esther Castillo', descripcion: 'Se parece a la reina', role: 'Princesa' },
    { id: 4, name: 'Victor Castillo', descripcion: 'Es un buen sujueto', role: 'Caballero' },
    { id: 5, name: 'Carlitos Castillo', descripcion: 'A veces trabaja', role: 'Obrero' }
  )

  getItems(): Array<Item> {
    return this.items
  }

  getItem(id: number): Item {
    return this.items.filter((item) => item.id === id)[0]
  }
}
