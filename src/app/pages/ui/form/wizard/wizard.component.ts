import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

import { WizardComponent as BaseWizardComponent } from 'angular-archwizard';

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.scss']
})

/**
 * Form-wizard component - handling form-wizard with sidebar and content
 */
export class WizardComponent implements OnInit {
  // bread crumb items
  breadCrumbItems: Array<{}>;

  // validation form
  validationForm: FormGroup;
  profileValidationForm: FormGroup;

  submit: boolean;
  submitForm: boolean;
  @ViewChild('wizardForm', { static: false }) wizardForm: BaseWizardComponent;

  constructor(public formBuilder: FormBuilder) { }

  ngOnInit() {
    // tslint:disable-next-line: max-line-length
    this.breadCrumbItems = [{ label: 'Shreyu', path: '/' }, { label: 'Forms', path: '/' }, { label: 'Form Wizard', path: '/', active: true }];

    /**
     * form value validation
     */
    this.validationForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
      confirm: ['', Validators.required],
    });

    /**
     * form value validation
     */
    this.profileValidationForm = this.formBuilder.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', Validators.required],
    });

    this.submit = false;
    this.submitForm = false;
  }

  /**
   * Returns form
   */
  get form() {
    return this.validationForm.controls;
  }

  /**
   * Returns form
   */
  get profileForm() {
    return this.profileValidationForm.controls;
  }

  /**
   * Go to next step while form value is valid
   */
  formSubmit() {
    if (this.validationForm.valid) {
      this.wizardForm.goToNextStep();
    }
    this.submit = true;
  }

  /**
   * Go to next step while second form value is valid
   */
  profileFormSubmit() {
    if (this.profileValidationForm.valid) {
      this.wizardForm.goToNextStep();
    }
    this.submitForm = true;
  }
}
