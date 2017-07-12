import { transition, style, trigger, animate, animation, useAnimation } from '@angular/animations';

const slideAnimation = animation([
    style({
        opacity: '{{ startOpacity }}'
    }),
    animate('{{ duration }}')
], {params: {startOpacity: 0, duration: '100ms'}});

export const slideStateTrigger = (params) => trigger('slideState', [
    transition(
        ':enter', [
          useAnimation(slideAnimation, {params: params})
        ]
      )
]);


const easeInAnimation = animation([
    style({'transform': 'translateX(-100%)', 'opacity': 0}),
    animate('{{ duration }}', style({transform: 'translateX(0)', 'opacity': 1}))
], { params: { duration: '300ms' }});

const easeOutAnimation = animation([
    style({'transform': 'translateX(0)', 'opacity': 1}),
    animate('{{ duration }}', style({transform: 'translateX(-100%)', 'opacity': 0}))
], { params: { duration: '300ms' }});

export const easeStateTrigger = (enter, leave) => trigger('easeState', [
    transition(
        ':enter', [
            useAnimation(easeInAnimation, {params: enter})
        ]
    ),
    transition(
        ':leave', [
            useAnimation(easeOutAnimation, {params: leave})
        ]
    )
]);
