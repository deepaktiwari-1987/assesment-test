"use strict";
exports.__esModule = true;
exports["default"] = {
    userTypes: [
        {
            user_type_id: 1,
            user_type: 'Employee'
        },
        {
            user_type_id: 2,
            user_type: 'Affliate'
        },
        {
            user_type_id: 3,
            user_type: 'Customer'
        }
    ],
    users: [
        {
            user_id: 1,
            user_name: 'testing',
            f_name: 'test',
            l_name: 'test last',
            user_type_id: 1,
            join_date: '2020-01-01'
        }
    ],
    discounts: [
        {
            discount_id: 1,
            user_type_id: 1,
            discount_percentage: 30
        },
        {
            discount_id: 1,
            user_type_id: 1,
            discount_percentage: 10
        },
        {
            discount_id: 1,
            user_type_id: 1,
            discount_percentage: 5
        }
    ],
    categories: [
        {
            category_id: 1,
            category_name: 'General'
        },
        {
            category_id: 2,
            category_name: 'groceries'
        }
    ],
    products: [
        {
            product_id: 1,
            product_name: 'Product 1',
            product_price: 1200,
            category_id: 1
        },
        {
            product_id: 2,
            product_name: 'Product 2',
            product_price: 3400,
            category_id: 2
        },
        {
            product_id: 3,
            product_name: 'Product 3',
            product_price: 2300,
            category_id: 1
        }
    ],
    cartProducts: [
        {
            cart_product_id: 1,
            cart_id: 1,
            product_id: 1,
            user_id: 1
        }
    ]
};
