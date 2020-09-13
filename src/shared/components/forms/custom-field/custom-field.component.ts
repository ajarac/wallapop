import { ChangeDetectionStrategy, Component, ContentChild, Input, OnInit, ViewChild } from '@angular/core';
import { ValidationErrors } from '@angular/forms';
import { MatFormField, MatFormFieldAppearance, MatFormFieldControl } from '@angular/material/form-field';

@Component({
    selector: 'app-custom-field',
    templateUrl: 'custom-field.component.html',
    styleUrls: ['./custom-field.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomFieldComponent<T> implements OnInit {
    @Input() appearance: MatFormFieldAppearance = 'outline';
    @Input() label: string;
    @ContentChild(MatFormFieldControl, { static: true }) control: MatFormFieldControl<T>;
    @ViewChild(MatFormField, { static: true }) matFormField: MatFormField;

    get errors(): ValidationErrors {
        return this.control && this.control.ngControl && this.control.ngControl.errors;
    }

    ngOnInit(): void {
        this.matFormField._control = this.control;
    }
}
