export const color = [
    "White",
    "Black",
    "Red",
    "Marun",
    "Beingne",
    "Pink",
    "Green",
    "Yellow",
]

export const subCategories = [
    { name: 'Totes', href: '#' },
    { name: 'Backpacks', href: '#' },
    { name: 'Travel Bags', href: '#' },
    { name: 'Hip Bags', href: '#' },
    { name: 'Laptop Sleeves', href: '#' },
]

export const filters = [
    {
        id: 'color',
        name: 'Color',
        options: [
            { value: 'white', label: 'White', checked: false },
            { value: 'beingne', label: 'Beingne', checked: false },
            { value: 'blue', label: 'Blue', checked: false },
            { value: 'brown', label: 'Brown', checked: false },
            { value: 'green', label: 'Green', checked: false },
            { value: 'purple', label: 'Purple', checked: false },
        ],
    },
    {
        id: 'category',
        name: 'Category',
        options: [
            { value: 'new-arrivals', label: 'New Arrivals', checked: false },
            { value: 'sale', label: 'Sale', checked: false },
            { value: 'travel', label: 'Travel', checked: false },
            { value: 'organization', label: 'Organization', checked: false },
            { value: 'accessories', label: 'Accessories', checked: false },
        ],
    },
    {
        id: 'size',
        name: 'Size',
        options: [
            { value: '2l', label: '2L', checked: false },
            { value: '6l', label: '6L', checked: false },
            { value: '12l', label: '12L', checked: false },
            { value: '18l', label: '18L', checked: false },
            { value: '20l', label: '20L', checked: false },
            { value: '40l', label: '40L', checked: false },
        ],
    },
]

export const singleFilter = [
    {
        id: "price",
        name: "Price",
        options: [
            {value: "159-399", label: "₹159 to ₹399"},
            {value: "399-999", label: "₹399 to ₹3999"},
            {value: "999-1999", label: "₹3999 to ₹31999"},
            {value: "1999-2999", label: "₹31999 to ₹32999"},
            {value: "3999-4999", label: "₹33999 to ₹34999"},
        ]
    },
    {
        id: "discount",
        name: "Discount Range",
        options: [
            {value: "10", label: "10% And Above"},
            {value: "20", label: "20% And Above"},
            {value: "30", label: "30% And Above"},
            {value: "40", label: "40% And Above"},
            {value: "50", label: "50% And Above"},
            {value: "60", label: "60% And Above"},
        ]
    },
    {
        id: "stock",
        name: "Availability",
        options: [
            {value: "in_stock", label: "In Stock"},
            {value: "out_of_stock", label: "Out Of Stock"},
        ]
    },
    
]

export const sortOptions = [
    { name: "Price Low to High", query: "price_low", current: false },
    { name: "Price High to Low", query: "price_high", current: false }
]