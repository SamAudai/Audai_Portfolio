import { trigger, state, style, animate, transition } from '@angular/animations'; 

//Animation Support for Route Changes
export function flyInOut() {
    return trigger('flyInOut', [
        state('*', style({ opacity: 1, transform: 'translateX(0)'})),
        transition(':enter', [
            style({ transform: 'translateX(-100%)', opacity: 0 }),
            animate('1s ease-in')
        ]),
        transition(':leave', [
            animate('500ms ease-out', style({ transform: 'translateY(100%)', opacity: 0}))
        ])
    ]);
}

//Animation to Render View from Changed Language
export function expand() {
    return trigger('expand', [
        state('*', style({ opacity: 1, transform: 'translateX(0)' })),
        transition(':enter', [
            style({ transform: 'translateY(-50%)', opacity:0 }),
            animate('1s ease-in', style({ opacity: 1, transform: 'translateX(0)' }))
        ])
    ]);
}