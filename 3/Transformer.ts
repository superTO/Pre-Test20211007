interface Result {
    user: User;
    orders: Orders[];
}

interface User {
    id: string;
    name: string;
}

interface Orders {
    id: string;
    name: string;
    price: number;
}
/** 未使用到 userIds, orderIds */
function Transformer(userIds: string[], orderIds: string[], userOrders: { userId: string, orderIds: string[] }[],
        userData: Object, orderData: Object): Result[]{

    // console.log(userIds);    
    // console.log(orderIds);
    // console.log(userOrders);

    const newOrderData = new Map<string,{name: string, price: number}>();
    Object.entries(orderData).forEach(x => {
        newOrderData.set(x[0], x[1]);
    })

    // console.log(newOrderData);
    return userOrders.map(x => ({
        user: {
            id: x.userId,
            name: userData[x.userId]
        },
        orders: x.orderIds.map(item => ({
            id: item,
            name: newOrderData.get(item)?.name,
            price: newOrderData.get(item)?.price
        }))
    }))
}


/** Input */
const userIds = ['U01', 'U02', 'U03'];
const orderIds = ['T01', 'T02', 'T03', 'T04'];

const userOrders = [
    { userId: 'U01', orderIds: ['T01', 'T02'] },
    { userId: 'U02', orderIds: [] },
    { userId: 'U03', orderIds: ['T03'] },
];
const userData = { 'U01': 'Tom', 'U02': 'Sam', 'U03': 'John' }
const orderData = {
    'T01': { name: 'A', price: 499 },
    'T02': { name: 'B', price: 599 },
    'T03': { name: 'C', price: 699 },
    'T04': { name: 'D', price: 799 },
}


/** test case */
const display = Transformer(userIds, orderIds, userOrders, userData, orderData);
console.table(display, ['user', 'orders']);

console.log(JSON.stringify(display));