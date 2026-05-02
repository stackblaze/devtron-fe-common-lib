export declare const BASE_ROUTES: {
    readonly GETTING_STARTED: "getting-started";
    readonly LOGIN: {
        readonly ROOT: "login";
        readonly SSO: "sso";
        readonly ADMIN: "admin";
    };
    readonly LICENSE_AUTH: "license-auth";
    readonly APPLICATION_MANAGEMENT: {
        readonly ROOT: "application-management";
        readonly OVERVIEW: "overview";
        readonly DEVTRON_APP: {
            readonly ROOT: "devtron-app";
            readonly LIST: {
                readonly ROOT: "list";
                readonly CREATE_APP: "create-app";
            };
            readonly DETAIL: {
                readonly DEPLOYMENT_METRICS: "deployment-metrics";
                readonly OVERVIEW: "overview";
                readonly APP_DETAILS: "details";
                readonly TRIGGER: "trigger";
                readonly CI_DETAILS: "ci-details";
                readonly CD_DETAILS: "cd-details";
                readonly CONFIGURATIONS: "edit";
                readonly ROOT: ":appId";
            };
        };
        readonly APPLICATION_GROUP: {
            readonly ROOT: "application-group";
            readonly LIST: "list";
            readonly DETAIL: {
                readonly OVERVIEW: "overview";
                readonly APP_DETAILS: "details";
                readonly TRIGGER: "trigger";
                readonly CI_DETAILS: "ci-details";
                readonly CD_DETAILS: "cd-details";
                readonly CONFIGURATIONS: "edit";
                readonly ROOT: ":envId";
            };
        };
        readonly BULK_EDIT: "bulk-edit";
        readonly APPLICATION_TEMPLATES: {
            readonly ROOT: "templates/devtron-app";
            readonly DETAIL: {
                readonly ROOT: "detail/:appId";
                readonly OVERVIEW: "overview";
                readonly CONFIGURATIONS: "edit";
            };
            readonly CREATE: "create";
        };
        readonly CONFIGURATIONS: {
            readonly ROOT: "configurations";
            readonly GITOPS: "gitops";
            readonly GIT_ACCOUNTS: "git-accounts";
            readonly DEPLOYMENT_CHARTS: {
                readonly ROOT: "deployment-charts";
                readonly EDIT: ":name/:resourceType";
            };
            readonly NOTIFICATIONS: "notifications";
            readonly NOTIFICATIONS_ADD_NEW: "notifications/new";
            readonly SCOPED_VARIABLES: {
                readonly ROOT: "scoped-variables";
                readonly CURRENT_VIEW: ":currentView?";
                readonly ENVIRONMENT_DETAILS: "environments/:environmentName";
            };
            readonly BUILD_INFRA: {
                readonly ROOT: "build-infra";
                readonly PROFILES: "profiles";
                readonly EDIT_PROFILE: "profiles/edit/:profileName";
                readonly APPLICATIONS: "applications";
            };
        };
        readonly POLICIES: {
            readonly ROOT: "policies";
            readonly DEPLOYMENT_WINDOW: {
                readonly ROOT: "deployment-window";
                readonly LIST: "list";
                readonly APPLY_TO: "apply-to";
                readonly CREATE: "window/create";
                readonly EDIT: "window/edit";
            };
            readonly APPROVAL_POLICY: {
                readonly ROOT: "approval-policy";
                readonly POLICY: {
                    readonly ROOT: "policy";
                    readonly CREATE: "create";
                    readonly EDIT: "edit/:policyName";
                };
                readonly APPLIED_POLICY: {
                    readonly ROOT: "applied-policy";
                    readonly CREATE: "create";
                    readonly EDIT: "edit/:appliedProfileId";
                };
                readonly EXCEPTIONS: "exceptions";
            };
            readonly PLUGIN_POLICY: {
                readonly ROOT: "plugin-policy";
                readonly PROFILES: {
                    readonly ROOT: "profiles";
                    readonly OFFENDING_PIPELINES: "offending-pipelines/:profileName";
                    readonly CREATE: "create";
                    readonly EDIT: "edit/:profileName";
                };
                readonly APPLIED_PROFILES: {
                    readonly ROOT: "applied-profiles";
                    readonly CREATE: "create";
                    readonly EDIT: "edit/:appliedProfileId";
                };
            };
            readonly PULL_IMAGE_DIGEST: "pull-image-digest";
            readonly TAG_POLICY: {
                readonly ROOT: "tag-policy";
                readonly CREATE: "create";
                readonly EDIT: "edit/:tagId";
            };
            readonly FILTER_CONDITIONS: {
                readonly ROOT: "filter-conditions";
                readonly ADD: "add";
                readonly EDIT: "edit/:filterId";
            };
            readonly IMAGE_PROMOTION: {
                readonly ROOT: "image-promotion";
                readonly PROFILES: {
                    readonly ROOT: "profiles";
                    readonly CREATE: "create";
                    readonly EDIT: "edit/:profileName";
                };
                readonly APPLIED_PROFILES: {
                    readonly ROOT: "applied-profiles";
                    readonly CREATE: "create";
                    readonly EDIT: "edit/:appliedProfileId";
                };
            };
            readonly LOCK_DEPLOYMENT_CONFIGURATION: {
                readonly ROOT: "lock-deployment-configuration";
                readonly PROFILES: {
                    readonly ROOT: "profiles";
                    readonly CREATE: "create";
                    readonly EDIT: "edit/:profileName";
                };
                readonly APPLIED_PROFILES: {
                    readonly ROOT: "applied-profiles";
                    readonly CREATE: "create";
                    readonly EDIT: "edit/:appliedProfileId";
                };
            };
        };
    };
    readonly INFRASTRUCTURE_MANAGEMENT: {
        readonly ROOT: "infrastructure-management";
        readonly OVERVIEW: "overview";
        readonly APPS: {
            readonly ROOT: "apps";
            readonly LIST: ":appType";
            readonly DEVTRON_CHART: "dc/deployments/:appId/env/:envId";
            readonly EXTERNAL_HELM_APP: "ea/:appId/:appName";
            readonly EXTERNAL_ARGO_APP: "eaa/:clusterId/:appName/:namespace";
            readonly EXTERNAL_FLUX_APP: "external-flux/:clusterId/:appName/:namespace/:templateType";
        };
        readonly CHART_STORE: {
            readonly ROOT: "chart-store/discover";
        };
        readonly RESOURCE_BROWSER: {
            readonly ROOT: "resource-browser";
            readonly CLUSTER_LIST: "list";
            readonly INSTALLATION_CLUSTER: "installation-cluster/:installationId";
            readonly COMPARE_CLUSTERS: "compare-clusters";
            readonly CLUSTER_DETAILS: {
                readonly ROOT: ":clusterId";
                readonly OVERVIEW: "overview";
                readonly MONITORING_DASHBOARD: "monitoring-dashboard";
                readonly TERMINAL: "terminal";
                readonly CLUSTER_UPGRADE: "cluster-upgrade";
                readonly NODE_DETAIL: "node/detail/:name";
                readonly K8S_RESOURCE_DETAIL: ":namespace/:kind/:group/:name";
                readonly K8S_RESOURCE_LIST: ":kind/:group";
                readonly RESOURCE_RECOMMENDER: "resource-recommender";
            };
        };
        readonly RESOURCE_WATCHER: {
            readonly ROOT: "resource-watcher";
            readonly WATCHERS: "watchers";
            readonly INTERCEPTED_CHANGES: "intercepted-changes";
        };
    };
    readonly SOFTWARE_RELEASE_MANAGEMENT: {
        readonly ROOT: "software-release-management";
        readonly RELEASES: {
            readonly ROOT: "releases";
            readonly CREATE: "create";
            readonly EDIT: "edit/:releaseId";
            readonly DETAIL: {
                readonly ROOT: "detail/:releaseTrack/:releaseVersion";
                readonly OVERVIEW: "overview";
                readonly REQUIREMENTS: {
                    readonly ROOT: "requirements/:appName?";
                    readonly DEPLOYMENT_SOURCE: "deployment-source";
                };
                readonly ROLLOUT_RELEASE: "rollout-release";
                readonly HISTORY: "rollout-history/:appId?/:envId?/:pipelineId?/:triggerId?";
                readonly CONFIGURATIONS: "configurations/:appId?/:envId?";
            };
            readonly TRACK_ADD_EDIT: "track/:id";
            readonly TRACK_DETAIL: "track/detail/:trackName";
            readonly CREATE_RELEASE_TRACK_ADD_EDIT: "create/track/:id";
            readonly EDIT_RELEASE_TRACK_ADD_EDIT: "edit/:releaseId/track/:id";
        };
        readonly TENANTS: {
            readonly ROOT: "tenants";
            readonly CREATE: "create";
            readonly EDIT: "edit/:tenantId";
            readonly DETAIL: {
                readonly ROOT: "detail/:tenantId";
                readonly OVERVIEW: "overview";
                readonly INSTALLATIONS: "installations/:installationId?";
                readonly MAP_ENVIRONMENT: "map-environment";
            };
        };
    };
    readonly COST_VISIBILITY: {
        readonly ROOT: "cost-visibility";
        readonly OVERVIEW: "overview";
        readonly BREAKDOWN: {
            readonly ROOT: "breakdown/:breakdownViewType";
            readonly DETAIL: ":itemName/:view/:detail?";
        };
        readonly CONFIGURATIONS: "configurations";
    };
    readonly SECURITY_CENTER: {
        readonly ROOT: "security-center";
        readonly OVERVIEW: "overview";
        readonly VULNERABILITIES: {
            readonly ROOT: "vulnerabilities";
            readonly DEPLOYMENTS: "deployments";
            readonly CVES: "cves";
        };
        readonly SECURITY_ENABLEMENT: "security-enablement";
        readonly POLICIES: "policies";
    };
    readonly AUTOMATION_AND_ENABLEMENT: {
        readonly ROOT: "automation-and-enablement";
        readonly JOBS: {
            readonly ROOT: "job";
            readonly LIST: {
                readonly ROOT: "list";
                readonly CREATE_JOB: "create-job";
            };
            readonly DETAIL: {
                readonly ROOT: ":appId";
                readonly OVERVIEW: "overview";
                readonly TRIGGER: "trigger";
                readonly CI_DETAILS: "ci-details";
                readonly CONFIGURATIONS: "edit";
            };
        };
    };
    readonly DATA_PROTECTION_MANAGEMENT: {
        readonly ROOT: "data-protection-management";
        readonly OVERVIEW: "overview";
        readonly BACKUP_AND_SCHEDULE: {
            readonly ROOT: "backup-and-schedule/:view";
            readonly DETAIL: "detail/:id";
        };
        readonly RESTORES: {
            readonly ROOT: "restores";
            readonly DETAIL: ":restoreId";
        };
        readonly BACKUP_LOCATIONS: {
            readonly ROOT: "backup-locations/:type";
            readonly DETAIL: ":locationId";
        };
    };
    readonly GLOBAL_CONFIG: {
        readonly ROOT: "global-configuration";
        readonly HOST_URL: "host-url";
        readonly EXTERNAL_LINKS: "external-links";
        readonly CHART_REPOSITORIES: "chart-repositories";
        readonly CLUSTER_ENV: {
            readonly ROOT: "cluster-env";
            readonly MANAGE_CATEGORIES: "manage-categories";
        };
        readonly DOCKER: "docker";
        readonly PROJECTS: "projects";
        readonly AUTH: {
            readonly ROOT: "auth";
            readonly LOGIN_SERVICE: "login-service";
            readonly USERS: "users";
            readonly GROUPS: "groups";
            readonly USER_GROUPS: "user-groups";
            readonly CREATE_USER_GROUP: "create";
            readonly EDIT_USER_GROUP: "edit/:identifier";
            readonly API_TOKEN: "api-token";
        };
    };
    readonly STACK_MANAGER: {
        readonly ROOT: "stack-manager";
        readonly DISCOVER_MODULES: "discover";
        readonly DISCOVER_MODULES_DETAILS: "discover/details";
        readonly INSTALLED_MODULES: "installed";
        readonly INSTALLED_MODULES_DETAILS: "installed/details";
        readonly ABOUT: "about";
        readonly ABOUT_RELEASES: "about/releases";
    };
    readonly NETWORK_STATUS_INTERFACE: {
        readonly ROOT: "network-status-interface";
        readonly CREATE_CONTROLLER: "controller/create";
        readonly EDIT_CONTROLLER: "controller/edit/:controllerId";
        readonly CONTROLLER_DETAILS: "controller/details/:controllerId";
        readonly CUSTOMIZE_COLUMNS: "customize-columns";
    };
};
export declare const ROUTER_URLS: {
    readonly GETTING_STARTED: "/getting-started";
    readonly LOGIN: {
        readonly ROOT: "/login";
        readonly SSO: "/login/sso";
        readonly ADMIN: "/login/admin";
    };
    readonly LICENSE_AUTH: "/license-auth";
    readonly APPLICATION_MANAGEMENT_OVERVIEW: "/application-management/overview";
    readonly DEVTRON_APP: "/application-management/devtron-app";
    readonly DEVTRON_APP_LIST: "/application-management/devtron-app/list";
    readonly DEVTRON_APP_DETAILS: {
        readonly ROOT: "/application-management/devtron-app/:appId";
        readonly OVERVIEW: "/application-management/devtron-app/:appId/overview";
        readonly DETAILS: "/application-management/devtron-app/:appId/details";
        readonly ENV_DETAILS: "/application-management/devtron-app/:appId/details/:envId";
        readonly TRIGGER: "/application-management/devtron-app/:appId/trigger";
        readonly CI_DETAILS: "/application-management/devtron-app/:appId/ci-details";
        readonly CD_DETAILS: "/application-management/devtron-app/:appId/cd-details";
        readonly DEPLOYMENT_METRICS: "/application-management/devtron-app/:appId/deployment-metrics";
        readonly CONFIGURATIONS: "/application-management/devtron-app/:appId/edit";
    };
    readonly CREATE_DEVTRON_APP: "/application-management/devtron-app/list/create-app";
    readonly APP_GROUP: "/application-management/application-group";
    readonly APP_GROUP_LIST: "/application-management/application-group/list";
    readonly APP_GROUP_DETAILS: {
        readonly ROOT: "/application-management/application-group/:envId";
        readonly OVERVIEW: "/application-management/application-group/:envId/overview";
        readonly DETAILS: "/application-management/application-group/:envId/details";
        readonly APP_DETAILS: "/application-management/application-group/:envId/details/:appId";
        readonly TRIGGER: "/application-management/application-group/:envId/trigger";
        readonly CI_DETAILS: "/application-management/application-group/:envId/ci-details";
        readonly CD_DETAILS: "/application-management/application-group/:envId/cd-details";
        readonly CONFIGURATIONS: "/application-management/application-group/:envId/edit";
    };
    readonly BULK_EDIT: "/application-management/bulk-edit";
    readonly APP_TEMPLATES: "/application-management/templates/devtron-app";
    readonly APP_TEMPLATE_CREATE: "/application-management/templates/devtron-app/create";
    readonly APP_TEMPLATE_DETAIL: "/application-management/templates/devtron-app/detail/:appId";
    readonly APPLICATION_MANAGEMENT_CONFIGURATIONS: {
        readonly ROOT: "/application-management/configurations";
        readonly GITOPS: "/application-management/configurations/gitops";
        readonly GIT_ACCOUNTS: "/application-management/configurations/git-accounts";
        readonly DEPLOYMENT_CHARTS: "/application-management/configurations/deployment-charts";
        readonly NOTIFICATIONS: "/application-management/configurations/notifications";
        readonly SCOPED_VARIABLES: {
            readonly ROOT: "/application-management/configurations/scoped-variables";
            readonly CURRENT_VIEW: "/application-management/configurations/scoped-variables/:currentView?";
            readonly ENVIRONMENT_DETAILS: "/application-management/configurations/scoped-variables/environments/:environmentName";
        };
        readonly BUILD_INFRA: {
            readonly ROOT: "/application-management/configurations/build-infra";
            readonly PROFILES: "/application-management/configurations/build-infra/profiles";
            readonly EDIT_PROFILE: "/application-management/configurations/build-infra/profiles/edit/:profileName";
            readonly APPLICATIONS: "/application-management/configurations/build-infra/applications";
        };
    };
    readonly APPLICATION_MANAGEMENT_POLICIES: {
        readonly ROOT: "/application-management/policies";
        readonly DEPLOYMENT_WINDOW: {
            readonly ROOT: "/application-management/policies/deployment-window";
            readonly LIST: "/application-management/policies/deployment-window/list";
            readonly CREATE: "/application-management/policies/deployment-window/window/create";
        };
        readonly APPROVAL_POLICY: {
            readonly ROOT: "/application-management/policies/approval-policy";
            readonly POLICY: {
                readonly ROOT: "/application-management/policies/approval-policy/policy";
                readonly CREATE: "/application-management/policies/approval-policy/policy/create";
                readonly EDIT: "/application-management/policies/approval-policy/policy/edit/:policyName";
            };
            readonly APPLIED_POLICY: {
                readonly ROOT: "/application-management/policies/approval-policy/applied-policy";
                readonly CREATE: "/application-management/policies/approval-policy/applied-policy/create";
                readonly EDIT: "/application-management/policies/approval-policy/applied-policy/edit/:appliedProfileId";
            };
            readonly EXCEPTIONS: "/application-management/policies/approval-policy/exceptions";
        };
        readonly PLUGIN_POLICY: {
            readonly ROOT: "/application-management/policies/plugin-policy";
            readonly PROFILES: {
                readonly ROOT: "/application-management/policies/plugin-policy/profiles";
                readonly OFFENDING_PIPELINES: "/application-management/policies/plugin-policy/profiles/offending-pipelines/:profileName";
                readonly CREATE: "/application-management/policies/plugin-policy/profiles/create";
                readonly EDIT: "/application-management/policies/plugin-policy/profiles/edit/:profileName";
            };
            readonly APPLIED_PROFILES: {
                readonly ROOT: "/application-management/policies/plugin-policy/applied-profiles";
                readonly CREATE: "/application-management/policies/plugin-policy/applied-profiles/create";
                readonly EDIT: "/application-management/policies/plugin-policy/applied-profiles/edit/:appliedProfileId";
            };
        };
        readonly PULL_IMAGE_DIGEST: "/application-management/policies/pull-image-digest";
        readonly TAG_POLICY: {
            readonly ROOT: "/application-management/policies/tag-policy";
            readonly CREATE: "/application-management/policies/tag-policy/create";
            readonly EDIT: "/application-management/policies/tag-policy/edit/:tagId";
        };
        readonly FILTER_CONDITIONS: {
            readonly ROOT: "/application-management/policies/filter-conditions";
            readonly ADD: "/application-management/policies/filter-conditions/add";
            readonly EDIT: "/application-management/policies/filter-conditions/edit/:filterId";
        };
        readonly IMAGE_PROMOTION: {
            readonly ROOT: "/application-management/policies/image-promotion";
            readonly PROFILES: {
                readonly ROOT: "/application-management/policies/image-promotion/profiles";
                readonly CREATE: "/application-management/policies/image-promotion/profiles/create";
                readonly EDIT: "/application-management/policies/image-promotion/profiles/edit/:profileName";
            };
            readonly APPLIED_PROFILES: {
                readonly ROOT: "/application-management/policies/image-promotion/applied-profiles";
                readonly CREATE: "/application-management/policies/image-promotion/applied-profiles/create";
                readonly EDIT: "/application-management/policies/image-promotion/applied-profiles/edit/:appliedProfileId";
            };
        };
        readonly LOCK_DEPLOYMENT_CONFIGURATION: {
            readonly ROOT: "/application-management/policies/lock-deployment-configuration";
            readonly PROFILES: {
                readonly ROOT: "/application-management/policies/lock-deployment-configuration/profiles";
                readonly CREATE: "/application-management/policies/lock-deployment-configuration/profiles/create";
                readonly EDIT: "/application-management/policies/lock-deployment-configuration/profiles/edit/:profileName";
            };
            readonly APPLIED_PROFILES: {
                readonly ROOT: "/application-management/policies/lock-deployment-configuration/applied-profiles";
                readonly CREATE: "/application-management/policies/lock-deployment-configuration/applied-profiles/create";
                readonly EDIT: "/application-management/policies/lock-deployment-configuration/applied-profiles/edit/:appliedProfileId";
            };
        };
    };
    readonly INFRASTRUCTURE_MANAGEMENT_OVERVIEW: "/infrastructure-management/overview";
    readonly INFRASTRUCTURE_MANAGEMENT_APPS: "/infrastructure-management/apps";
    readonly INFRASTRUCTURE_MANAGEMENT_APP_LIST: {
        readonly ROUTE: "/infrastructure-management/apps/:appType";
        readonly HELM: string;
        readonly ARGO_CD: string;
        readonly FLUX_CD: string;
    };
    readonly INFRASTRUCTURE_MANAGEMENT_APP_DETAIL: {
        readonly DEVTRON_CHART: "/infrastructure-management/apps/dc/deployments/:appId/env/:envId";
        readonly EXTERNAL_HELM_APP: "/infrastructure-management/apps/ea/:appId/:appName";
        readonly EXTERNAL_ARGO_APP: "/infrastructure-management/apps/eaa/:clusterId/:appName/:namespace";
        readonly EXTERNAL_FLUX_APP: "/infrastructure-management/apps/external-flux/:clusterId/:appName/:namespace/:templateType";
    };
    readonly CHART_STORE: "/infrastructure-management/chart-store/discover";
    readonly RESOURCE_BROWSER: {
        readonly ROOT: "/infrastructure-management/resource-browser";
        readonly CLUSTER_LIST: "/infrastructure-management/resource-browser/list";
        readonly INSTALLATION_CLUSTER: "/infrastructure-management/resource-browser/installation-cluster/:installationId";
        readonly COMPARE_CLUSTERS: "/infrastructure-management/resource-browser/compare-clusters";
        readonly CLUSTER_DETAILS: {
            readonly ROOT: "/infrastructure-management/resource-browser/:clusterId";
            readonly OVERVIEW: "/infrastructure-management/resource-browser/:clusterId/overview";
            readonly MONITORING_DASHBOARD: "/infrastructure-management/resource-browser/:clusterId/monitoring-dashboard";
            readonly TERMINAL: "/infrastructure-management/resource-browser/:clusterId/terminal";
            readonly CLUSTER_UPGRADE: "/infrastructure-management/resource-browser/:clusterId/cluster-upgrade";
            readonly NODE_DETAIL: "/infrastructure-management/resource-browser/:clusterId/node/detail/:name";
            readonly K8S_RESOURCE_DETAIL: "/infrastructure-management/resource-browser/:clusterId/:namespace/:kind/:group/:name";
            readonly K8S_RESOURCE_LIST: "/infrastructure-management/resource-browser/:clusterId/:kind/:group";
            readonly RESOURCE_RECOMMENDER: "/infrastructure-management/resource-browser/:clusterId/resource-recommender";
        };
    };
    readonly RESOURCE_WATCHER: "/infrastructure-management/resource-watcher";
    readonly RELEASES: {
        readonly ROOT: "/software-release-management/releases";
        readonly CREATE: "/software-release-management/releases/create";
        readonly EDIT: "/software-release-management/releases/edit/:releaseId";
        readonly DETAIL: {
            readonly ROOT: "/software-release-management/releases/detail/:releaseTrack/:releaseVersion";
            readonly OVERVIEW: "/software-release-management/releases/detail/:releaseTrack/:releaseVersion/overview";
            readonly REQUIREMENTS: "/software-release-management/releases/detail/:releaseTrack/:releaseVersion/requirements/:appName?";
            readonly REQUIREMENTS_DEPLOYMENT_SOURCE: "/software-release-management/releases/detail/:releaseTrack/:releaseVersion/requirements/:appName?/deployment-source";
            readonly ROLLOUT_RELEASE: "/software-release-management/releases/detail/:releaseTrack/:releaseVersion/rollout-release";
            readonly HISTORY: "/software-release-management/releases/detail/:releaseTrack/:releaseVersion/rollout-history/:appId?/:envId?/:pipelineId?/:triggerId?";
            readonly CONFIGURATIONS: "/software-release-management/releases/detail/:releaseTrack/:releaseVersion/configurations/:appId?/:envId?";
        };
        readonly TRACK_ADD_EDIT: "/software-release-management/releases/track/:id";
        readonly CREATE_RELEASE_TRACK_ADD_EDIT: "/software-release-management/releases/create/track/:id";
        readonly EDIT_RELEASE_TRACK_ADD_EDIT: "/software-release-management/releases/edit/:releaseId/track/:id";
        readonly TRACK_DETAIL: "/software-release-management/releases/track/detail/:trackName";
    };
    readonly TENANTS: {
        readonly ROOT: "/software-release-management/tenants";
        readonly CREATE: "/software-release-management/tenants/create";
        readonly EDIT: "/software-release-management/tenants/edit/:tenantId";
        readonly DETAIL: {
            readonly ROOT: "/software-release-management/tenants/detail/:tenantId";
            readonly OVERVIEW: "/software-release-management/tenants/detail/:tenantId/overview";
            readonly INSTALLATIONS: "/software-release-management/tenants/detail/:tenantId/installations/:installationId?";
            readonly MAP_ENVIRONMENT: "/software-release-management/tenants/detail/:tenantId/installations/:installationId?/map-environment";
        };
    };
    readonly COST_VISIBILITY_OVERVIEW: "/cost-visibility/overview";
    readonly COST_VISIBILITY_BREAKDOWN: {
        readonly ROUTE: "/cost-visibility/breakdown/:breakdownViewType";
        readonly CLUSTERS: string;
        readonly ENVIRONMENTS: string;
        readonly APPLICATIONS: string;
        readonly PROJECTS: string;
    };
    readonly COST_VISIBILITY_BREAKDOWN_DETAIL: "/cost-visibility/breakdown/:breakdownViewType/:itemName/:view/:detail?";
    readonly COST_VISIBILITY_CONFIGURATIONS: "/cost-visibility/configurations";
    readonly SECURITY_CENTER_OVERVIEW: "/security-center/overview";
    readonly SECURITY_CENTER_VULNERABILITIES: "/security-center/vulnerabilities";
    readonly SECURITY_CENTER_VULNERABILITY_DEPLOYMENTS: "/security-center/vulnerabilities/deployments";
    readonly SECURITY_CENTER_VULNERABILITY_CVES: "/security-center/vulnerabilities/cves";
    readonly SECURITY_CENTER_SECURITY_ENABLEMENT: "/security-center/security-enablement";
    readonly SECURITY_CENTER_POLICIES: "/security-center/policies";
    readonly JOBS: "/automation-and-enablement/job";
    readonly JOBS_LIST: "/automation-and-enablement/job/list";
    readonly CREATE_JOB: "/automation-and-enablement/job/list/create-job";
    readonly JOB_DETAIL: {
        readonly ROOT: "/automation-and-enablement/job/:appId";
        readonly OVERVIEW: "/automation-and-enablement/job/:appId/overview";
        readonly TRIGGER: "/automation-and-enablement/job/:appId/trigger";
        readonly CI_DETAILS: "/automation-and-enablement/job/:appId/ci-details";
        readonly CONFIGURATIONS: "/automation-and-enablement/job/:appId/edit";
    };
    readonly DATA_PROTECTION_MANAGEMENT_OVERVIEW: "/data-protection-management/overview";
    readonly DATA_PROTECTION_MANAGEMENT_BACKUP_AND_SCHEDULE: "/data-protection-management/backup-and-schedule/:view";
    readonly DATA_PROTECTION_MANAGEMENT_BACKUP_AND_SCHEDULE_DETAIL: "/data-protection-management/backup-and-schedule/:view/detail/:id";
    readonly DATA_PROTECTION_MANAGEMENT_RESTORES: "/data-protection-management/restores";
    readonly DATA_PROTECTION_MANAGEMENT_RESTORES_DETAIL: "/data-protection-management/restores/:restoreId";
    readonly DATA_PROTECTION_MANAGEMENT_BACKUP_LOCATIONS: "/data-protection-management/backup-locations/:type";
    readonly DATA_PROTECTION_MANAGEMENT_BACKUP_LOCATIONS_DETAIL: "/data-protection-management/backup-locations/:type/:locationId";
    readonly GLOBAL_CONFIG_HOST_URL: "/global-configuration/host-url";
    readonly GLOBAL_CONFIG_EXTERNAL_LINKS: "/global-configuration/external-links";
    readonly GLOBAL_CONFIG_CHART_REPOSITORIES: "/global-configuration/chart-repositories";
    readonly GLOBAL_CONFIG_CLUSTER_ENV: "/global-configuration/cluster-env";
    readonly GLOBAL_CONFIG_DOCKER: "/global-configuration/docker";
    readonly GLOBAL_CONFIG_PROJECTS: "/global-configuration/projects";
    readonly GLOBAL_CONFIG_AUTH: {
        readonly LOGIN_SERVICE: "/global-configuration/auth/login-service";
        readonly USERS: "/global-configuration/auth/users";
        readonly GROUPS: "/global-configuration/auth/groups";
        readonly USER_GROUPS: "/global-configuration/auth/user-groups";
        readonly CREATE_USER_GROUP: "/global-configuration/auth/create";
        readonly EDIT_USER_GROUP: "/global-configuration/auth/edit/:identifier";
        readonly API_TOKEN: "/global-configuration/auth/api-token";
    };
    readonly NETWORK_STATUS_INTERFACE: {
        readonly ROOT: "/network-status-interface";
        readonly CREATE_CONTROLLER: "/network-status-interface/controller/create";
        readonly EDIT_CONTROLLER: "/network-status-interface/controller/edit/:controllerId";
        readonly CONTROLLER_DETAILS: "/network-status-interface/controller/details/:controllerId";
        readonly CUSTOMIZE_COLUMNS: "/network-status-interface/customize-columns";
    };
    readonly STACK_MANAGER: {
        readonly ROOT: "/stack-manager";
        readonly DISCOVER_MODULES: "/stack-manager/discover";
        readonly DISCOVER_MODULES_DETAILS: "/stack-manager/discover/details";
        readonly INSTALLED_MODULES: "/stack-manager/installed";
        readonly INSTALLED_MODULES_DETAILS: "/stack-manager/installed/details";
        readonly ABOUT: "/stack-manager/about";
        readonly ABOUT_RELEASES: "/stack-manager/about/releases";
    };
};
