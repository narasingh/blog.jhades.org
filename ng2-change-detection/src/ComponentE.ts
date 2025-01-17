
import {ChangeDetectionLoggingComponent} from "./ChangeDetectionLoggingComponent";
import {Component, Input} from "angular2/core";
import {CounterStore} from "./CounterStore";

@Component({
    selector: 'component-e',
    template: `<div class="component-e">
                    <div class="counter">E: {{counter}}</div>
               </div>`
})
export class ComponentE extends ChangeDetectionLoggingComponent  {

    @Input() counter = 0;

    constructor(private counterStore: CounterStore) {
        super('        ComponentE');
    }

}