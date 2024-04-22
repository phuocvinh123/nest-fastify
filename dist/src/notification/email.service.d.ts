import { MailerService } from '@nestjs-modules/mailer';
import { ContactRequestDto } from '@dto';
import { User } from '@model';
export declare class EmailService {
    private readonly mailerService;
    private logger;
    constructor(mailerService: MailerService);
    sendUserConfirmation(user: User, token: string): Promise<void>;
    sendUserContact(context: ContactRequestDto): Promise<void>;
}
