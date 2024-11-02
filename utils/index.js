// import { PHONE_FORMAT } from "config";
// import getRandomImage from "./getRandomImage";
// import dayjs from "dayjs";

// export const setItemLocal = (key, value) => {
//     localStorage.setItem(key, JSON.stringify(value));
// };
// export const getItemLocal = (key) => {
//     let value = JSON.parse(localStorage.getItem(key) ?? null);
//     return value;
// };
// export const removeItemLocal = (key) => {
//     localStorage.removeItem(key);
// };
// export const setItemSession = (key, value) => {
//     sessionStorage.setItem(key, JSON.stringify(value));
// };
// export const getItemSession = (key) => {
//     let value = JSON.parse(sessionStorage.getItem(key) ?? null);
//     return value;
// };
// export const removeItemSession = (key) => {
//     sessionStorage.removeItem(key);
// };
// export const debounce = (callback, delay) => {
//     let timeoutId;
//     return function () {
//         const context = this;
//         const args = arguments;
//         clearTimeout(timeoutId);
//         timeoutId = setTimeout(() => callback.apply(context, args), delay);
//     };
// };
// export const getFormattedPhoneNo = (phoneNo) => {
//     let i = 0,
//         counter = 0,
//         formattedNo = "";
//     while (i < Math.min(PHONE_FORMAT.length, phoneNo.length)) {
//         if (
//             PHONE_FORMAT[counter - 1] &&
//             Number.isNaN(parseInt(PHONE_FORMAT[counter - 1])) &&
//             !Number.isNaN(parseInt(phoneNo[i - 1]))
//         ) {
//             formattedNo += PHONE_FORMAT[counter - 1] + phoneNo[i - 1];
//             counter++;
//         }
//         if (
//             Number.isNaN(parseInt(PHONE_FORMAT[counter])) ===
//             Number.isNaN(parseInt(phoneNo[i]))
//         ) {
//             formattedNo += phoneNo[i];
//         }
//         if (
//             PHONE_FORMAT[counter + 1] &&
//             Number.isNaN(parseInt(PHONE_FORMAT[counter + 1])) &&
//             !phoneNo[i + 1]
//         ) {
//             formattedNo += PHONE_FORMAT[counter + 1];
//         }
//         i++;
//         counter++;
//     }
//     return formattedNo;
// };

// export const getFormattedInputPhoneNo = (e, currentValue) => {
//     const value = e.target.value;
//     if (value.length > PHONE_FORMAT.length) return currentValue;
//     const isCharAdded = value.length > currentValue.length;
//     let newValue = "";
//     if (isCharAdded) {
//         newValue = getFormattedPhoneNo(value);
//     } else {
//         for (let i = 0; i < value.length; i++) {
//             if (
//                 Number.isNaN(parseInt(PHONE_FORMAT[i])) ===
//                 Number.isNaN(parseInt(value[i]))
//             ) {
//                 newValue += value[i];
//             }
//             if (
//                 i === value.length - 1 &&
//                 Number.isNaN(parseInt(PHONE_FORMAT[i + 1]))
//             ) {
//                 newValue = currentValue.slice(0, currentValue.length - 2);
//             }
//         }
//     }
//     return newValue;
// };

// export const isNumber = (val) =>
//     val !== " " && !Number.isNaN(val) && Number(val) >= 0 && Number(val) <= 9;

// export const getFormattedAddress = (address) => {
//     const addressLines = [
//         address.street_1,
//         address.street_2,
//         address.city,
//         // address.state,
//     ]
//         .filter((line) => line && line.length > 0)
//         .join(", ");

//     return `${addressLines}${
//         address.post_code ? ` - ${address.post_code}` : ""
//     }`;
// };

// export const toExactFixed = (value, fractionDigits = 2) => {
//     const digitInTensMultiple = Number("1".padEnd(fractionDigits + 1, "0"));
//     const fixedValue =
//         Math.floor(value * digitInTensMultiple) / digitInTensMultiple;

//     return Number.isNaN(Number(value))
//         ? NaN
//         : Math.floor(fixedValue) === fixedValue
//         ? fixedValue.toFixed(2)
//         : fixedValue
//               .toString()
//               .padEnd(fixedValue.toFixed(fractionDigits).length, "0");
// };

// export const getFormattedDubaiDate = (date) => {
//     const d = dayjs(date);
//     return d.add(4, "hours").locale("en").format("DD MMM YYYY");
// };

// export const getFormattedDubaiTime = (date) => {
//     const d = dayjs(date);
//     return d.add(4, "hours").locale("en").format("hh:mm A");
// };

// export { getRandomImage };
