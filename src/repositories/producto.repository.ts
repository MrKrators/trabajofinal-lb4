import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Producto, ProductoRelations} from '../models';

export class ProductoRepository extends DefaultCrudRepository<
  Producto,
  typeof Producto.prototype.ID,
  ProductoRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Producto, dataSource);
  }
}
