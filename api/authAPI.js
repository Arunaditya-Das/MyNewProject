// import React from 'react'
import {publicAPI} from './axiosConfig';
// import { publicAPI } from './axiosConfig';
const authAPI = {
    generateOTP: async function ({ phoneNo, cancel = false }) {
        const response = await publicAPI.request({
            url: "/generate-otp",
            method: "POST",
            data: { mobile: `0${phoneNo}` },
            // signal: cancel
            //     ? cancelApiObject[this.sendOTP.name].handleRequestCancellation()
            //           .signal
            //     : undefined,
        });
        return response?.data;
    },
    validate: async function ({ mobile, otp }, cancel = false) {
        const response = await publicAPI.request({
            url: `/validate`,
            method: "POST",
            data: { value: `0${mobile}`, otp },
            // signal: cancel
            //     ? cancelApiObject[
            //           this.validate.name
            //       ].handleRequestCancellation().signal
            //     : undefined,
        });
        return response?.data;
    },
    set_session: async function ({payload}, cancel = false) {
        const response = await publicAPI.request({
            url: `/set-session`,
            method: "POST",
            data: {...payload},
            // signal: cancel
            //     ? cancelApiObject[
            //           this.validate.name
            //       ].handleRequestCancellation().signal
            //     : undefined,
        });
        return response?.data;
    },
    setSession: async function (accountDetails, cancel = false) {
        const response = await publicAPI.request({
            url: `/set-session`,
            method: "POST",
            data: accountDetails,
            // signal: cancel
            //     ? cancelApiObject[
            //           this.validate.name
            //       ].handleRequestCancellation().signal
            //     : undefined,
        });
        return response?.data;
    },
}

export default authAPI