/* ============
 * Transformer
 * ============
 *
 * The base transformer.
 *
 * Transformers are used to transform the fetched data
 * to a more suitable format.
 * For instance, when the fetched data contains snake_cased values,
 * they will be camelCased.
 */

import _ from 'lodash';

export default class Transformer {
  /**
   * Method used to transform a fetched data
   *
   * @param param
   * @return {*}
   */
  static fetch(param: any) {
    if (param && Array.isArray(param)) {
      return Transformer.fetchCollection(param);
    } else if (param && typeof param === 'object') {
      return Transformer.fetchObject(param);
    }
    return param
  }
  
  /**
   * Method used to transform a fetched collection
   *
   * @param param
   * @return [Array]
   */
  static fetchCollection(param: any[]):any {
    return param.map((item: any) => Transformer.fetch(item));
  }
  
  /**
   * Method used to transform a fetched object
   *
   * @param param
   * @return {{}}
   */
  static fetchObject(param: any) {
    const data:any = {};
    
    _.forOwn(param, (value, key) => {
      data[key] = Transformer.fetch(value);
      // data[_.camelCase(key)] = Transformer.fetch(value);
    });
    return data;
  }
  
  /**
   * Method used to transform a send data
   *
   * @param param
   * @return {*}
   */
  static send(param: any):any {
    if (param && Array.isArray(param)) {
      return Transformer.sendCollection(param);
    } else if (param && typeof param === 'object') {
      return Transformer.sendObject(param);
    }
    return param
  }
  
  /**
   * Method used to transform a collection to be send
   *
   * @param param
   * @return [Array]
   */
  static sendCollection(param: any[]) {
    return param.map((item: any) => Transformer.send(item));
  }
  
  /**
   * Method used to transform a object to be send
   *
   * @param param
   * @returns {{}}
   */
  static sendObject(param: any) {
    const data:any = {};
    
    _.forOwn(param, (value, key) => {
      data[key] = Transformer.send(value);
      // data[_.snakeCase(key)] = Transformer.send(value);
    });
    return data;
  }
  
  /**
   * Method used to transform a form errors
   *
   * @param errors The fetched data
   * @param replace Boolean
   * @param searchStr String
   * @param replaceStr String
   * @returns {{}}
   */
  static resetValidationFields({ errors=null, replace = false, searchStr = '', replaceStr = '' }) {
    const data:any = {}
    _.forOwn(errors, (value, key) => {
      let index = '';
      if (replace) {
        index = _.camelCase(key.replace(searchStr, replaceStr));
      } else {
        index = _.camelCase(key);
      }
      data[index] = _.head(value);
    });
    return data;
  }
}
