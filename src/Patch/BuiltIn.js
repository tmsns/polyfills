export default {
  Document_createElement: window.Document.prototype.createElement,
  Document_createElementNS: window.Document.prototype.createElementNS,
  Document_importNode: window.Document.prototype.importNode,
  Document_prepend: window.Document.prototype['prepend'],
  Document_append: window.Document.prototype['append'],
  Node_cloneNode: window.Node.prototype.cloneNode,
  Node_appendChild: window.Node.prototype.appendChild,
  Node_insertBefore: window.Node.prototype.insertBefore,
  Node_removeChild: window.Node.prototype.removeChild,
  Node_replaceChild: window.Node.prototype.replaceChild,
  Element_attachShadow: window.Element.prototype['attachShadow'],
  Element_attributes: Object.getOwnPropertyDescriptor(window.Element.prototype, 'attributes'),
  Element_id: Object.getOwnPropertyDescriptor(window.Element.prototype, 'id'),
  Element_classList: Object.getOwnPropertyDescriptor(window.Element.prototype, 'classList'),
  Element_className: Object.getOwnPropertyDescriptor(window.Element.prototype, 'className'),
  Element_slot: Object.getOwnPropertyDescriptor(window.Element.prototype, 'slot'),
  Element_innerHTML: Object.getOwnPropertyDescriptor(window.Element.prototype, 'innerHTML'),
  Element_getAttribute: window.Element.prototype.getAttribute,
  Element_setAttribute: window.Element.prototype.setAttribute,
  Element_removeAttribute: window.Element.prototype.removeAttribute,
  Element_getAttributeNS: window.Element.prototype.getAttributeNS,
  Element_setAttributeNS: window.Element.prototype.setAttributeNS,
  Element_removeAttributeNS: window.Element.prototype.removeAttributeNS,
  Element_setAttributeNode: window.Element.prototype.setAttributeNode,
  Element_setAttributeNodeNS: window.Element.prototype.setAttributeNodeNS,
  Element_removeAttributeNode: window.Element.prototype.removeAttributeNode,
  Element_insertAdjacentElement: window.Element.prototype['insertAdjacentElement'],
  Element_prepend: window.Element.prototype['prepend'],
  Element_append: window.Element.prototype['append'],
  Element_before: window.Element.prototype['before'],
  Element_after: window.Element.prototype['after'],
  Element_replaceWith: window.Element.prototype['replaceWith'],
  Element_remove: window.Element.prototype['remove'],
  HTMLElement: window.HTMLElement,
  DOMTokenList_add: window.DOMTokenList.prototype.add,
  DOMTokenList_remove: window.DOMTokenList.prototype.remove,
  DOMTokenList_toggle: window.DOMTokenList.prototype.toggle,
  DOMTokenList_replace: window.DOMTokenList.prototype.replace,
  DOMTokenList_value: Object.getOwnPropertyDescriptor(window.DOMTokenList.prototype, 'value'),
  Attr_value: Object.getOwnPropertyDescriptor(window.Attr.prototype, 'value'),
  // NOTE: Chrome doesn't match the DOM spec and adds the `nodeValue` setter to
  // `Attr`. Also, we patch `Attr` instead of `Node` with a switch because the
  // general case (a context object of type `Element` or `Node` itself) has no
  // effect on custom elements.
  Attr_nodeValue:
    Object.getOwnPropertyDescriptor(window.Attr.prototype, 'nodeValue') ||
    Object.getOwnPropertyDescriptor(window.Node.prototype, 'nodeValue'),
  NamedNodeMap_setNamedItem: window.NamedNodeMap.prototype.setNamedItem,
  NamedNodeMap_setNamedItemNS: window.NamedNodeMap.prototype['setNamedItemNS'],
  NamedNodeMap_removeNamedItem: window.NamedNodeMap.prototype.removeNamedItem,
  NamedNodeMap_removeNamedItemNS: window.NamedNodeMap.prototype['removeNamedItemNS'],
};
