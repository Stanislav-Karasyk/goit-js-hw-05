class Storage {
  constructor(items) {
    this.items = items;
  }

  getItems() {
    console.log(this.items);
  }
  addItem(item) {
    this.items.push(item);
  }
    // removeItem(item) {
    //   const itemIndex = this.items.indexOf(item);
    //   this.items.splice(itemIndex, 1);
    // }
    
    // доп задание (через цикл)
  removeItem(item) {
    for (const itemName of this.items) {
      if (itemName.includes(item)) {
        const itemIndex = this.items.indexOf(item);
        this.items.splice(itemIndex, 1);
      }
    }
  }
}

// для проверки
const storage = new Storage([
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор',
]);

const items = storage.getItems();
console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

storage.addItem('Дроид');
console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

storage.removeItem('Пролонгер');
console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]
