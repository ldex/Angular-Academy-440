import { ActivatedRoute } from '@angular/router';
import { Component, inject } from '@angular/core';

@Component({
    templateUrl: './error.component.html',
    standalone: true,
})
export class ErrorComponent {
    private route = inject(ActivatedRoute);


    message: string = "";

    constructor() {
		this.message = this.route.snapshot.queryParams['reason'] || 'Sorry there was a problem.';
    }
}