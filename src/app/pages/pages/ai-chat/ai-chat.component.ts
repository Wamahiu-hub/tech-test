import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

interface Message {
  sender: string;
  text: string | SafeHtml;
  timestamp: Date;
  loading?: boolean;
}

@Component({
  selector: 'app-ai-chat',
  imports: [FormsModule,CommonModule],
  templateUrl: './ai-chat.component.html',
  styleUrl: './ai-chat.component.css'
})
export class AiChatComponent {
  @ViewChild('messagesContainer') private messagesContainer!: ElementRef;
  userInput = '';
  messages: Message[] = [];
  isSending = false;

  constructor(
    private router: Router,
    private http: HttpClient,
    private sanitizer: DomSanitizer
  ) { }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  private scrollToBottom(): void {
    try {
      this.messagesContainer.nativeElement.scrollTop = this.messagesContainer.nativeElement.scrollHeight;
    } catch (err) { }
  }

  async sendMessage() {
    const userMessage = this.userInput.trim();
    if (!userMessage || this.isSending) return;

    // Add user message
    this.messages.push({
      sender: 'user',
      text: userMessage,
      timestamp: new Date()
    });

    // Add loading indicator
    const loadingMessage: Message = {
      sender: 'ai',
      text: 'Thinking...',
      timestamp: new Date(),
      loading: true
    };
    this.messages.push(loadingMessage);

    this.userInput = '';
    this.isSending = true;

    try {
      const response = await this.http.post(
        `${environment.apiUrl}/AI/chat`,
        { question: userMessage },
        { responseType: 'text' }
      ).toPromise();

      // Remove loading indicator
      this.messages.pop();
      
      const aiText = response || 'I could not process your request.';
      const formattedText = this.formatResponse(aiText);
      
      this.messages.push({
        sender: 'ai',
        text: this.sanitizer.bypassSecurityTrustHtml(formattedText),
        timestamp: new Date()
      });

    } catch (error) {
      this.messages.pop();
      this.messages.push({
        sender: 'ai',
        text: '⚠️ Failed to get response. Please try again.',
        timestamp: new Date()
      });
      console.error('Chat error:', error);
    } finally {
      this.isSending = false;
    }
  }

  private formatResponse(text: string): string {
    // Simple markdown formatting
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/(https?:\/\/[^\s]+)/g, '<a href="$1" target="_blank" rel="noopener">$1</a>')
      .replace(/\n/g, '<br>');
  }
  logout() {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('userRole');
    this.router.navigate(['/login']);
  }
}
