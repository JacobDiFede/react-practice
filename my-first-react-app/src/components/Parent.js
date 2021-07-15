import { Form } from './Form';
import EmailService from '../services/email.service';

export const Parent = () => {
    const emailService = new EmailService();

    const logFormData = (data) => {
        emailService.subscribeUserToEmailList(data);
    }

    return (
        <div>
            <h2>Parent</h2>
            <Form logFormData={logFormData}/>
        </div>
    )
}