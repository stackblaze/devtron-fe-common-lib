import { BaseDocLink, URLWithUTMSource } from './types';
export declare const getUTMPathAppended: ({ isEnterprise, link }: URLWithUTMSource) => string;
export declare const getDocumentationUrl: <T extends boolean = false>({ docLinkKey, isEnterprise, isExternalLink, isLicenseDashboard, }: BaseDocLink<T>) => string;
