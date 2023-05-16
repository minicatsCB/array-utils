declare module "array-utils" {
    interface OsDetails {
        arch: string;
        hostname: string;
        platform: NodeJS.Platform;
        release: string;
        type: string;
    }
}