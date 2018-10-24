﻿export interface Posting {
    postID: string;
    userID: any;
    title: string;
    address: string;
    size: string;
    price: number;
    amenities: string[];
    images: string[];
    description: string;
}

export interface Account {
    userID: string;
    firstName: string;
    lastName: string;
    email: string;
    birthDate: string;
    profileImg: string;
    posts: Posting[];
    requests: Posting[];
}

export interface Reservation {
    postID: string;
    userID: string;
    reservationID: string;
    startDate: string;
    endDate: string;
    totalPrice: number;
}

export interface Pricing {
    dailyAmount?: number;
    monthlyAmount: number;
    isMonthOnly: boolean;
}