function area(number1,num2) {
    valNum = parseInt(number1);
    valnum = parseInt(num2);
    fToC = number1 * num2;
    return fToC; 
  }

QUnit.test("area", function(assert) {
    assert.equal(area(5,6), 30, "area is== 30");
    assert.equal(area(4,7),28, "area is== 28");
    assert.equal(area(2,3), 6, "area is== 6");
    assert.equal(area(5,8), 40, "area is== 40");
    assert.equal(area(10,20), 200, "area is== 200");
 });