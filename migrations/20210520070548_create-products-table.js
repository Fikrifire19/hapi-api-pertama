
exports.up = function(knex) {
  return knex.schema.createTable('products', (table) => {
      table.increments();
      table.string('product_name');
      table.integer('price');
      table.integer('kategori_id');
      table.text('description');
      table.integer('inventory_id');
      table.float('weight');
      table.string('product_thumbmail');
      table.string('product_image');
      table.integer('discount_id');
      table.integer('stock');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('products');
};
