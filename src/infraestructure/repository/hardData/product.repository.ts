import { IProductRepository } from '../../../core/repository/product.repository';
import * as dotenv from 'dotenv';

dotenv.config();

class ProductRepository implements IProductRepository {
  public callNumber(game: any) {
    const { randomNumber } = this.generateRandomNumber(
      process.env.RANG_NUMBER_MIN,
      process.env.RANG_NUMBER_MAX,
    );
    return {
      code: 100,
      message: 'Operación exitosa',
      data: {
        Number: randomNumber,
      },
    };
  }
  public cardGenerate(game: any) {
    const cards = cartones();
    const newCards = [];
    for (let i = 0; i < cards.length; i++) {
      // Crear arreglo para tarjeta
      const simple = [];
      let x;
      for (x = 0; x < 5; x++) {
        simple.push(...cards[i][x]);
      }
      newCards.push(simple);
    }
    return {
      code: 100,
      message: 'Operación exitosa',
      data: {
        cards: newCards,
      },
    };
  }

  private generateRandomNumber(
    min,
    max,
  ): {
    randomNumber: number;
  } {
    min = Math.ceil(min);
    max = Math.floor(max);
    const randomNumber = Math.floor(Math.random() * (max - min) + min);

    return { randomNumber };
  }
}

function getBingoCard() {
  // Crear arreglo con subarreglo para cada columna necesaria
  const arr = [
    [], // b (1-15)
    [], // i (16-30)
    [], // n (31-45)
    [], // g (46-60)
    [], // o (51-75)
  ];
  for (let i = 0; i < arr.length; i++) {
    // Asignar máximo y mínimo de acuerdo a posición
    const min = i * 15 + 1;
    const max = min + 15;
    // Este ciclo termina cuando el subarreglo tenga 5 elementos
    while (arr[i].length < 5) {
      const num = Math.floor(Math.random() * (max - min)) + min;
      // Evitar que se repitan números
      if (!arr[i].includes(num)) {
        arr[i].push(num);
      }
    }
    // Ordenar
    arr[i].sort((a, b) => a - b);
  }
  // Generalmente el número del centro es un comodín
  arr[2][2] = 'X';
  return arr;
}

function cartones() {
  return [
    getBingoCard(),
    getBingoCard(),
    getBingoCard(),
    getBingoCard(),
    getBingoCard(),
    getBingoCard(),
  ];
}
export const productProviders = [
  {
    provide: 'PRODUCT_REPOSITORY',
    useFactory: () => {
      return new ProductRepository();
    },
  },
];
