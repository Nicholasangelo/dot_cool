export function keyDownA11y(handler) {
    return function onKeyDown(event) {
        if (['keydown', 'keypress'].includes(event.type) && ['Enter', ' '].includes(event.key)) {
            handler();
        }
    };
}
