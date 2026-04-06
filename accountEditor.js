import { LightningElement, api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class AccountEditor extends LightningElement {
    @api objectApiName;

    isProspect = false;

    handleTypeChange(event) {
        const value = event.detail.value || '';
        this.isProspect = value === 'Prospect';
    }

    handleSuccess() {
        this.dispatchEvent(
            new ShowToastEvent({
                title: 'Success',
                message: 'Account saved successfully',
                variant: 'success'
            })
        );
    }
}
