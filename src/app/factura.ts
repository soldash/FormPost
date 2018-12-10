
export interface factura{
    "data": databill[];
    "message":String;
    "compra": responsebill;

}

export interface databill{
    "_id": String;
    "name": String;
    "priceXUnidad": number;
    "priceXUnidadIva": number;
    "priceTotal": number;
    "priceTotalIva": number;
    "cantidad": number;
    "code": String;
    "description": String;
}

export interface responsebill{
    "precioTotal": number;
    "precioTotalIva": number;
    "soloIva": number;
    "valorPagado": number;
    "cambio": number;
}