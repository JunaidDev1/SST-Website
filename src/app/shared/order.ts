export class iClientOrder {
    orderId: string;
    clientId: string;
    createdOn: number;
    status: string;
    paymentId: string;
    subTotal: number;
    grandTotal: number;
    taxFee: number;
    productIds: iOrderProduct[] = [];
    shippingInfo: IShippingInfo = new IShippingInfo();
}

export class iOrderProduct {
    productId: string;
    productPrice: number;
    quantity: number;
}

export class IShippingInfo {
    firstName: string;
    lastName: string;
    email: string;
    streetAddress: string;
    zipCode: string;
    state: string;
    city: string;
    country: string;
    payerId: string;
    phone: string;
}
