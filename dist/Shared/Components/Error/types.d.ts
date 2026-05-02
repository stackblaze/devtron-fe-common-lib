import { AppDetails } from '../../types';
export interface ErrorBarType {
    appDetails: AppDetails;
    /**
     * @default true
     */
    useParentMargin?: boolean;
}
export declare enum AppDetailsErrorType {
    ERRIMAGEPULL = "errimagepull",
    IMAGEPULLBACKOFF = "imagepullbackoff"
}
