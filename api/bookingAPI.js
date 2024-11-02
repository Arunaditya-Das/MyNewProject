import { privateAPI } from "./axiosConfig";

const bookingAPI = {
    getAppointmentTypes: async function (cancel = false) {
        const response = await privateAPI.request({
            url: `/booking/app/type`,
            method: "GET",
            // signal: cancel
            //     ? cancelApiObject[
            //           this.getAppointmentTypes.name
            //       ].handleRequestCancellation().signal
            //     : undefined,
        });
        return response?.data;
    },
}

export default bookingAPI