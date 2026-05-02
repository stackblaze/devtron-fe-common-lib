export declare enum ServerAnalyticsEventType {
    GET_LICENSE_CLICKED = "getLicenseClicked"
}
export interface HandleAnalyticsEventParams {
    category: string;
    action: string;
}
