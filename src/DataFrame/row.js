/**
 * Basic functions for manipulating table rows.
 *
 */


export function createRow(df){
  //TODO(nsumikawa) add sanity checks to prevent overwriting of index
  for(let i=0; i<df.length; i++){
    df[i]['__index__'] = i;
  }
  return df;
}

 /**
  *  returns the values of the data at the specified index
  * @param  {[type]} df                [description]
  * @param  {[type]} idx               [description]
  * @return {[type]}     [description]
  */
function loc(df, idx){
  return df.filter(row => row.__index__ === idx )
}
 //
 // // return the values of the data at the relative row number
 // iloc( idx, props={Series:true} ){
 //
 //   // return a DataFrame when a list of index are proived
 //   if( typeof idx == "object" ){
 //     var array = []
 //     for( var i=0; i < idx.length; i++ ){
 //       array.push( this[i] )
 //     }
 //     return new jsonArray(array)
 //   }
 //
 //   if( props.Series === true ){
 //     const index = Object.keys(this[idx])
 //     const value = Object.values(this[idx])
 //     return new Series({index: index, value: value, dtypes: this.dtypes})
 //   }
 //
 //   return this[idx]
 // }
 //
 // /**
 //  * overwrites the local index column with the provided column
 //  * @param {String} col Column name
 //  */
 // set_index( col, params={} ){
 //   var array = this.__inplace__(params['inplace'])
 //
 //   for( var i=0; i < array.length; i ++ ){
 //     array[i].__index__ = array[i][col]
 //     delete array[i][col]
 //   }
 //
 //   return array
 // }
