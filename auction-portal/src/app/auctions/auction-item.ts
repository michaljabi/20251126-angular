// type Money = {value: number, currency: 'PLN' | 'USD' | 'EUR'};
type Money = number;

/*
    Reprezentacja typu danych który będziemy odbierać z back-endu.
*/
export interface AuctionItem {
    id: string;
    title: string;
    imgUrl: string;
    price: Money;
    description?: string;
}

// const myAuction: AuctionItem = {}