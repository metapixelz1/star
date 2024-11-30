/// <reference types="@workadventure/iframe-api-typings" />

import { bootstrapExtra } from "@workadventure/scripting-api-extra";



let currentZone: string;
let currentPopup: any;

export const config = [
    {
        zone: 'followUs',
        message: 'Hey! Is this office warm?',
        cta: [
            {
                label: 'Yes',
                className: 'primary',
                callback: () => WA.room.hideLayer('others/fire'),
            },
            {
                label: 'Twitter',
                className: 'primary',
                callback: () => WA.room.showLayer('others/fire'),
            }
        ]
    },
]






export function openPopup(zoneName: string, popupName: string) {
    const zone = config.find((item) => {
        return item.zone == zoneName
    });
    if (typeof zone !== 'undefined') {
        // @ts-ignore otherwise we can't use zone.cta object
        currentPopup = WA.openPopup(popupName, zone.message, zone.cta)
    }
}

export function closePopup(){
    if (typeof currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
}