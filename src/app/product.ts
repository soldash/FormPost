export interface product{
    "items": producto[];
}

export interface producto{
    "_id": String;
    "name": String;
    "price": String;
    "code": String;
    "description": String;
    "__v": number;
}