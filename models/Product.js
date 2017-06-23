var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Product Model
 * ==========
 */
var myStorage = new keystone.Storage({
  adapter: keystone.Storage.Adapters.FS,
  fs: {
    path: keystone.expandPath('./public/uploads'), // required; path where the files should be stored
    publicPath: '/public/uploads', // path where files will be served
  }
});
var Product = new keystone.List('Product', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true }
});

Product.add({
  title: { type: Types.Text, required: true, index: true },
  price: { type: Types.Number },
  state: {
    type: Types.Select,
    options: 'published, draft', default: 'draft',
    index: true
  },
  description: { type: Types.Html, wysiwyg: true, height: 150 },
  image01: { type: Types.File, storage: myStorage },
  image02: { type: Types.File, storage: myStorage },
  image03: { type: Types.File, storage: myStorage },
  image04: { type: Types.File, storage: myStorage },
  image05: { type: Types.File, storage: myStorage },
  createdAt: { type: Types.Datetime, default: Date.now, noedit: true }
});


/**
 * Registration
 */
Product.defaultColumns = 'title, price, state, createdAt';
Product.register();
