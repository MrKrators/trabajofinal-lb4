import {Entity, model, property} from '@loopback/repository';

@model()
export class Factura extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  ID?: string;

  @property({
    type: 'date',
    required: true,
  })
  date: string;

  @property({
    type: 'number',
    required: true,
    default: 1,
  })
  ticket: number;

  @property({
    type: 'string',
    required: true,
  })
  user_id: string;

  @property({
    type: 'array',
    itemType: 'object',
    required: true,
  })
  items: object[];

  @property({
    type: 'number',
    required: true,
  })
  subtotal: number;

  @property({
    type: 'number',
    required: true,
  })
  discount: number;

  @property({
    type: 'number',
    required: true,
  })
  total: number;


  constructor(data?: Partial<Factura>) {
    super(data);
  }
}

export interface FacturaRelations {
  // describe navigational properties here
}

export type FacturaWithRelations = Factura & FacturaRelations;
