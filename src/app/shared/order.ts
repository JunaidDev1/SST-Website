export class iClientOrder {
    orderId: string;
    clientId: string;
    createdOn: number;
    paymentId: string;
    total: number;
    productIds: iOrderProduct[] = [];
}

export class iOrderProduct {
    productId: string;
    productPrice: number;
}
