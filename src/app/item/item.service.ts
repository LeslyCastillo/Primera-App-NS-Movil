import { Injectable } from '@angular/core'

import { Item } from './item'

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  private items = new Array<Item>(
    { id: 1, name: 'Lesly Castillo', role: 'Reina' },
    { id: 2, name: 'Karol Castillo', role: 'Cocinera' },
    { id: 3, name: 'Esther Castillo', role: 'Princesa' },
    { id: 4, name: 'Victor Castillo', role: 'Caballero' },
    { id: 5, name: 'Carlitos Castillo', role: 'Obrero' }
  )

  getItems(): Array<Item> {
    return this.items
  }

  getItem(id: number): Item {
    return this.items.filter((item) => item.id === id)[0]
  }
}
