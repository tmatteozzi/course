import Repository from './repository.js';

class CartsRepository extends Repository {};

// EXPORT AN INSTANCE TO OTHER FILES
export default new CartsRepository('carts.json');