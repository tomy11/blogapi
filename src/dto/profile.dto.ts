export class ProfileDto {
    readonly pId?: number;
    readonly firstName?: string;
    readonly middleName?: string;
    readonly lastName?: string;
    readonly mobile?: string;
    readonly passWordHash?: string;
    readonly registerAt?: Date;
    readonly lastLogin?: Date;
    readonly profile?: string;
}