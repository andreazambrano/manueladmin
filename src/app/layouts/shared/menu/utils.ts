
/**
 * Toggles the menu items
 * @param activeClass
 * @param dropdownActiveClass
 * @param action
 */
const activateMenuItems = (activeClass: string, dropdownActiveClass: string) => {
    const links = document.getElementsByClassName('side-nav-link-ref');

    let menuItemEl = null;
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < links.length; i++) {
        // tslint:disable-next-line: no-string-literal
        if (window.location.pathname === links[i]['pathname']) {
            menuItemEl = links[i];
            break;
        }
    }

    if (menuItemEl) {
        menuItemEl.classList.add('active');
        const parentEl = menuItemEl.parentElement;

        if (parentEl) {
            parentEl.classList.add(activeClass);

            const parent2El = parentEl.parentElement;
            if (parent2El) {
                parent2El.classList.add(dropdownActiveClass);
            }

            const parent3El = parent2El.parentElement;
            if (parent3El) {
                parent3El.classList.add(activeClass);

                if (parent3El.classList.contains('side-nav-item')) {
                    const firstAnchor = parent3El.querySelector('.side-nav-link-a-ref');

                    if (firstAnchor) {
                        firstAnchor.classList.add('active');
                    }
                }

                const parent4El = parent3El.parentElement;
                if (parent4El) {
                    parent4El.classList.add(dropdownActiveClass);

                    const parent5El = parent4El.parentElement;
                    if (parent5El) {
                        parent5El.classList.add(activeClass);
                    }
                }
            }
        }
    }
};


/**
 * Resets the menus
 * @param activeClass
 * @param dropdownActiveClass
 */
const resetMenuItems = (activeClass: string, dropdownActiveClass: string) => {
    const links = document.getElementsByClassName('side-nav-link-ref');


    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < links.length; i++) {
        const menuItemEl = links[i];
        menuItemEl.classList.remove('active');
        const parentEl = menuItemEl.parentElement;

        if (parentEl) {
            parentEl.classList.remove(activeClass);

            const parent2El = parentEl.parentElement;
            if (parent2El) {
                parent2El.classList.remove(dropdownActiveClass);
            }

            const parent3El = parent2El.parentElement;
            if (parent3El) {
                parent3El.classList.remove(activeClass);

                if (parent3El.classList.contains('side-nav-item')) {
                    const firstAnchor = parent3El.querySelector('.side-nav-link-a-ref');

                    if (firstAnchor) {
                        firstAnchor.classList.remove('active');
                    }
                }

                const parent4El = parent3El.parentElement;
                if (parent4El) {
                    parent4El.classList.remove(dropdownActiveClass);

                    const parent5El = parent4El.parentElement;
                    if (parent5El) {
                        parent5El.classList.remove(activeClass);
                    }
                }
            }
        }
    }
};

export { activateMenuItems, resetMenuItems };
