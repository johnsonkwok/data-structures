describe('hashTable', function() {
  var hashTable;
  var people = [['Steven', 'Tyler'], ['George', 'Harrison'], ['Mr.', 'Doob'], ['Dr.', 'Sunshine'], ['John', 'Resig'], ['Brendan', 'Eich'], ['Alan', 'Turing']];


  beforeEach(function() {
    hashTable = new HashTable();
  });

  it('should have methods named "insert", "remove", and "retrieve', function() {
    expect(hashTable.insert).to.be.a('function');
    expect(hashTable.remove).to.be.a('function');
    expect(hashTable.retrieve).to.be.a('function');
  });

  it('should store values that were inserted', function() {
    hashTable.insert('Steven', 'Seagal');
    expect(hashTable.retrieve('Steven')).to.equal('Seagal');
  });

  it('should not contain values that were not inserted', function() {
    hashTable.insert('Steven', 'Spielberg');
    expect(hashTable.retrieve('Steven')).not.to.equal('Seagal');
  });

  it('should overwrite values that have the same key', function() {
    hashTable.insert('Bob', 'Loblaw');
    hashTable.insert('Bob', 'Barker');
    expect(hashTable.retrieve('Bob')).to.equal('Barker');
  });

  it('should not contain values that were removed', function() {
    hashTable.insert('Steven', 'Tyler');
    hashTable.remove('Steven');
    expect(hashTable.retrieve('Steven')).to.equal(undefined);
  });
  
  it('should handle hash function collisions', function() {
    var v1 = 'val1';
    var v2 = 'val2';
    var oldHashFunction = window.getIndexBelowMaxForKey;
    window.getIndexBelowMaxForKey = function() { return 0; };
    hashTable.insert(v1, v1);
    hashTable.insert(v2, v2);
    expect(hashTable.retrieve(v1)).to.equal(v1);
    expect(hashTable.retrieve(v2)).to.equal(v2);
    window.getIndexBelowMaxForKey = oldHashFunction;
  });
  
  // additional tests
  it('should handle hash function collisions for multiple indexes in storage', function() {
    var v1 = 'val1';
    var v2 = 'val2';
    var v3 = 'val3';
    var v4 = 'val4';
    var v5 = 'val5';
    var v6 = 'val6';
    var oldHashFunction = window.getIndexBelowMaxForKey;
    window.getIndexBelowMaxForKey = function() { return 0; };
    hashTable.insert(v1, v1);
    hashTable.insert(v2, v2);
    expect(hashTable.retrieve(v1)).to.equal(v1);
    expect(hashTable.retrieve(v2)).to.equal(v2);
    window.getIndexBelowMaxForKey = function() { return 1; };
    hashTable.insert(v3, v3);
    hashTable.insert(v4, v4);
    expect(hashTable.retrieve(v3)).to.equal(v3);
    expect(hashTable.retrieve(v4)).to.equal(v4);
    window.getIndexBelowMaxForKey = function() { return 2; };
    hashTable.insert(v5, v5);
    hashTable.insert(v6, v6);
    expect(hashTable.retrieve(v5)).to.equal(v5);
    expect(hashTable.retrieve(v6)).to.equal(v6);
    window.getIndexBelowMaxForKey = oldHashFunction;
  });

  it('should overwrite values that have the same key when not inserted consecutively', function() {
    hashTable.insert('Bob', 'Loblaw');
    hashTable.insert('Megan', 'Blake');
    hashTable.insert('Megan', 'Collins');
    hashTable.insert('Bob', 'Williams');
    hashTable.insert('Bob', 'Barker');
    expect(hashTable.retrieve('Bob')).to.equal('Barker');
    expect(hashTable.retrieve('Megan')).to.equal('Collins');
  });
  
  // (Advanced! Remove the extra "x" when you want the following tests to run)
  xit ('should double in size when needed', function() {
    _.each(people, function(person) {
      var firstName = person[0];
      var lastName = person[1];
      hashTable.insert(firstName, lastName);
      expect(hashTable.retrieve(firstName)).to.equal(lastName);
    });
    expect(hashTable._limit).to.equal(16);
  });

  xit ('should halve in size when needed', function() {
    _.each(people, function(person) {
      var firstName = person[0];
      var lastName = person[1];
      hashTable.insert(firstName, lastName);
      expect(hashTable.retrieve(firstName)).to.equal(lastName);
    });
    expect(hashTable._limit).to.equal(16);
    hashTable.remove('George');
    hashTable.remove('Dr.');
    hashTable.remove('Steven');
    hashTable.remove('John');
    hashTable.remove('Mr.');
    expect(hashTable._limit).to.equal(8);
  });
});
