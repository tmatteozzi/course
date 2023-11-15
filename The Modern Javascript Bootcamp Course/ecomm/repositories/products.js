import Repository from './repository.js';

class ProductsRepository extends Repository {};

// EXPORT AN INSTANCE TO OTHER FILES
export default new ProductsRepository('products.json');