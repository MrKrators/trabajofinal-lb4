import {Entity, model, property} from '@loopback/repository';

@model()
export class Articulo extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  IDitem?: number;

  @property({
    type: 'string',
    required: true,
  })
  detail: string;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'number',
    required: true,
  })
  price: number;


  constructor(data?: Partial<Articulo>) {
    super(data);
  }
}

export interface ArticuloRelations {
  // describe navigational properties here
}

export type ArticuloWithRelations = Articulo & ArticuloRelations;
