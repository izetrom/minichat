import { Component, Input, OnInit } from '@angular/core';
import { MessagesService } from 'src/app/service/messages.service';
import { Subject, takeUntil} from 'rxjs';

@Component({
  selector: 'list-message',
  templateUrl: './list-message.component.html',
  styleUrls: ['./list-message.component.css']
})
export class ListMessageComponent implements OnInit {

    private _unsubscribeAll: Subject<any> = new Subject<any>();
    public messages: [string, boolean][] = [];
    @Input() isFirst = false;
    constructor(private messagesService: MessagesService) { }

    ngOnInit(): void {
        this.messagesService.messages$.pipe(takeUntil(this._unsubscribeAll)).subscribe((message) => {
            this.messages.push(message);
        });
    }

    ngOnDestroy(): void {
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
    }

}
