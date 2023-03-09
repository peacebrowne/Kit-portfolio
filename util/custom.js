/**
 * returning node element based on the specified class or id value;
 * @param {value} - class or id attribute value;
 * @returns {node element} - node element
 */
const element = value => {
    return document.querySelector(value)
}

/**
 * Removes a class value from an element
 * @param {ele} - node element
 * @param {clas} - Class to remove from the specified html element.
 */
const remove_class = (ele,clas) => ele.classList.remove(clas)

/**
 * Add a class value to an element
 * @param {ele} - node element
 * @param {clas} - Class to be added to the specified html element.
 */
const add_class = (ele,clas) => ele.classList.add(clas);

/**
 * @param {ele} - Query the DOM for specified element and make it visible.
 */
const show_ele = (ele,val) => ele.style.display = val;

/**
 * @param {ele} - Query the DOM for specified element and make it hidden.
*/
const hide_ele = (ele,val) => ele.style.display = val;
