import { JSX } from 'react';
import { InstallationType, ModuleStatus } from '../../types';
import { ResponseType, TippyCustomizedProps } from '../../../Common';
import { ActionMenuProps } from '../ActionMenu';
import { DOCUMENTATION } from '../DocLink';
export interface PageHeaderType {
    headerName?: string;
    headerImage?: string;
    showTabs?: boolean;
    additionalHeaderInfo?: () => JSX.Element;
    renderHeaderTabs?: () => JSX.Element;
    isBreadcrumbs?: boolean;
    breadCrumbs?: () => JSX.Element;
    renderActionButtons?: () => JSX.Element;
    tippyProps?: Pick<TippyCustomizedProps<false>, 'additionalContent'> & {
        isTippyCustomized?: boolean;
        tippyRedirectLink?: keyof typeof DOCUMENTATION;
        TippyIcon?: React.FunctionComponent<any>;
        tippyMessage?: string;
        onClickTippyButton?: () => void;
        tippyHeader?: string;
    };
    onClose?: () => void;
    closeIcon?: JSX.Element;
    docPath?: string;
}
export interface ServerInfo {
    currentVersion: string;
    status: ModuleStatus;
    releaseName: string;
    installationType: InstallationType;
}
export interface ServerInfoResponse extends ResponseType {
    result?: ServerInfo;
}
export interface HelpButtonProps extends Pick<PageHeaderType, 'docPath'> {
    serverInfo: ServerInfo;
    fetchingServerInfo: boolean;
    onClick: () => void;
    hideGettingStartedCard: () => void;
}
export declare enum HelpMenuItems {
    GETTING_STARTED = "getting-started",
    VIEW_DOCUMENTATION = "view-documentation",
    JOIN_DISCORD_COMMUNITY = "join-discord-community",
    ABOUT_DEVTRON = "about-devtron",
    REQUEST_SUPPORT = "request-support",
    OPEN_NEW_TICKET = "open-new-ticket",
    VIEW_ALL_TICKETS = "view-all-tickets",
    GIVE_FEEDBACK = "give-feedback",
    CHAT_WITH_SUPPORT = "chat-with-support",
    RAISE_ISSUE_REQUEST = "raise-issue-request",
    UPGRADE_TO_OSS_PLUS = "upgrade-to-oss-plus",
    DEVTRON_GPT = "devtron-gpt"
}
export type HelpButtonActionMenuProps = ActionMenuProps<HelpMenuItems>;
export interface ProfileMenuProps {
    user: string;
    onClick?: () => void;
}
export interface HelpActionOptionTypes extends Pick<PageHeaderType, 'docPath'> {
    isEnterprise: boolean;
    isTrialOrFreemium: boolean;
}
