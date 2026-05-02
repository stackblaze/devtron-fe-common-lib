import { AppThemeType } from '../../Providers';
import { DevtronLicenseBaseDTO, DevtronLicenseDTO, LicenseErrorStruct } from '../../types';
export declare enum LicenseStatus {
    ACTIVE = "ACTIVE",
    EXPIRED = "EXPIRED",
    REMINDER_THRESHOLD_REACHED = "REMINDER_THRESHOLD_REACHED"
}
export type DevtronLicenseCardProps = {
    enterpriseName: string;
    expiryDate: string;
    ttl: number;
    licenseStatus: LicenseStatus;
    isTrial: boolean;
    isFreemium: boolean;
    appTheme: AppThemeType;
    licenseStatusError: LicenseErrorStruct;
    isSaasInstance: boolean;
} & ({
    licenseKey: string;
    handleCopySuccess?: () => void;
    licenseSuffix?: never;
} | {
    licenseKey?: never;
    handleCopySuccess?: never;
    licenseSuffix: string;
});
export interface LicenseCardSubTextProps extends Pick<DevtronLicenseCardProps, 'isFreemium' | 'licenseStatus' | 'licenseStatusError'> {
    isFreeForever: boolean;
}
export type DevtronLicenseInfo = Omit<DevtronLicenseCardProps, 'appTheme'> & Pick<DevtronLicenseDTO, 'fingerprint' | 'showLicenseData' | 'licenseStatusError' | 'moduleLimits'>;
export interface ActivateLicenseDialogProps extends Pick<DevtronLicenseBaseDTO, 'fingerprint'> {
    enterpriseName: string;
    handleClose?: () => void;
    handleLicenseActivateSuccess: () => void;
}
export interface InstallFingerprintInfoProps extends Pick<DevtronLicenseBaseDTO, 'fingerprint'> {
    showHelpTooltip?: boolean;
}
export interface GatekeeperQRDialogProps {
    fingerprint: string;
    handleClose: () => void;
}
export interface CopyButtonProps {
    copyContent: string;
}
