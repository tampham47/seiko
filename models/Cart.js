/**
 * Greenbot 2016
 * Author Tw
 */

var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Cart Model
 * ==================
 */

var Cart = new keystone.List('Cart', {
	label: 'Cart'
});

Cart.add({
  // userId: {},
  productId: {
    type: Types.Relationship,
    ref: 'Product',
    initial: true
  },
  createdAt: { type: Types.Datetime, default: Date.now }
});

Cart.defaultColumns = 'productId, createdAt';
Cart.register();
