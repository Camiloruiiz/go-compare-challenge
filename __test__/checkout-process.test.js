import {priceList, getProductValue, sumValues} from '../index.js'

describe('Supermarket checkout process',()=> {
  
  describe('Products values', ()=> {
    test('Product A value should be equal to 50', ()=> {
      expect(priceList['A']).toBe(50);
    })
    test('Product B value should be equal to 30', ()=> {
      expect(priceList['B']).toBe(30);
    })
    test('Product C value should be equal to 20', ()=> {
      expect(priceList['C']).toBe(20);
    })
    test('Product D value should be equal to 15', ()=> {
      expect(priceList['D']).toBe(15);
    })
  })
  describe('Get values from a shopping list', ()=> {
    test('Product values should be equal to priceList values', ()=> {
      expect(getProductValue('A')).toBe(priceList['A']);
      expect(getProductValue('B')).toBe(priceList['B']);
      expect(getProductValue('C')).toBe(priceList['C']);
      expect(getProductValue('D')).toBe(priceList['D']);
    })
    test('Empty Shopping list should return a message', ()=> {
      const shoppingList = ""
      expect(sumValues(shoppingList)).toBe('Shopping list is empty.');
    })
    describe('Shopping list with more than one products', ()=>{
      test('total value of "AB" shopping list, should be 80', ()=>{
        const shoppingList = "AB"
        expect(sumValues(shoppingList)).toBe(80);
      })
      test('total value of "BC" shopping list, should be 50', ()=>{
        const shoppingList = "BC"
        expect(sumValues(shoppingList)).toBe(50);
      })
      test('total value of "CD" shopping list, should be 35', ()=>{
        const shoppingList = "CD"
        expect(sumValues(shoppingList)).toBe(35);
      })

    })
  })
})