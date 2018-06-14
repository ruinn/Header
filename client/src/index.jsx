import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/App/App.jsx";

const languages = [
	"cesky",
	"Dansk",
	"Deutsch",
	"English",
	"Español",
	"Français",
	"Italiano",
	"Nederlands",
	"Norsk",
	"Polski",
	"Portuês",
	"Português (Brasil)",
	"Svenska",
	"Suomi",
	"Türk"
];

const currency = [
	"EUR",
	"GBP",
	"USD",
	"---",
	"AED",
	"ALL",
	"AMD",
	"ARS",
	"AUD",
	"AZN",
	"BDT",
	"BHD",
	"BND",
	"BOB",
	"BRL",
	"BSD",
	"BZD",
	"CAD",
	"CHF",
	"CLP",
	"CNY",
	"COP",
	"CRC",
	"CUC",
	"CZK",
	"DJF",
	"DKK",
	"DOP",
	"DZD",
	"EGP",
	"EUR",
	"FJD",
	"GBP",
	"HKD",
	"HNL",
	"HRK",
	"HUF",
	"IDR",
	"ILS",
	"INR",
	"ISK",
	"JOD",
	"JPY",
	"KES",
	"KGS",
	"KES",
	"KGS",
	"KHR",
	"KMF",
	"KRW",
	"KWD",
	"KZT",
	"LAK",
	"LBP",
	"LKR",
	"MAD",
	"MNT",
	"MRO",
	"MUR",
	"MXN",
	"MYR",
	"NAD",
	"NIO",
	"NOK",
	"NPR",
	"NZD",
	"OMR",
	"PEN",
	"PGK",
	"PHP",
	"PKR",
	"PLN",
	"PYG",
	"QAR",
	"RON",
	"RUB",
	"RWF",
	"SAR",
	"SEK",
	"SGD",
	"SOS",
	"SZL",
	"THB",
	"TND",
	"TOP",
	"TRY",
	"TTD",
	"TWD",
	"TZS",
	"UAH",
	"UGX",
	"USD",
	"UYU",
	"VEF",
	"VND",
	"VUV",
	"WST",
	"XAF",
	"XCD",
	"XOF",
	"XPF",
	"ZAR"
];

const guests = [
	"1 Guest",
	"2 Guests",
	"3 Guests",
	"4 Guests",
	"5 Guests",
	"6 Guests",
	"7 Guests",
	"8 Guests",
	"9 Guests",
	"10 Guests",
	"11 Guests",
	"12 Guests",
	"13 Guests",
	"14 Guests",
	"15 Guests",
	"16 Guests",
	"17 Guests",
	"18 Guests",
	"19 Guests",
	"20 Guests",
	"21 Guests",
	"22 Guests",
	"23 Guests",
	"24 Guests",
	"25 Guests",
	"26 Guests",
	"27 Guests",
	"28 Guests",
	"29 Guests",
	"30 Guests",
	"31 Guests",
	"32 Guests",
	"33 Guests",
	"34 Guests",
	"35 Guests",
	"36 Guests",
	"37 Guests",
	"38 Guests",
	"39 Guests",
	"40 Guests",
	"41 Guests",
	"42 Guests",
	"43 Guests",
	"44 Guests",
	"45 Guests",
	"46 Guests",
	"47 Guests",
	"48 Guests",
	"49 Guests",
	"50 Guests",
	"51 Guests",
	"52 Guests",
	"53 Guests",
	"54 Guests",
	"55 Guests",
	"56 Guests",
	"57 Guests",
	"58 Guests",
	"59 Guests",
	"60 Guests",
	"61 Guests",
	"62 Guests",
	"63 Guests",
	"64 Guests",
	"65 Guests",
	"66 Guests",
	"67 Guests",
	"68 Guests",
	"69 Guests",
	"70 Guests",
	"71 Guests",
	"72 Guests",
	"73 Guests",
	"74 Guests",
	"75 Guests",
	"76 Guests",
	"77 Guests",
	"78 Guests",
	"79 Guests",
	"80 Guests"
];

ReactDOM.render(
	<Header languages={languages} currency={currency} guests={guests} />,
	document.getElementById("header")
);
