var keystone = require('keystone');

/**
 * PostCategory Model
 * ==================
 */

var Category = new keystone.List('Category', {
	autokey: { from: 'name', path: 'key', unique: true },
});

Category.add({
	name: { type: String, required: true },
});

Category.register();