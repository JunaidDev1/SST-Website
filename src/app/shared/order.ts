export class iClientOrder {
    orderId: string;
    clientId: string;
    createdOn: number;
    status: string;
    paymentId: string;
    total: number;
    productIds: iOrderProduct[] = [];
}

export class iOrderProduct {
    productId: string;
    productPrice: number;
}
