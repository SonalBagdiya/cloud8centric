import constants from '../constants';

let {SHOW_NAVIGATION_MENU, HIDE_NAVIGATION_MENU, HIDE_PRODUCTS, SHOW_PRODUCTS} = constants;

export function showNavigationMenu(){
    return {
        type:SHOW_NAVIGATION_MENU
    }
}

export function hideNavigationMenu(){
    return {
        type:HIDE_NAVIGATION_MENU
    }
}

export function showProducts(){
    return{
        type:SHOW_PRODUCTS
    }
}

export function hideProducts(){
    return{
        type:HIDE_PRODUCTS
    }
}
