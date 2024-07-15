import {Component, Input, OnChanges} from '@angular/core';
import {Email} from "../email";
import {EmailService} from "../email.service";

@Component({
  selector: 'app-email-reply',
  templateUrl: './email-reply.component.html',
  styleUrl: './email-reply.component.css'
})
export class EmailReplyComponent implements OnChanges {
  showModal = false;
  @Input() email: Email = {
    id: '',
    to: '',
    subject: '',
    html: '',
    text: '',
    from: ``
  };

  constructor(private emailService: EmailService) {
  }

  ngOnChanges(): void {
    const formattedText = this.email.text.replace(/\n/gi, '\n> ');
    this.email = {
      ...this.email,
      to: this.email.from,
      from: this.email.to,
      subject: `RE: ${this.email.subject}`,
      text: `\n\n\n-------- ${this.email.from} wrote:\n>${formattedText}`,
    };
  }

  onSubmit(email: Email) {
    this.emailService.sendEmail(email)
      .subscribe(() => {
        this.showModal = false;
      })
  }
}
