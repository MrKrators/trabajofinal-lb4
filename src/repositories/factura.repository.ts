import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDbDataSource} from '../datasources';
import {Factura, FacturaRelations} from '../models';

export class FacturaRepository extends DefaultCrudRepository<
  Factura,
  typeof Factura.prototype.ID,
  FacturaRelations
> {
  constructor(
    @inject('datasources.mongoDB') dataSource: MongoDbDataSource,
  ) {
    super(Factura, dataSource);
  }
}
