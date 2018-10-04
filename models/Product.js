var keystone = require('keystone');
var Types = keystone.Field.Types;

var Product = new keystone.List('Product');

Product.add({
  name: { type: String, required: true, initial: true },
  description: { type: Types.Html, wysiwyg: true },
  price: { type: Number, default: 0, size: 'small' },
  category: { type: Types.Relationship, ref: 'Category', index: true, many:
  false }
});

Product.schema.virtual('canAccessKeystone').get(function () {
  return true;
});



Product.defaultColumns = 'name, description, price';

Product.schema.virtual('url').get(function() {
        return '/products/'+this.name;
 });

Product.register();