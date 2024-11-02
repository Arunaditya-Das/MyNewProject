// import React from 'react'
import { ezyvetPrivateAPI } from "./axiosConfig";

const testAPI =  {
    animalListOfUser: async function ({id}, cancel = false) {
        const response = await ezyvetPrivateAPI.request({
            url: `/animal_list?contact_id=${id}`,
            method: "GET",
            // signal: cancel
            //     ? cancelApiObject[
            //           this.animalListOfUser.name
            //       ].handleRequestCancellation().signal
            //     : undefined,
        });
        return response?.data;
    },
}

export default testAPI