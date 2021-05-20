
exports.up = function(knex) {
  return knex.schema.createTable('products', (table) => {
      table.increments();
      table.string('product_name');
      table.integer('kategori_id');
      table.text('description');
      table.integer('price');
      table.integer('inventory_id');
      table.integer('discount_id');
  })
};

exports.down = function(knex) {
  
};
