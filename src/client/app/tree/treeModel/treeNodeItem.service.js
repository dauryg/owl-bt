'use strict';

(function() {

  /**
   * Common node item functions
   */
  class TreeNodeItem {

    /**
     * returns plain object with all properties (including default values) - usable for templates
     * @param  {Object} nodeItem - node/service/descriptor
     * @param  {Object} nodeItem.properties - item properties
     * @param  {Object} nodeItem.$meta.desc - item desc
     * @return {Object} plain obj with all properties
     */
    resolvedPropertyObj(nodeItem) {
      let desc = nodeItem.$meta.desc;
      let properties = {};
      if (desc.properties) {
        desc.properties.forEach(property => {
          properties[property.name] = property.default;
        });
        angular.extend(properties, nodeItem.properties);
      }
      return properties;
    }

    getDescription(nodeItem){
      let desc = nodeItem.$meta.desc;
      if(desc.description){
        return desc.description(this.resolvedPropertyObj(nodeItem));
      }
    }
  }

  angular.module('editorApp')
    .service('TreeNodeItem', TreeNodeItem);
})();
