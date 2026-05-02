import { DevtronLicenseDTO } from '../../types';
import { DevtronLicenseCardProps, DevtronLicenseInfo } from './types';
export declare const getLicenseColorsAccordingToStatus: ({ isFreemium, licenseStatus, licenseStatusError, isSaasInstance, }: Pick<DevtronLicenseCardProps, "licenseStatus" | "isFreemium" | "licenseStatusError" | "isSaasInstance">) => {
    bgColor: string;
    textColor: string;
};
export declare const parseDevtronLicenseDTOIntoLicenseCardData: <isCentralDashboard extends boolean = false>(licenseDTO: DevtronLicenseDTO<isCentralDashboard>, currentUserEmail?: isCentralDashboard extends true ? string : never) => Omit<DevtronLicenseCardProps, "appTheme">;
export declare const parseDevtronLicenseData: (result: DevtronLicenseDTO) => DevtronLicenseInfo;
export declare const getGateKeeperUrl: (fingerprint: string) => string;
