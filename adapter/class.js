'use strict';

function isJSON(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

class LibraryConsumer {
  constructor() {
    this.library = null;
  }

  setLibrary(library) {
    this.library = library
    return;
  }
  useLibrary(object) {
    this.library.analyseJSON(object);
    return;
  }
}

class JSONAnalyticsLibrary {
  analyseJSON(jsonObj) {
    try {
      let obj = JSON.parse(jsonObj);
      let keys = Object.keys(obj);
      let values = Object.values(obj);
      console.log(keys);
      console.log(values);

    }
    catch(err) {
      console.log(err);
    }
  }
}

class LibraryAdapter {
  constructor(library) {
    this.library = library;
  }
  analyseJSON(object) {
    if(isJSON(object)) {
      this.library.analyseJSON(object);
      return;
    } else if(typeof object === 'object') {
      let json = JSON.stringify(object);
      this.library.analyseJSON(json);
      return;
    }
    throw new Error('Invalid object param in analyseJSON');
  }

}

const analyticLibrary = new JSONAnalyticsLibrary();
const libraryAdapter = new LibraryAdapter(analyticLibrary);
const libraryConsumer = new LibraryConsumer();
libraryConsumer.setLibrary(libraryAdapter);
console.log(libraryAdapter);
console.log(libraryConsumer);
libraryConsumer.useLibrary({age: 5, name: '3333'});
libraryConsumer.useLibrary(JSON.stringify({age: 125, name: 'BILL'}));
