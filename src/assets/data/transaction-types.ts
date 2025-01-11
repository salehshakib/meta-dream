import { StaticImageData } from "next/image";

import binancePayImage from "@/assets/images/binance.png";
import bkashImage from "@/assets/images/bkash.png";
import neteller from "@/assets/images/neteller.png";
import skrill from "@/assets/images/skrill.png";

interface TransactionType {
  key: string;
  name: string;
  websiteLink: string;
  image: StaticImageData;
}

export const transactionTypes: TransactionType[] = [
  {
    key: "binance-pay",
    name: "BinancePay",
    websiteLink: "www.binancepay.com",
    image: binancePayImage,
  },
  {
    key: "bkash",
    name: "Bkash",
    websiteLink: "www.binancepay.com",
    image: bkashImage,
  },
  {
    key: "neteller",
    name: "Neteller",
    websiteLink: "www.binancepay.com",
    image: neteller,
  },
  {
    key: "skrill",
    name: "Skrill",
    websiteLink: "www.binancepay.com",
    image: skrill,
  },
];
